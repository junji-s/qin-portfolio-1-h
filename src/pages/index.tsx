import type { GetStaticProps, NextPage } from "next";

import { IndexFv } from "src/components/organisms/index/IndexFv";
import { BlogSection } from "src/components/organisms/index/BlogSection";
import { PortfolioSection } from "src/components/organisms/index/PortfolioSection";
import { Container, Grid } from "@mantine/core";
import { GitHubSection } from "src/components/organisms/index/GitHubSection";
import { TwitterSection } from "src/components/organisms/index/TwitterSection";
import { useMediaQuery } from "@mantine/hooks";
import { client } from "src/lib/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { MicrocmsBlog, MicrocmsBlogObj } from "src/type/microcms/blog";

const Home: NextPage<MicroCMSListResponse<MicrocmsBlog>> = (props) => {
  const largeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <IndexFv />
      <BlogSection blogs={props.contents} />
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

export const getStaticProps: GetStaticProps<
  MicroCMSListResponse<MicrocmsBlogObj>
> = async () => {
  const data = await client.getList({
    endpoint: "blogs",
    queries: {
      limit: 3,
    },
  });
  return {
    props: data,
  };
};

export default Home;
