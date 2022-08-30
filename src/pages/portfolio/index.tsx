import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { PortfolioList } from "src/components/molecules/PortfolioList";
import { client } from "src/lib/microcms";
import { StSection } from "src/style/css/layout/StSection";
import { MicrocmsPortfolio } from "src/type/microcms/portfolio";

const Portfolio: NextPage<{ portfolio: MicrocmsPortfolio[] }> = ({
  portfolio,
}) => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Portfolio" />

        <Container>
          <PortfolioList portfolio={portfolio} />
        </Container>
      </StSection>
    </>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const portfolio = await client.getList({
    endpoint: "portfolio",
  });

  return {
    props: {
      portfolio: portfolio.contents,
    },
  };
};
