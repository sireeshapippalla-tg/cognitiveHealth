import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface WrapperProps {
  align: "center" | "left";
  marginBottom?: number;
}

interface SubtitleProps {
  maxWidth: number;
  textColor?: string;
}
interface TitleProps {
  textcolor?: string;
  highlightcolor?: string;
}
interface PillProps {
  variant?: "primary" | "orange";
}
export const Wrapper = styled(Box)<WrapperProps>(({ align, marginBottom }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  textAlign: align,
  alignItems: align === "center" ? "center" : "flex-start",
  marginBottom: marginBottom || 0,
}));

export const Pill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<PillProps>(({ variant = "primary" }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    variant === "orange" ? "var(--color-primary)" : "var(--color-text-blue)",
  color: "var(--color-white)",
  padding: "6px 16px",
  borderRadius: "999px",
  fontSize: "14px",
  lineHeight: "1.2",
  fontWeight: 600,
  marginBottom: "12px",
  letterSpacing: "0.3px",
  maxWidth: "100%",
  boxSizing: "border-box",

  "& img": {
    display: "block",
    objectFit: "contain",
    marginRight: "8px",
  },
}));

export const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "textcolor" && prop !== "highlightcolor",
})<TitleProps>(({ theme, textcolor, highlightcolor }) => ({
  // fontFamily: "Inter",
  fontWeight: 600,
  color: textcolor || "var(--color-text-dark)",
  lineHeight: "48px",
  fontSize: "32px",
  maxWidth: "900px",
  marginBottom: "10px",

  "& span": {
    color: highlightcolor || "var(--color-primary)",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "28px", // Slightly increased from 26px
    lineHeight: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
}));

export const Subtitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "textColor",
})<SubtitleProps>(({ maxWidth, textColor }) => ({
    // fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "150%",
    color: textColor || "var(--color-text-light)",
    maxWidth,
    textAlign: "center",
    marginBottom: 10,
  })
);
