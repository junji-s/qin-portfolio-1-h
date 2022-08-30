import styled from "@emotion/styled";
import React, { FC } from "react";
import { PortfolioLink } from "src/components/molecules/PortfolioLink";
import { dayjsConversion } from "src/lib/dayjs";
import { MicrocmsPortfolio } from "src/type/microcms/portfolio";

export const PortfolioList: FC<{ portfolio: MicrocmsPortfolio[] }> = ({
  portfolio,
}) => {
  return (
    <StPortfolioList>
      {portfolio.map((item) => {
        return (
          <li key={item.id}>
            <PortfolioLink
              src={item.img.url}
              title={item.title}
              desc={item.content}
              date={dayjsConversion(item.publishedAt)}
              href={item.url}
            />
          </li>
        );
      })}
    </StPortfolioList>
  );
};

const StPortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  li {
    width: 100%;

    @media (min-width: 576px) {
      width: calc(100% / 2 - 12px);
    }

    @media (min-width: 992px) {
      width: calc(100% / 3 - 16px);
    }
  }
`;
