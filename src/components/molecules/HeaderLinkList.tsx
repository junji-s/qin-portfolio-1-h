import styled from "@emotion/styled";
import React from "react";
import { HeaderLink } from "src/components/atoms/HeaderLink";

export const HeaderLinkList = () => {
  return (
    <StHeaderLinkList>
      <li>
        <HeaderLink text="About" href="/about" />
      </li>
      <li>
        <HeaderLink text="Blog" href="/blog" />
      </li>
      <li>
        <HeaderLink text="Portfolio" href="/portfolio" />
      </li>
      <li>
        <HeaderLink text="Contact" href="/contact" />
      </li>
    </StHeaderLinkList>
  );
};

const StHeaderLinkList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  & > li {
    & > a {
      display: inline-block;
    }

    & + li {
      margin-left: 16px;
    }
  }
`;
