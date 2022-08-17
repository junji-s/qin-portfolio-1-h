import styled from "@emotion/styled";
import React, { FC } from "react";

import { Box, Progress } from "@mantine/core";

import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { LangPercent } from "src/components/molecules/github/LangPercent";
import Link from "next/link";

const lang = [
  {
    name: "HTML",
    percent: 65.5,
    color: "#e34c",
  },
  {
    name: "CSS",
    percent: 33.7,
    color: "#563d7c",
  },
  {
    name: "TypeScript",
    percent: 65.5,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    percent: 33.7,
    color: "#F1E05A",
  },
  {
    name: "Other",
    percent: 0.8,
    color: "#EDEDED",
  },
];

export const GithubContents: FC = () => {
  return (
    <StGithubContents>
      <Link href="">
        <a className="ttl">lightsound/nexst-tailwind</a>
      </Link>
      <span className="desc">Next.js starter template.</span>
      <div className="my-2 flex gap-3">
        <span className="c-iconLabel">
          <AiOutlineStar />
          117
        </span>
        <span className="c-iconLabel">
          <BiGitRepoForked />
          18
        </span>
      </div>
      <Progress
        sections={[
          { value: 65.5, color: "#3178C6" },
          { value: 33.7, color: "#F1E05A" },
          { value: 0.8, color: "#EDEDED" },
        ]}
      />
      <Box mt={10}>
        <LangPercent lang={lang} />
      </Box>
    </StGithubContents>
  );
};

const StGithubContents = styled.div`
  &:nth-of-type(n + 2) {
    margin-top: 40px;
  }
  .ttl {
    color: #25262b;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
    display: inline-block;
  }
  .desc {
    display: block;
  }
`;
