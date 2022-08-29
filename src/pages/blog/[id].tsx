import React from "react";
import { Box, Container, Text } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";

const BlogDetail: NextPage = ({}) => {
  return (
    <StSection style={{ minHeight: "100vh" }}>
      {/* <FvLower text={blog.title} /> */}
      <FvLower text="This is a header" />

      <Container>
        {/* <Text
          size={12}
          color="#909296"
          weight={700}
          className="u-avenir-bold"
          mb={8}
        >
          2022.07.11
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          className="prose"
        /> */}
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

// APIリクエストを行うパスを指定
// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
//   const data = await client.getList({ endpoint: "blogs" });

//   const paths = data.contents.map(
//     (content: MicrocmsBlog) => `/blog/${content.id}`
//   );
//   return { paths, fallback: false };
// };

// microCMSへAPIリクエスト
// export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
//   context
// ) => {
//   if (!context.params) {
//     return {
//       notFound: true,
//     };
//   }
//   const data = await client.getListDetail({
//     endpoint: "blogs",
//     contentId: context.params.id,
//   });

//   return {
//     props: {
//       blog: data,
//     },
//   };
// };
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
    fallback: false,
  };
}
