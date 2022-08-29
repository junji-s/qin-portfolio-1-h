import type { NextPage } from "next";

import { IndexFv } from "src/components/organisms/index/IndexFv";
import { BlogSection } from "src/components/organisms/index/BlogSection";
import { PortfolioSection } from "src/components/organisms/index/PortfolioSection";
import { Container, Grid } from "@mantine/core";
import { GitHubSection } from "src/components/organisms/index/GitHubSection";
import { TwitterSection } from "src/components/organisms/index/TwitterSection";
import { useMediaQuery } from "@mantine/hooks";

import { MicrocmsBlog } from "../type/microcms/blog";
import { UseGetPost } from "src/hooks/microcms/getPost";

const Home: NextPage<{ data: MicrocmsBlog[] }> = ({ data }) => {
  const largeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <IndexFv />
      <BlogSection data={data} />
      <PortfolioSection />
      <Container>
        <Grid columns={2} grow gutter={largeScreen ? 60 : 0}>
          <Grid.Col span={largeScreen ? 1 : 2}>
            <GitHubSection />
          </Grid.Col>
          <Grid.Col span={largeScreen ? 1 : 2}>
            <TwitterSection />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await UseGetPost("blogs", 3);

  return {
    props: {
      data: data.contents,
    },
  };
};

export default Home;
