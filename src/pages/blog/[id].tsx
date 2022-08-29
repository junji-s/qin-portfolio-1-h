import React from "react";
import { Box, Container, Text } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { client } from "src/lib/microcms";
import { MicrocmsBlog } from "src/type/microcms/blog";
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
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          className="prose"
        />
        <Box pt={60} className="text-center">
          <PrimaryBtn href="/blog">View All</PrimaryBtn>
        </Box>
      </Container>
    </StSection>
  );
};

export default BlogDetail;

// APIリクエストを行うパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map(
    (content: MicrocmsBlog) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// microCMSへAPIリクエスト
export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
