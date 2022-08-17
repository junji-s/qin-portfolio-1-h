import React, { FC } from "react";

import { Box } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { GithubContents } from "src/components/molecules/github/GithubContents";

export const GitHubSection: FC = () => {
  return (
    <StSection>
      <PrimaryTitle order={2}>GitHub</PrimaryTitle>

      <GithubContents />
      <GithubContents />
      <GithubContents />
      <GithubContents />

      <Box pt={24} className="text-center">
        <PrimaryBtn href="#">View on GitHub</PrimaryBtn>
      </Box>
    </StSection>
  );
};
