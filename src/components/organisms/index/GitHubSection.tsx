import React, { FC } from "react";

import { Box, ScrollArea } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { GithubContents } from "src/components/molecules/github/GithubContents";

export const GitHubSection: FC = () => {
  return (
    <StSection>
      <PrimaryTitle order={2}>GitHub</PrimaryTitle>

      <ScrollArea type="auto" style={{ height: 700 }}>
        <GithubContents />
        <GithubContents />
        <GithubContents />
        <GithubContents />
      </ScrollArea>

      <Box pt={24} className="text-center">
        <PrimaryBtn href="#">View on GitHub</PrimaryBtn>
      </Box>
    </StSection>
  );
};
