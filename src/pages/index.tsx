import type { NextPage } from "next";

import { IndexFv } from "src/components/organisms/index/IndexFv";
import { BlogSection } from "src/components/organisms/index/BlogSection";
import { PortfolioSection } from "src/components/organisms/index/PortfolioSection";
import { Container, Grid } from "@mantine/core";
import { GitHubSection } from "src/components/organisms/index/GitHubSection";
import { TwitterSection } from "src/components/organisms/index/TwitterSection";
import { useMediaQuery } from "@mantine/hooks";
import { client } from "src/lib/microcms";
import { MicrocmsBlogObj } from "src/type/microcms/blog";
import { MicrocmsPortfolioObj } from "src/type/microcms/portfolio";

const Home: NextPage<{
  blog: MicrocmsBlogObj;
  portfolio: MicrocmsPortfolioObj;
}> = (props) => {
  const largeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <IndexFv />
      <BlogSection blogs={props.blog.contents} />
      <PortfolioSection portfolio={props.portfolio.contents} />
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
  const blog = await client.getList({
    endpoint: "blogs",
    queries: {
      limit: 3,
    },
  });
  const portfolio = await client.getList({
    endpoint: "portfolio",
    queries: {
      limit: 6,
    },
  });
  return {
    props: {
      blog,
      portfolio,
    },
  };
};

export default Home;
