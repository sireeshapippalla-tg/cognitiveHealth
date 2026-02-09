import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface WrapperProps {
  align: "center" | "left";
}

interface SubtitleProps {
  maxWidth: number;
}

export const Wrapper = styled(Box)<WrapperProps>(({ align }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  textAlign: align,
  alignItems: align === "center" ? "center" : "flex-start",
}));

export const Pill = styled(Box)({
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "4px 14px",
  borderRadius: "999px",
  fontSize: "11px",
  fontWeight: 600,
  marginBottom: "20px",
  letterSpacing: "0.3px",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#111827",
  lineHeight: 1.25,
  fontSize: "34px",
  maxWidth: "900px",
  marginBottom: "16px",

  "& span": {
    color: "#f97316",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

export const Subtitle = styled(Typography)<SubtitleProps>(({ maxWidth }) => ({
  fontSize: "18px",
  lineHeight: 1.6,
  color: "#6b7280",
  maxWidth,
}));
