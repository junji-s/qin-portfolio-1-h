import React, { FC, ReactNode } from "react";

import { Box } from "@mantine/core";

export const StSection: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box py={80} component="section">
      {children}
    </Box>
  );
};
