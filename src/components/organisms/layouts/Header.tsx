import React from "react";

import { Container } from "@mantine/core";
import { PageLogo } from "src/components/atoms/PageLogo";
import { HeaderLinkList } from "src/components/molecules/HeaderLinkList";
import { ThemeChangeBtn } from "src/components/molecules/ThemeChangeBtn";

export const Header = () => {
  return (
    <header>
      <Container py={20}>
        <div className="flex items-center">
          <PageLogo />
          <div className="ml-auto mr-4">
            <HeaderLinkList />
          </div>
          <ThemeChangeBtn />
        </div>
      </Container>
    </header>
  );
};
