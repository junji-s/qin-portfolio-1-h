import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";

export const PrimaryTitle: FC<{ children: ReactNode; order: number }> = ({
  children,
  order,
}) => {
  return (
    <>
      {order === 1 && <StPrimaryTitle1>{children}</StPrimaryTitle1>}
      {order === 2 && <StPrimaryTitle2>{children}</StPrimaryTitle2>}
      {order === 3 && <StPrimaryTitle3>{children}</StPrimaryTitle3>}
    </>
  );
};

const StPrimaryTitle1 = styled.h1`
  font-family: "avenirBold";
  font-size: 26px;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;
const StPrimaryTitle2 = StPrimaryTitle1.withComponent("h2");
const StPrimaryTitle3 = StPrimaryTitle1.withComponent("h3");
