import styled from "@emotion/styled";
import React, { FC } from "react";
import { BlogLink } from "src/components/molecules/BlogLink";
import { MicrocmsBlog } from "src/type/microcms/blog";

export const BlogList: FC<{ blogs: MicrocmsBlog[] }> = ({ blogs }) => {
  return (
    <StBlogList>
      {blogs.map((blog) => {
        return (
          <li key={blog.id}>
            <BlogLink
              href="/blog/1"
              header={blog.title}
              body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
              date="2022.07.11"
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
