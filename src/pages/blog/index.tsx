import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { BlogList } from "src/components/molecules/BlogList";
import { FvLower } from "src/components/molecules/FvLower";
import { UseGetPost } from "src/hooks/microcms/getPost";
import { StSection } from "src/style/css/layout/StSection";
import { MicrocmsBlog } from "src/type/microcms/blog";

import { useInView } from "react-intersection-observer";

const Blog: NextPage<{ data: MicrocmsBlog[] }> = ({ data }) => {
  const [blogs, setBlogs] = useState(data);
  const [pageNumber, setPageNumber] = useState(2);
  const [moreFlag, setMoreFlag] = useState(true);

  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      UseInfiniteScroll();
    }
  }, [inView]);

  // 続きの記事を取得して配列に結合
  const UseInfiniteScroll = async () => {
    if (moreFlag === false) {
      return;
    }

    setPageNumber((prev) => prev + 1);

    // 続きの記事を取得
    const data = await fetch("/api/infiniteScroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit: 5, offset: (pageNumber - 1) * 5 }),
    });
    const json: MicrocmsBlog[] = await data.json();
    if (json.length === 0) {
      setMoreFlag(false);
      return;
    }

    const newBlogs = [...blogs, ...json];
    setBlogs(newBlogs);
  };

  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Blog" />

        <Container>
          <BlogList data={blogs} />
          <div ref={ref}></div>
        </Container>
      </StSection>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const data = await UseGetPost("blogs");

  return {
    props: {
      data: data.contents,
    },
  };
};
