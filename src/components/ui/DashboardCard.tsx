import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

interface DashboardCardProps {
  children: ReactNode;
  sx?: SxProps; // Allow style overrides
}

export const DashboardCard = ({ children, sx = {} }: DashboardCardProps) => (
  <Box
    sx={{
      backgroundColor: "var(--color-white)",
      borderRadius: "16px",
      padding: "10px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      ...sx,
    }}
  >
    {children}
  </Box>
);
