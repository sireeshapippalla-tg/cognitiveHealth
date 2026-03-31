import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* SECTION */
export const Section = styled(Box)(({ theme }) => ({
  padding: "48px 16px",
  display: "flex",
  justifyContent: "center",
  background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
  color: "#0f172a",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    padding: "48px 32px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "64px 64px",
  },
}));

/* CONTAINER */
export const StyledContainer = styled(Container)(() => ({}));

/* CARD */
export const Card = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "32px",
  padding: "32px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",

  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",

  [theme.breakpoints.up("md")]: {
    padding: "64px",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "1.5px",
    borderRadius: "32px",
    background: "linear-gradient(135deg, #F47A20, #6BBF59, #4A90E2)",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    opacity: 0.6,
  },
}));

/* GLOW */
export const Glow = styled(Box)(() => ({
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "radial-gradient(circle, #F47A20 20%, transparent 70%)",
  filter: "blur(100px)",
  top: "-150px",
  right: "-50px",
  opacity: 0.15,
  pointerEvents: "none",
}));

/* MOTION */
export const MotionWrapper = styled(motion.div)(() => ({}));

/* TITLE */
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: "16px",
  lineHeight: 1.4,
  background: "linear-gradient(135deg, #0f172a, #334155)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.75rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    lineHeight: 1.3,
  },
}));

/* SUBTITLE */
export const Subtitle = styled(Typography)(({ theme }) => ({
  color: "#475569",
  maxWidth: "700px",
  margin: "0 auto",
  marginBottom: "48px",
  lineHeight: 1.6,
  fontSize: "1rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
}));

/* BUTTON WRAPPER */
export const ButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap",
  marginBottom: "64px",
}));

/* BUTTONS */
export const PrimaryButton = styled(Button)(() => ({
  borderRadius: "40px",
  fontWeight: "bold",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  background: "#F47A20",
  boxShadow: "0 10px 25px rgba(244,122,32,0.3)",
  padding: "10px 20px",

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

  "@media (min-width:600px)": {
    padding: "12px 24px",
  },
  "@media (min-width:900px)": {
    padding: "14px 28px",
  },
}));

export const SecondaryButton = styled(Button)(() => ({
  borderRadius: "40px",
  textTransform: "none",
  fontWeight: 500,
  borderColor: "#F47A20",
  color: "#F47A20",
  padding: "10px 20px",

  "&:hover": {
    background: "rgba(107,191,89,0.1)",
    borderColor: "#F47A20",
  },

  "@media (min-width:600px)": {
    padding: "12px 24px",
  },
  "@media (min-width:900px)": {
    padding: "14px 28px",
  },
}));

export const CtaTrustText = styled(Typography)(() => ({
  marginTop: "24px",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#2F2F2F",
  textAlign: "center",
  maxWidth: "720px",
  marginLeft: "auto",
  marginRight: "auto",
}));
