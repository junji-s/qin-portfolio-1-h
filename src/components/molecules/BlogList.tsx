import styled from "@emotion/styled";
import React, { FC } from "react";
import { BlogLink } from "src/components/molecules/BlogLink";
import { dayjsConversion } from "src/lib/dayjs";
import { MicrocmsBlog } from "src/type/microcms/blog";

export const BlogList: FC<{ blogs: MicrocmsBlog[] }> = ({ blogs }) => {
  return (
    <StBlogList>
      {blogs.map((blog) => {
        return (
          <li key={blog.id}>
            <BlogLink
              href={`/blog/${blog.id}`}
              header={blog.title}
              body={blog.content}
              date={dayjsConversion(blog.publishedAt)}
            />
          </li>
        );
      })}
    </StBlogList>
  );
};

const StBlogList = styled.ul`
  li {
    & + li {
      margin-top: 24px;
    }
  }
`;
