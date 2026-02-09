import { Stack } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { TrendText, TrendValue } from "./TrendIndicator.styles";

interface TrendIndicatorProps {
  value: string;
  isPositive: boolean;
  label?: string;
  invertColor?: boolean;
}

export const TrendIndicator = ({
  value,
  isPositive,
  label,
  invertColor = false,
}: TrendIndicatorProps) => {
  const successColor = "#16a34a";
  const errorColor = "#dc2626";

  const color = invertColor
    ? isPositive
      ? errorColor
      : successColor
    : isPositive
      ? successColor
      : errorColor;

  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      {isPositive ? (
        <TrendingUpIcon sx={{ fontSize: 16, color }} />
      ) : (
        <TrendingDownIcon sx={{ fontSize: 16, color }} />
      )}

      <TrendText trendcolor={color}>
        <TrendValue>{value}</TrendValue> {label}
      </TrendText>
    </Stack>
  );
};
