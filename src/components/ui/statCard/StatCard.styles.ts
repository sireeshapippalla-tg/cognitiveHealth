import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const MotionWrapper = styled(motion.div)(() => ({
  width: "100%",
}));

export const Card = styled(Box)(() => ({
  padding: "32px",
  borderRadius: "20px",
  background: "linear-gradient(180deg, #fff, #f9fafb)",
  border: "1px solid #E5E7EB",

  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "12px",

  transition: "0.3s",

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
  },
}));

export const ValueWrapper = styled(Box)(() => ({
  minHeight: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const GradientValue = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.1,
  background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  fontSize: "2.8rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
    
  },
}));

export const PureTextValue = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.2,
  textAlign: "center",
  background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  fontSize: "1.4rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
}));

export const MixedWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
}));

export const MixedText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#6BBF59",
  fontSize: "1rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
}));

export const TitleText = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: 700,
  color: "#F47A20",
}));

export const DescriptionText = styled(Typography)(() => ({
  color: "#6B7280",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  maxWidth: "220px",
}));