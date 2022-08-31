import styled from "@emotion/styled";
import React from "react";

export const Footer = () => {
  return (
    <StFooter>
      <small className="copy">© ️2022 Shimabu IT University</small>
    </StFooter>
  );
};

const StFooter = styled.footer`
  border-top: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  .copy {
    color: #868e96;
    font-size: 10px;
    display: block;
    text-align: center;
    width: 100%;
  }
`;
