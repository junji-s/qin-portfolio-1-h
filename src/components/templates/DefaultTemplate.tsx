import React, { FC, ReactNode } from "react";

import { Header } from "../organisms/layouts/Header";
import { Footer } from "../organisms/layouts/Footer";

export const DefaultTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
