import React, { FC, ReactNode } from "react";

import { Button } from "@mantine/core";
import styled from "@emotion/styled";
import Link from "next/link";

export const PrimaryBtn: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <StPrimaryBtn>{children}</StPrimaryBtn>
    </Link>
  );
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
