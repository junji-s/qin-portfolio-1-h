import styled from "@emotion/styled";
import React, { FC } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

export const Hamburger: FC<{ setOpened: any }> = ({ setOpened }) => {
  return (
    <StHamburger>
      <GiHamburgerMenu size={30} onClick={() => setOpened(true)} />
    </StHamburger>
  );
};

const StHamburger = styled.button`
  background-color: transparent;
  width: 34px;
`;
