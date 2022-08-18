import React, { FC } from "react";

import { Container } from "@mantine/core";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { StSection } from "src/style/css/layout/StSection";

export const FvLower: FC<{ text: string }> = ({ text }) => {
  return (
    <Container>
      <PrimaryTitle order={1}>{text}</PrimaryTitle>
    </Container>
  );
};
