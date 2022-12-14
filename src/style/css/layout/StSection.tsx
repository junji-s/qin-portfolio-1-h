import React, { FC, ReactNode } from "react";
import type { CSSProperties } from "react";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const StSection: FC<{
  children: ReactNode;
  style?: CSSProperties;
}> = ({ children, style }) => {
  const largeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Box py={largeScreen ? 80 : 60} component="section" style={style}>
      {children}
    </Box>
  );
};
