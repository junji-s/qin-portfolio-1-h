import React from "react";

import { IconContext } from "react-icons";
import { HiOutlineMoon } from "react-icons/hi";
import styled from "@emotion/styled";

export const ThemeChangeBtn = () => {
  return (
    <StThemeChangeBtn type="button">
      <IconContext.Provider value={{ color: "black", size: "22" }}>
        <HiOutlineMoon />
      </IconContext.Provider>
    </StThemeChangeBtn>
  );
};

const StThemeChangeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c1c2c5;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #fff;
`;
