import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";

interface ChartBarProps {
  height: string | number; // e.g., "50%" or 50
  color: string;
  sx?: SxProps;
}

export const ChartBar = ({ height, color, sx = {} }: ChartBarProps) => (
  <Box
    sx={{
      width: "100%",
      height,
      backgroundColor: color,
      borderRadius: "4px",
      transition: "height 0.3s ease",
      ...sx,
    }}
  />
);
