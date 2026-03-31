import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* SECTION */
export const Section = styled(Box)(({ theme }) => ({
  padding: "48px 16px",
  background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
  color: "#0f172a",

  [theme.breakpoints.up("md")]: {
    padding: "64px 40px",
  },
}));

/* HEADER */
export const Header = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "48px",
}));

export const Pill = styled(Typography)(() => ({
  display: "inline-block",
  padding: "6px 20px",
  borderRadius: "20px",
  background: "linear-gradient(90deg,#F47A20,#6BBF59,#4A90E2)",
  color: "#fff",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "16px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  lineHeight: 1.2,
  fontSize: "1.5rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
}));

/* GRID */
export const GridWrapper = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "32px",
}));

/* CARD */
export const MotionCard = styled(motion.div)(() => ({
  position: "relative",
  borderRadius: "20px",
  padding: "30px",
  background: "rgba(255,255,255,1)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(0,0,0,0.05)",
  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
  cursor: "pointer",
  overflow: "hidden",
}));

/* GLOW */
export const Glow = styled(Box)<{ color: string }>(({ color }) => ({
  position: "absolute",
  inset: 0,
  background: `radial-gradient(circle at top, ${color}11, transparent)`,
  opacity: 0,
  transition: "0.4s",

  [`${MotionCard}:hover &`]: {
    opacity: 1,
  },
}));

/* RING WRAPPER */
export const RingWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
  position: "relative",
}));

/* CENTER NUMBER */
export const CenterText = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "26px",
  fontWeight: "bold",
  color: "#F47A20",
  pointerEvents: "none",
}));

/* TEXT */
export const CardTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  textAlign: "center",
  color: "#0f172a",
}));

export const CardDesc = styled(Typography)(() => ({
  textAlign: "center",
  marginTop: "8px",
  color: "#475569",
}));
