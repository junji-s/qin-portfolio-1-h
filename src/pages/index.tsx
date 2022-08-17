import type { NextPage } from "next";

import { IndexFv } from "src/components/organisms/index/IndexFv";
import { BlogSection } from "src/components/organisms/index/BlogSection";
import { PortfolioSection } from "src/components/organisms/index/PortfolioSection";
import { Container, Grid } from "@mantine/core";
import { GitHubSection } from "src/components/organisms/index/GitHubSection";
import { TwitterSection } from "src/components/organisms/index/TwitterSection";

const Home: NextPage = () => {
  return (
    <>
      <IndexFv />
      <BlogSection />
      <PortfolioSection />
      <Container>
        <Grid grow gutter={60}>
          <Grid.Col span={1}>
            <GitHubSection />
          </Grid.Col>
          <Grid.Col span={1}>
            <TwitterSection />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
