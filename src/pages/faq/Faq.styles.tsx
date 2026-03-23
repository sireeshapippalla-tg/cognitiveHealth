import { styled } from "@mui/material/styles";
import { Box, Typography, InputBase } from "@mui/material";
import { motion } from "framer-motion";

/* ================= HERO ================= */

export const HeroSection = motion(styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
  padding: "120px 20px",
  color: "#fff",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
    pointerEvents: "none",
  },

  [theme.breakpoints.down("md")]: {
    padding: "80px 16px",
  },
})));

export const HeroInner = styled(Box)({
  maxWidth: "800px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 800,
  background: "linear-gradient(to right, #fff, #93c5fd)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },
}));

export const HeroSubtitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 400,
  color: "#e0e7ff",
  maxWidth: "600px",
  margin: "0 auto 32px",
  lineHeight: 1.6,
});

export const UpdatedBadge = styled(Box)({
  display: "inline-block",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "6px 16px",
  borderRadius: "30px",
  fontSize: "12px",
  fontWeight: 500,
  color: "#93c5fd",
  marginBottom: "40px",
});

/* ================= SEARCH ================= */

export const SearchContainer = motion(styled(Box)({
  maxWidth: "600px",
  margin: "0 auto",
}));

export const SearchInputWrapper = styled(Box)({
  backgroundColor: "#fff",
  padding: "12px 24px",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
});

export const StyledInput = styled(InputBase)({
  width: "100%",
  fontSize: "16px",
  "& input::placeholder": {
    color: "#9ca3af",
    opacity: 1,
  },
});

/* ================= CONTENT ================= */

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: "80px 20px",
  marginTop: "-60px",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    padding: "60px 16px",
  },
}));

export const ContentInner = styled(Box)({
  maxWidth: "900px",
  margin: "0 auto",
});

export const AccordionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const AccordionItem = motion(styled(Box, {
  shouldForwardProp: (prop) => prop !== "$expanded",
})<{ $expanded?: boolean }>(({ $expanded }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: $expanded 
    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -6px rgba(0, 0, 0, 0.04)"
    : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
  border: "1px solid",
  borderColor: $expanded ? "rgba(59, 130, 246, 0.2)" : "rgba(0, 0, 0, 0.05)",
  "&:hover": {
    transform: $expanded ? "none" : "translateY(-2px)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
})));

export const AccordionHeader = styled(Box)({
  padding: "24px 32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
});

export const AccordionContent = styled(motion.div)({
  overflow: "hidden",
});

export const SectionTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
  color: "#1f2937",
  lineHeight: 1.4,
});

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$expanded",
})<{ $expanded?: boolean }>(({ $expanded }) => ({
  transition: "transform 0.3s ease",
  transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
  color: $expanded ? "var(--color-primary)" : "#9ca3af",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: $expanded ? "rgba(235, 123, 51, 0.1)" : "transparent",
  borderRadius: "50%",
  padding: "4px",
}));

export const SectionBlock = styled(Box)({
  padding: "0 32px 32px",
});

export const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.7,
  color: "#4b5563",
  "& a": {
    color: "var(--color-primary)",
    textDecoration: "none",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const NoResults = styled(motion.div)({
  textAlign: "center",
  padding: "40px",
  color: "#6b7280",
  fontSize: "16px",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
});
