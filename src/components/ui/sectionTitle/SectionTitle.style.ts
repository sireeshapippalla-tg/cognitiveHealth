import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface WrapperProps {
  align: "center" | "left";
}

interface SubtitleProps {
  maxWidth: number;
  textColor?:string
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



interface TitleProps {
  textcolor?: string;
  highlightcolor?: string;
}

export const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "textcolor" && prop !== "highlightcolor",
})<TitleProps>(({ theme, textcolor, highlightcolor }) => ({
  fontWeight: 800,
  color: textcolor || "#111827",
  lineHeight: 1.25,
  fontSize: "34px",
  maxWidth: "900px",
  marginBottom: "16px",

  "& span": {
    color: highlightcolor || "#f97316",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
}));

export const Subtitle = styled(Typography)<SubtitleProps>(({ maxWidth,textColor }) => ({
  fontSize: "18px",
  lineHeight: 1.6,
  color: textColor || "#6b7280",
  maxWidth,
}));
