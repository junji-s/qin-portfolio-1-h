import React, { FC, ReactNode } from "react";

import styled from "@emotion/styled";
import Link from "next/link";

export const PrimaryBtn: FC<{
  href: string;
  children: ReactNode;
  submit?: boolean;
  target?: boolean;
}> = ({ href, children, submit, target }) => {
  if (submit) {
    return <StPrimarySubmitBtn type="submit">{children}</StPrimarySubmitBtn>;
  }

  return (
    <>
      {target ? (
        <StPrimaryBtn href={href} target="_blank" rel="noreferrer">
          {children}
        </StPrimaryBtn>
      ) : (
        <Link href={href} passHref>
          <StPrimaryBtn>{children}</StPrimaryBtn>
        </Link>
      )}
    </>
  );
};

export const PrimarySubmitBtn: FC<{ children: ReactNode }> = ({ children }) => {
  return <StPrimarySubmitBtn type="submit">{children}</StPrimarySubmitBtn>;
};

const StPrimaryBtn = styled.a`
  background: #25262b;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 10px 22px;
  border-radius: 32px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #25262b;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #25262b;
    transition: all 0.5s;
  }
`;

const StPrimarySubmitBtn = StPrimaryBtn.withComponent("button");
