import React, { FC, ReactNode } from "react";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const StSection: FC<{ children: ReactNode }> = ({ children }) => {
  const largeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Box py={largeScreen ? 80 : 60} component="section">
      {children}
    </Box>
  );
};
