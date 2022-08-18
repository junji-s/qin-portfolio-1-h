import React from "react";

import { Container } from "@mantine/core";
import { PageLogo } from "src/components/atoms/PageLogo";
import { HeaderLinkList } from "src/components/molecules/HeaderLinkList";
import { ThemeChangeBtn } from "src/components/molecules/ThemeChangeBtn";
import { ModalMenu } from "src/components/molecules/ModalMenu";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <StHeader>
      <Container py={20}>
        <div className="flex items-center">
          <ModalMenu />
          <div className="ml-auto sm:ml-0">
            <PageLogo />
          </div>
          <div className="ml-auto mr-4">
            <HeaderLinkList />
          </div>
          <ThemeChangeBtn />
        </div>
      </Container>
    </StHeader>
  );
};

const StHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 10;

  @media (min-width: 576px) {
    position: relative;
  }
`;
