import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { PortfolioList } from "src/components/molecules/PortfolioList";
import { StSection } from "src/style/css/layout/StSection";

const Portfolio: NextPage = () => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Portfolio" />

        <Container>
          <PortfolioList />
        </Container>
      </StSection>
    </>
  );
};

export default Portfolio;
