import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(9),
  background: "#fff",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export const BackgroundAura = motion(
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
  }),
);

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: "28px",
  fontWeight: 900,
  color: "#111827",
  lineHeight: 1.1,
  letterSpacing: "-0.04em",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  color: "#4B5563",
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
  color: "#F47A20",
  fontWeight: 900,
});

export const DecoratorLine = styled(Box)({
  width: "60px",
  height: "4px",
  background: "#6BBF59",
  margin: "0 auto",
  marginBottom: "32px",
  borderRadius: "2px",
  opacity: 0.6,
});

export const ItalicText = styled("p")({
  fontStyle: "italic",
  color: "#374151",
});
