import { styled } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export const StyledContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
});

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(9),
  background: "var(--color-white)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export const BackgroundAura = motion.create(
  styled(Box)({
    position: "absolute",
    top: "20%",
    left: "30%",
    width: "40%",
    height: "40%",
    background:
      "radial-gradient(circle, rgba(107, 191, 89, 0.08) 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: 0,
  })
);

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: "28px",
  fontWeight: 900,
  color: "var(--color-gray-900)",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  color: "var(--color-gray-600)",
  fontSize: "18px",
  lineHeight: 1.8,
  fontWeight: 500,
  textAlign: "center",
  "& p": { marginBottom: theme.spacing(4) },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const HighlightText = styled("span")({
  color: "var(--color-primary)",
  fontWeight: 900,
});

export const DecoratorLine = styled(Box)({
  width: "60px",
  height: "4px",
  background: "var(--color-green)",
  margin: "0 auto",
  marginBottom: "32px",
  borderRadius: "2px",
  opacity: 0.6,
});

export const ItalicText = styled("p")({
  fontStyle: "italic",
  color: "var(--color-gray-600)",
});
