import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { BlogList } from "src/components/molecules/BlogList";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";
import { MicrocmsBlog } from "src/type/microcms/blog";

import { Loader } from "@mantine/core";

import InfiniteScroll from "react-infinite-scroller";

import { client } from "src/lib/microcms";

const Blog: NextPage<{ blog: MicrocmsBlog[] }> = ({ blog }) => {
  const [blogs, setBlogs] = useState(blog);
  const [moreFlag, setMoreFlag] = useState(true);

  // 続きの記事を取得して配列に結合
  const getPostInfinite = async (pageStart: number) => {
    const data = await fetch("/api/getPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit: 5, offset: pageStart * 5 }),
    });
    const json: MicrocmsBlog[] = await data.json();

    if (json.length < 1) {
      setMoreFlag(false);
      return;
    }
    setBlogs([...blogs, ...json]);
  };

  return (
    <StSection style={{ minHeight: "100vh" }}>
      <FvLower text="Blog" />

      <Container>
        <InfiniteScroll
          loadMore={getPostInfinite}
          hasMore={moreFlag}
          loader={
            <Loader color="red" variant="dots" className="mx-auto" key={0} />
          }
        >
          <BlogList blogs={blogs} />
        </InfiniteScroll>
      </Container>
    </StSection>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const blog = await client.getList({
    endpoint: "blogs",
    queries: {
      limit: 5,
    },
  });

  return {
    props: {
      blog: blog.contents,
    },
  };
};
