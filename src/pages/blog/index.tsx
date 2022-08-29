import { Container, Text } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { BlogList } from "src/components/molecules/BlogList";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";
import { MicrocmsBlog } from "src/type/microcms/blog";

import { useInView } from "react-intersection-observer";
import { client } from "src/lib/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";

// const Blog: NextPage = () => {
//   // console.log(props);

//   // const [blogs, setBlogs] = useState(data);
//   const [pageNumber, setPageNumber] = useState(2);
//   const [moreFlag, setMoreFlag] = useState(true);

//   const { ref, inView } = useInView({});

//   // 続きの記事を取得して配列に結合
//   // const UseInfiniteScroll = async () => {
//   // if (moreFlag === false) {
//   //   return;
//   // }
//   // setPageNumber((prev) => prev + 1);
//   // // 続きの記事を取得
//   // const data = await fetch("/api/infiniteScroll", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({ limit: 5, offset: (pageNumber - 1) * 5 }),
//   // });
//   // const json: MicrocmsBlog[] = await data.json();
//   // if (json.length === 0) {
//   //   setMoreFlag(false);
//   //   return;
//   // }
//   // const newBlogs = [...blogs, ...json];
//   // setBlogs(newBlogs);
//   // };

//   useEffect(() => {
//     if (inView) {
//       // UseInfiniteScroll();
//       console.log("ok");
//     } else {
//       console.log("none");
//     }
//   });

const Blog: NextPage = () => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Blog" />

        <Container>
          {/* <BlogList data={blogs} /> */}
          {/* <div ref={ref}></div> */}
          {/* <BlogList  /> */}
        </Container>
      </StSection>
    </>
  );
};

export default Blog;

// export const getStaticProps: GetStaticProps<
//   MicroCMSListResponse<MicrocmsBlog>
// > = async () => {
//   const data = await client.getList({ endpoint: "blogs" });

//   return {
//     props: {
//       data: data,
//     },
//   };
// };
