import React from "react";
import { Box, Container, Text, TypographyStylesProvider } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { MicrocmsBlog } from "src/type/microcms/blog";
import { client } from "src/lib/microcms";
import { dayjsConversion } from "src/lib/dayjs";

const BlogDetail: NextPage<{ blog: MicrocmsBlog }> = ({ blog }) => {
  return (
    <StSection style={{ minHeight: "100vh" }}>
      <FvLower text={blog.title} />

      <Container>
        <Text
          size={12}
          color="#909296"
          weight={700}
          className="u-avenir-bold"
          mb={8}
        >
          {dayjsConversion(blog.publishedAt)}
        </Text>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </TypographyStylesProvider>
        <Box pt={60} className="text-center">
          <PrimaryBtn href="/blog">View All</PrimaryBtn>
        </Box>
      </Container>
    </StSection>
  );
};

export default BlogDetail;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({
    endpoint: "blogs",
    queries: { limit: 5 },
  });

  const paths = data.contents.map(
    (content: MicrocmsBlog) => `/blog/${content.id}`
  );
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  try {
    const data = await client.getListDetail({
      endpoint: "blogs",
      contentId: context.params.id,
    });

    return {
      props: {
        blog: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
