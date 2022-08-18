import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { BlogList } from "src/components/molecules/BlogList";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";

const Blog: NextPage = () => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Blog" />

        <Container>
          <BlogList />
        </Container>
      </StSection>
    </>
  );
};

export default Blog;
