import styled from "@emotion/styled";
import React, { FC } from "react";
import { BlogLink } from "src/components/molecules/BlogLink";
import { MicrocmsBlog } from "src/type/microcms/blog";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export const BlogList: FC<{ data: MicrocmsBlog[] }> = ({ data }) => {
  return (
    <StBlogList>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <BlogLink
              href={`/blog/${item.id}`}
              header={item.title}
              body={item.content}
              date={dayjs
                .utc(item.publishedAt)
                .tz("Asia/Tokyo")
                .format("YYYY-MM-DD")}
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
