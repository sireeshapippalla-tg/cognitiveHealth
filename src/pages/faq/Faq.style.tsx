import { styled } from "@mui/material/styles";
import { Box, Typography, InputBase } from "@mui/material";
import { motion } from "framer-motion";

/* ================= HERO ================= */

export const HeroSection = motion.create(
  styled(Box)(({ theme }) => ({
    background: "var(--color-text-blue)",
    padding: "100px 20px",
    color: "var(--color-white)",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    // Organic brand color elements
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-10%",
      left: "10%",
      width: "40%",
      height: "100%",
      background:
        "radial-gradient(circle at center, rgba(235, 123, 51, 0.08) 0%, transparent 70%)", // Orange
      filter: "blur(60px)",
      zIndex: 0,
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10%",
      right: "10%",
      width: "40%",
      height: "100%",
      background:
        "radial-gradient(circle at center, rgba(121, 187, 67, 0.08) 0%, transparent 70%)", // Green
      filter: "blur(60px)",
      zIndex: 0,
      pointerEvents: "none",
    },
    [theme.breakpoints.down("md")]: {
      padding: "120px 16px 80px",
    },
  }))
);

export const HeroInner = styled(Box)({
  maxWidth: "900px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  fontWeight: 400,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  color: "var(--color-white)",
  marginBottom: "24px",
  "& span": {
    fontWeight: 700,
    color: "var(--color-white)", // changed to white for contrast against blue
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

export const HeroSubtitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.9)",
  maxWidth: "640px",
  margin: "0 auto 48px",
  lineHeight: 1.6,
});

export const UpdatedBadge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "8px 20px",
  borderRadius: "100px",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.5px",
  color: "var(--color-white)",
  marginBottom: "40px",
});

/* ================= SEARCH ================= */

export const SearchContainer = motion.create(
  styled(Box)({
    maxWidth: "640px",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  })
);

export const SearchInputWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  border: "none", // Remove border since background is already blue
  padding: "16px 32px",
  borderRadius: "100px",
  display: "flex",
  alignItems: "center",
  transition: "all 0.3s ease",
  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
  "&:focus-within": {
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const StyledInput = styled(InputBase)({
  width: "100%",
  fontSize: "17px",
  color: "var(--color-text-dark)",
  "& input::placeholder": {
    color: "var(--color-text-muted)",
    opacity: 1,
    fontWeight: 400,
  },
});

/* ================= CONTENT ================= */

export const PageBackground = styled(Box)({
  backgroundColor: "var(--color-white)",
  position: "relative",
  // Add another brand color orb in content center
  "&::before": {
    content: '""',
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    height: "600px",
    background:
      "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.04) 0%, transparent 60%)", // Blue
    pointerEvents: "none",
  },
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: "60px 20px 120px",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    padding: "40px 16px 80px",
  },
}));

export const ContentInner = styled(Box)({
  maxWidth: "1000px",
  margin: "0 auto",
});

/* ================= TABS ================= */

export const TabContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  marginBottom: "60px",
  padding: "6px",
  background: "var(--color-bg-lite)",
  border: "1px solid var(--color-border-light)",
  borderRadius: "100px",
  width: "fit-content",
  margin: "0 auto 60px",

  maxWidth: "100%",
  overflowX: "auto",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
    padding: "6px 8px",
  },
}));

export const TabButton = styled("button")<{ $active?: boolean }>(
  ({ $active, theme }) => ({
    padding: "12px 32px",
    fontSize: "15px",
    fontWeight: 600,
    color: $active ? "var(--color-white)" : "var(--color-text-muted)",
    background: $active ? "var(--color-primary)" : "transparent",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: $active ? "0 8px 20px -5px rgba(235, 123, 51, 0.4)" : "none",
    "&:hover": {
      color: $active ? "var(--color-white)" : "var(--color-text-dark)",
      background: $active ? "var(--color-primary)" : "rgba(0,0,0,0.02)",
    },

    whiteSpace: "nowrap",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    outline: "none",
    WebkitTapHighlightColor: "transparent",

    [theme.breakpoints.down("md")]: {
      padding: "10px 16px",
      fontSize: "13px",
    },
  })
);

/* ================= CTA ================= */

export const CtaSection = styled(Box)({
  textAlign: "center",
  marginTop: "100px",
  padding: "80px 40px",
  background: "var(--color-bg-lite)",
  border: "1px solid var(--color-border-light)",
  borderRadius: "32px",
  position: "relative",
  overflow: "hidden",
  // Organic brand bubbles loosely connecting
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-30%",
    left: "-10%",
    width: "50%",
    height: "150%",
    background:
      "radial-gradient(circle at center, rgba(121, 187, 67, 0.08) 0%, transparent 60%)", // Green
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%",
    right: "-10%",
    width: "50%",
    height: "150%",
    background:
      "radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 60%)", // Blue
    pointerEvents: "none",
  },
});

export const CtaTitle = styled(Typography)({
  fontSize: "36px",
  fontWeight: 600,
  color: "var(--color-text-dark)",
  marginBottom: "16px",
  position: "relative",
  zIndex: 1,
});

export const CtaText = styled(Typography)({
  fontSize: "18px",
  color: "var(--color-text-muted)",
  marginBottom: "40px",
  margin: "0 auto 40px",
  lineHeight: 1.6,
  position: "relative",
  zIndex: 1,
});

export const CtaButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 48px",
  fontSize: "16px",
  fontWeight: 600,
  color: "var(--color-white)",
  background: "var(--color-primary)",
  border: "none",
  borderRadius: "100px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  zIndex: 1,
  boxShadow: "0 10px 25px -5px rgba(235, 123, 51, 0.3)",
  "&:hover": {
    background: "var(--color-primary-hover)",
    transform: "translateY(-2px)",
    boxShadow: "0 15px 30px -5px rgba(235, 123, 51, 0.4)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "12px",
  },
}));

export const FaqWrapper = styled(Box)({
  minHeight: "100vh",
});
