import styled from "@emotion/styled";
import React, { FC } from "react";
import { PortfolioLink } from "src/components/molecules/PortfolioLink";

import thum from "../../../public/img/thumbnail.png";

export const PortfolioList: FC = () => {
  return (
    <StPortfolioList>
      <li>
        <PortfolioLink
          src="/img/thumbnail.png"
          width={316}
          height={184}
          title="IT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
      <li>
        <PortfolioLink
          src="/img/thumbnail.png"
          width={316}
          height={184}
          title="IT KINGDOM IT KINGDOMIT KINGDOMIT KINGDOMIT KINGDOMIT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
      <li>
        <PortfolioLink
          src="/img/ogp.jpg"
          width={5001}
          height={2626}
          title="IT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
      <li>
        <PortfolioLink
          src="/img/thumbnail.png"
          width={316}
          height={184}
          title="IT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
      <li>
        <PortfolioLink
          src="/img/ogp.jpg"
          width={5001}
          height={2626}
          title="IT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
      <li>
        <PortfolioLink
          src="/img/thumbnail.png"
          width={316}
          height={184}
          title="IT KINGDOM"
          desc="当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
          date="2021.10 - 2021.12"
        />
      </li>
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
