import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: "#f8fafc",
  position: "relative",
  overflow: "hidden",
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 800,
  color: "#0f172a",
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: 1.3,
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.3,
  },
}));

export const HeaderSubtitle = styled(Typography)({
  fontSize: "1.1rem",
  color: "#475569",
  maxWidth: "800px",
  marginInline: "auto",
});

export const NavigationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

interface NavItemProps {
  isActive: boolean;
}

export const NavItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<NavItemProps>(({ isActive }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  padding: "16px",
  paddingRight: "32px",
  borderRadius: "20px",
  background: isActive ? "var(--color-white)" : "transparent",
  boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.06)" : "none",
  border: "1px solid",
  borderColor: isActive ? "rgba(74, 144, 226, 0.2)" : "transparent",
  transition: "all 0.3s ease",
  transform: isActive ? "scale(1.02)" : "scale(1)",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    background: isActive ? "var(--color-white)" : "rgba(255,255,255,0.4)",
  },
}));

export const NavIconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<NavItemProps>(({ isActive }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  background: isActive
    ? "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)"
    : "#e2e8f0",
  boxShadow: isActive ? "0 10px 20px rgba(74, 144, 226, 0.3)" : "none",
  "& img": {
    width: "20px",
    height: "20px",
    objectFit: "contain",
    filter: isActive ? "brightness(0) invert(1)" : "brightness(0) opacity(0.5)",
    transition: "all 0.3s ease",
  },
}));

export const NavItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<NavItemProps>(({ isActive }) => ({
  fontWeight: isActive ? 800 : 600,
  fontSize: "1.15rem",
  color: isActive ? "#0f172a" : "#64748b",
  transition: "all 0.3s ease",
}));

export const ActiveIndicator = styled(motion.div)({
  position: "absolute",
  left: 0,
  top: "20%",
  bottom: "20%",
  width: "4px",
  background: "#4A90E2",
  borderRadius: "0 4px 4px 0",
});

export const DisplayStageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "32px",
  background: "linear-gradient(135deg, var(--color-white) 0%, #f1f5f9 100%)",
  border: "1px solid rgba(255,255,255,0.8)",
  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(4),
  minHeight: "300px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    minHeight: "auto",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
    filter: "blur(60px)",
    zIndex: 0,
  },
}));

export const FaintIconBox = styled(Box)({
  position: "absolute",
  top: "-20px",
  right: "-20px",
  width: "200px",
  height: "200px",
  opacity: 0.05,
  pointerEvents: "none",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter: "grayscale(100%)",
  },
});

export const StageIconBox = styled(Box)({
  width: "60px",
  height: "60px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 15px 30px rgba(74, 144, 226, 0.3)",
  marginBottom: "40px",
  "& img": {
    width: "45px",
    height: "45px",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },
});

export const StageTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.5rem",
  color: "#0f172a",
  marginBottom: "24px",
  lineHeight: 1.2,
  letterSpacing: "-0.5px",
});

export const StageDescription = styled(Typography)({
  fontSize: "1.15rem",
  lineHeight: 1.8,
  color: "#475569",
});

export const HighlightText = styled("span")({
  color: "inherit",
});

export const StageInnerBox = styled(Box)({
  position: "relative",
  zIndex: 1,
});
