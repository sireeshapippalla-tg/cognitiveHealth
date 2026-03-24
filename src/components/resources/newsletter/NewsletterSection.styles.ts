import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export const NewsletterWrapper = motion(styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  borderRadius: "32px",
  padding: "80px 48px",
  textAlign: "center",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
  marginTop: "100px",
  marginBottom: "100px",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle at top right, rgba(235, 123, 51, 0.15) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  [theme.breakpoints.down("md")]: {
    padding: "60px 24px",
    borderRadius: "24px",
  },
})));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  fontWeight: 800,
  marginBottom: "24px",
  lineHeight: 1.2,
  maxWidth: "800px",
  margin: "0 auto 24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

export const Subtitle = styled(Typography)({
  fontSize: "18px",
  color: "#94a3b8",
  maxWidth: "600px",
  margin: "0 auto 48px",
  lineHeight: 1.6,
});

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const PrimaryButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  color: "#ffffff",
  padding: "14px 36px",
  borderRadius: "100px",
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "0 10px 15px -3px rgba(235, 123, 51, 0.3)",
  "&:hover": {
    backgroundColor: "var(--color-primary-hover)",
    transform: "translateY(-2px)",
    boxShadow: "0 20px 25px -5px rgba(235, 123, 51, 0.4)",
  },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const SecondaryButton = styled(Button)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
  padding: "14px 36px",
  borderRadius: "100px",
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "none",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
});
