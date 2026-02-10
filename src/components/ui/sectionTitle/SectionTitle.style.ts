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
  backgroundColor: "#3A63D2",
  fontFamily: "Inter",
  color: "#ffffff",
  padding: "4px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  lineHeight: "150%",
  fontWeight: 600,
  marginBottom: "20px",
  letterSpacing: "0.3px",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: 600,
  color: "var(--color-text-dark)",
  lineHeight: '48px',
  fontSize: "32px",
  maxWidth: "900px",
  marginBottom: "16px",

  "& span": {
    color: "var(--color-primary)",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

export const Subtitle = styled(Typography)<SubtitleProps>(({ maxWidth }) => ({
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: '150%',
  color: "var(--color-text-light)",
  maxWidth,
}));
