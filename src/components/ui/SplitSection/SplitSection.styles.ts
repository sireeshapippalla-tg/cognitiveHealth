import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* MAIN WRAPPER */
export const Section = styled(Box)<{ padding?: string }>(
  ({ padding, theme }) => ({
    padding: padding || "80px 30px",
    position: "relative",
    overflow: "hidden",
    background: "#F9FAFB",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  })
);

/* INNER WRAPPER */
export const Inner = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  padding: "30px 60px",

  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

/* GRID */
export const GridWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})<{ reverse?: boolean }>(({ theme, reverse }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "64px",
  alignItems: "center",
  direction: reverse ? "rtl" : "ltr",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "40px",
    textAlign: "center",
  },
}));

/* TEXT */
export const Eyebrow = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontWeight: "bold",
  color: "var(--color-dark-gray)",
  marginBottom: "8px",
  lineHeight: 1.2,
  fontSize: "2.8rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
    lineHeight: 1.3,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "var(--color-dark-gray)",
  marginBottom: "20px",
  lineHeight: 1.2,
  fontSize: "2.8rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
    lineHeight: 1.3,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: "var(--color-gray-500)",
  fontSize: "1.1rem",
  lineHeight: 1.6,
  marginBottom: "32px",
  maxWidth: "550px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    margin: "0 auto 32px auto",
  },
}));

/* ACTIONS */
export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const PrimaryButton = styled(Button)(() => ({
  borderRadius: "40px",
  fontWeight: "bold",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  background: "var(--color-primary)",
  color: "var(--color-white)",
  fontSize: "1rem",
  padding: "10px 24px",
  boxShadow: "0 10px 20px rgba(244,122,32,0.2)",

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-80%",
    width: "60%",
    height: "100%",
    background:
      "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
    transform: "skewX(-20deg)",
  },
  "&:hover::after": {
    left: "130%",
    transition: "0.7s",
  },
}));

export const SecondaryButton = styled(Button)(() => ({
  borderRadius: "40px",
  textTransform: "none",
  fontWeight: 600,
  borderColor: "var(--color-primary)",
  color: "var(--color-primary)",
  fontSize: "1rem",
  padding: "10px 24px",

  "&:hover": {
    background: "rgba(107,191,89,0.05)",
    borderColor: "var(--color-primary)",
  },
}));

/* IMAGE */
export const ImageCard = styled(Box)(() => ({
  borderRadius: "20px",
  overflow: "hidden",
  background: "var(--color-white)",
  border: "1px solid #E5E7EB",
  boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
}));

export const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  display: "block",
  imageRendering: "auto",
});

/* BACKGROUND BLOBS */
export const BlobTop = styled(motion.div)(() => ({
  position: "absolute",
  width: 220,
  height: 220,
  background: "radial-gradient(circle, var(--color-primary-dark), transparent)",
  filter: "blur(100px)",
  top: "-60px",
  left: "-60px",
  opacity: 0.15,
}));

export const BlobBottom = styled(motion.div)(() => ({
  position: "absolute",
  width: 220,
  height: 220,
  background: "radial-gradient(circle, #6BBF59, transparent)",
  filter: "blur(100px)",
  bottom: "-60px",
  right: "-60px",
  opacity: 0.15,
}));

export const Highlight = styled("span")(() => ({
  fontWeight: 900,
  background:
    "linear-gradient(90deg, var(--color-primary), var(--color-green), var(--color-text-blue))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientMove 5s linear infinite",
  backgroundSize: "200% auto",
}));

export const MotionContent = styled(motion.div)(() => ({
  width: "100%",
}));
export const MotionImageWrapper = styled(motion.div)(() => ({
  width: "100%",
}));
