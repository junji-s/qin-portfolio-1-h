import React, { FC } from "react";

import { Box, Button, Container } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { PortfolioList } from "src/components/molecules/PortfolioList";

export const PortfolioSection: FC = () => {
  return (
    <StSection>
      <Container>
        <PrimaryTitle order={2}>Portfolio</PrimaryTitle>
        <PortfolioList />
        <Box pt={24} className="text-center">
          <PrimaryBtn href="/portfolio">View All</PrimaryBtn>
        </Box>
      </Container>
    </StSection>
  );
};
