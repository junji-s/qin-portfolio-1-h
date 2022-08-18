import React from "react";
import { Box, Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { PortfolioList } from "src/components/molecules/PortfolioList";
import { StSection } from "src/style/css/layout/StSection";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";

const BlogDetail: NextPage = ({}) => {
  return (
    <StSection style={{ minHeight: "100vh" }}>
      <FvLower text="This is a header" />

      <Container>
        <Text
          size={12}
          color="#909296"
          weight={700}
          className="u-avenir-bold"
          mb={8}
        >
          2022.07.11
        </Text>
        <Box>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <Text my={15}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </Box>
        <Box pt={60} className="text-center">
          <PrimaryBtn href="/blog">View All</PrimaryBtn>
        </Box>
      </Container>
    </StSection>
  );
};

export default BlogDetail;

export async function getStaticProps() {
  // const res = await fetch("https://.../posts");
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      // posts,
    },
  };
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}
