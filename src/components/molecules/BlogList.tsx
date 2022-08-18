import styled from "@emotion/styled";
import React from "react";
import { BlogLink } from "src/components/molecules/BlogLink";

export const BlogList = () => {
  return (
    <StBlogList>
      <li>
        <BlogLink
          href="/blog/1"
          header="This is a header"
          body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          date="2022.07.11"
        />
      </li>
      <li>
        <BlogLink
          href="/blog/1"
          header="This is a header"
          body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          date="2022.07.11"
        />
      </li>
      <li>
        <BlogLink
          href="/blog/2"
          header="This is a header"
          body="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          date="2022.07.11"
        />
      </li>
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
