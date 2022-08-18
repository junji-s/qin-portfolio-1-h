import React, { FC } from "react";

import { Box, ScrollArea } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { TwitterContents } from "src/components/molecules/twitter/TwitterContents";

export const TwitterSection: FC = () => {
  return (
    <StSection>
      <PrimaryTitle order={2}>Twitter</PrimaryTitle>

      <ScrollArea type="auto" style={{ height: 700 }}>
        <TwitterContents />
        <TwitterContents />
        <TwitterContents />
      </ScrollArea>

      <Box pt={24} className="text-center">
        <PrimaryBtn href="#">View on Twitter</PrimaryBtn>
      </Box>
    </StSection>
  );
};
