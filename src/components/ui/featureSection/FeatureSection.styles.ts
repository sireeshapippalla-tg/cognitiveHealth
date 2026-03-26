import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

interface SectionProps {
  background?: string;
  borderRadius?: string;
}
interface TitleProps {
  align?: "center" | "left";
}

export const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== "background",
})<SectionProps>(({ theme, background, borderRadius }) => ({
  width: "100%",
  background: background ?? "#ffffff",
  padding: "20px 40px",
  borderRadius: borderRadius ?? "0px",
  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));

export const Inner = styled(Box)({
  // maxWidth: "1200px",
  margin: "0 auto",
});

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "align",
})<TitleProps>(({ theme, align = "center" }) => ({
  fontSize: "32px",
  fontWeight: 700,
  textAlign: align,
  color: "#111827",
  marginBottom: "8px",
  lineHeight:"40px",

  "& span": {
    color: "#ea580c",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  // fontFamily: "Inter",
  textAlign: "center",
  fontSize: "15px",
  color: "var(--color-text-light)",
  maxWidth: "720px",
  margin: "0 auto 32px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
  },
}));

export const TimelineLine = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  left: "40px",
  top: 0,
  width: "3px",
  zIndex: 0,

  [theme.breakpoints.down("md")]: {
    left: "22px",
  },
}));