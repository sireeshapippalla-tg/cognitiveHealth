import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

/* SECTION */
export const Section = styled(Box)(({ theme }) => ({
  padding: "64px 16px",
  background: "var(--color-white)",

  [theme.breakpoints.up("md")]: {
    padding: "64px 64px",
  },
}));

/* TITLE */
export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  marginBottom: "32px",
  lineHeight: 1.2,
  fontSize: "38px",

  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: 1.2,
  },
}));

/* CARD WRAPPER */
export const MotionCard = styled(motion.div)(() => ({}));

/* CARD */
export const Card = styled(Box)(() => ({
  position: "relative",
  paddingLeft: "32px",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover .line": {
    height: "100%",
  },
}));

/* LEFT LINE */
export const Line = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "3px",
  height: "40px",
  background: "var(--color-primary)",
  transition: "0.3s ease",
}));

/* ICON */
export const QuoteIcon = styled("div")(() => ({
  fontSize: "28px",
  color: "var(--color-primary)",
  marginBottom: "8px",
}));

/* TEXT */
export const QuoteText = styled(Typography)(() => ({
  color: "var(--color-text-muted)",
  lineHeight: 1.8,
  marginBottom: "24px",
}));

export const Author = styled(Typography)(() => ({
  fontWeight: 600,
  color: "var(--color-primary)",
}));

export const Company = styled(Typography)(() => ({
  color: "var(--color-text-secondary)",
}));
export const StyledQuoteIcon = styled(FormatQuoteIcon)(() => ({
  fontSize: 28,
  color: "var(--color-primary)",
  marginBottom: "8px",
}));
