import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface WrapperProps {
  align: "center" | "left";
  marginBottom?:number
}

interface SubtitleProps {
  maxWidth: number;
  textColor?: string;
}
interface TitleProps {
  textcolor?: string;
  highlightcolor?: string;
}
export const Wrapper = styled(Box)<WrapperProps>(({ align,marginBottom }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  textAlign: align,
  alignItems: align === "center" ? "center" : "flex-start",
  marginBottom: marginBottom || 0,
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

export const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "textcolor" && prop !== "highlightcolor",
})<TitleProps>(({ theme, textcolor, highlightcolor }) => ({
  fontFamily: "Inter",
  fontWeight: 600,
  color: textcolor || "var(--color-text-dark)",
  lineHeight: "48px",
  fontSize: "32px",
  maxWidth: "900px",
  marginBottom: "16px",

  "& span": {
    color: highlightcolor || "var(--color-primary)",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

export const Subtitle = styled(Typography)<SubtitleProps>(
  ({ maxWidth, textColor }) => ({
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "19px",
    lineHeight: "150%",
    color: textColor || "var(--color-text-light)",
    maxWidth,
    textAlign: "center",
  }),
);
