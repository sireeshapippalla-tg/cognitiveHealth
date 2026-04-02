import { Box, Typography, styled } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(9),
  background: "var(--color-white)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const BackgroundAbstract = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "120%",
  height: "100%",
  background: "radial-gradient(circle at center, #F9FAFB 0%, transparent 70%)",
  zIndex: 0,
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: "28px",
  fontWeight: 900,
  color: "var(--color-gray-900)",
  lineHeight: 1.1,
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const SectionDescription = styled(Typography)({
  color: "var(--color-gray-600)",
  fontSize: "1.2rem",
  lineHeight: 1.7,
  marginBottom: "32px",
});

export const DecoratorLine = styled(Box)({
  width: "60px",
  height: "6px",
  background: "#6BBF59",
  borderRadius: "3px",
});

export const FeatureCard = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "flex-start",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateX(15px)",
  },
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: 70,
  height: 70,
  borderRadius: "24px",
  background: "rgba(244, 122, 32, 0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-primary)",
  boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
  [theme.breakpoints.down("md")]: {
    width: 50,
    height: 50,
  },
}));

export const FeatureTitle = styled(Typography)({
  marginBottom: "12px",
  color: "var(--color-dark-gray)",
  fontWeight: 800,
  fontSize: "20px",
});

export const FeatureDescription = styled(Typography)({
  color: "var(--color-gray-500)",
  fontSize: "1.1rem",
  lineHeight: 1.6,
  maxWidth: "500px",
});
