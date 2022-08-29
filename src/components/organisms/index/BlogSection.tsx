import React, { FC } from "react";

import { Box, Button, Container } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { BlogList } from "src/components/molecules/BlogList";
import { MicrocmsBlog } from "../../../type/microcms/blog";

export const BlogSection: FC<{ data: MicrocmsBlog[] }> = ({ data }) => {
  return (
    <StSection>
      <Container>
        <PrimaryTitle order={2}>Blog</PrimaryTitle>
        <BlogList data={data} />
        <Box pt={24} className="text-center">
          <PrimaryBtn href="/blog">View All</PrimaryBtn>
        </Box>
      </Container>
    </StSection>
  );
};
