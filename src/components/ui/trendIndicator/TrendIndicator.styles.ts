import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TrendText = styled(Typography)<{
  trendcolor: string;
}>(({ trendcolor }) => ({
  fontSize: "11px",
  fontWeight: 500,
  color: trendcolor,
}));

export const TrendValue = styled("span")({
  fontWeight: 600,
});
