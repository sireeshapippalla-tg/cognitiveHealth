import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* MAIN SECTION */
export const Section = styled(Box)(({ theme }) => ({
  padding: "80px 32px",
  display: "flex",
  justifyContent: "center",
  background: "radial-gradient(circle at center, #ffffff, #f1f5f9)",
  color: "#0f172a",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

/* BACKGROUND GLOW */
export const Glow = styled(Box)(() => ({
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "radial-gradient(circle, #4A90E2 10%, transparent 70%)",
  filter: "blur(120px)",
  top: "-100px",
  left: "50%",
  transform: "translateX(-50%)",
  opacity: 0.1,
  pointerEvents: "none",
}));

/* CONTAINER */
export const StyledContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
}));

/* MOTION WRAPPERS */
export const MotionWrapper = styled(motion.div)(() => ({}));

/* BADGE */
export const Badge = styled(Box)(({ theme }) => ({
  display: "inline-block",
  borderRadius: "50px",
  background: "linear-gradient(90deg,#F47A20,#6BBF59,#4A90E2)",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  marginBottom: "32px",
  padding: "10px 16px",

  [theme.breakpoints.up("sm")]: {
    padding: "12px 24px",
  },
}));

export const BadgeText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#fff",

  [theme.breakpoints.down("md")]: {
    letterSpacing: "1px",
    fontSize: "12px",
  },
}));

/* TITLE */
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.5rem",
  lineHeight: 1.3,
  marginBottom: "32px",
  maxWidth: "1000px",
  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}));

export const Highlight = styled("span")(() => ({
  fontStyle: "italic",
  fontFamily: "'Playfair Display', serif",
  background: "linear-gradient(90deg, #E06912, #D4AF37)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Break = styled("br")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const NormalText = styled("span")(() => ({
  color: "#0f172a",
}));

/* SUBTITLE */
export const Subtitle = styled(Typography)(({ theme }) => ({
  color: "#475569",
  fontSize: "1.125rem",
  lineHeight: 1.7,
  maxWidth: "860px",
  margin: "0 auto",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));
