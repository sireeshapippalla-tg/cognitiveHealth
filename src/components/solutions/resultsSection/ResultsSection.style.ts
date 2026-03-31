import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

export const SectionContainer = styled(Box)({
  background: "#f9fafb",
  padding: "80px 0",
});

export const Section = styled(Box)(() => ({
  paddingBottom: "30px",
  background: "#fff",
  position: "relative",
  overflow: "hidden",
}));

export const Glow = styled(motion.div)(() => ({
  position: "absolute",
  top: "-10%",
  left: "0%",
  width: "500px",
  height: "500px",
  background:
    "radial-gradient(circle, rgba(244, 122, 32, 0.05) 0%, transparent 70%)",
  zIndex: 0,
  filter: "blur(80px)",
}));

export const StyledContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
}));
export const Header = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "80px",
}));

export const Wrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
  padding: "0 20px",
});



export const Title = styled(Typography)(() => ({
  fontSize: "32px",
  color: "#111827",
  lineHeight: 1.1,
  fontWeight: 600,
  marginBottom: "16px",
}));

export const Subtitle = styled(Typography)(() => ({
  color: "#4B5563",
  maxWidth: "650px",
  margin: "0 auto",
  fontSize: "1.2rem",
  lineHeight: 1.6,
  fontWeight: 500,
}));

export const StatCard = styled(Box)(() => ({
  padding: "32px",
  borderRadius: "20px",
  textAlign: "center",
  background: "linear-gradient(180deg, #ffffff, #f9fafb)",
  border: "1px solid #E5E7EB",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
  },

  width: "100%",
  height: "100%",

  alignItems: "center",

  gap: "12px",
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 900,
  marginBottom: "8px",
  padding: "10px",
  background: "#F47A20",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

export const StatDivider = styled(Box)(() => ({
  width: "95px",
  height: "4px",
  margin: "0 auto 10px",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
}));

export const StatLabel = styled(Typography)(() => ({
  color: "#4B5563",
  fontSize: "0.95rem",
  fontWeight: 600,
  lineHeight: 1.5,
  maxWidth: "220px",
  margin: "0 auto",
}));

export const CTAWrapper = styled(Box)(() => ({
  textAlign: "center",
  marginTop: "80px",
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  marginBottom: "48px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));


export const FooterText = styled(Typography)(() => ({
  color: "#6B7280",
  fontSize: "16px",
}));

export const CtaActions = styled(Stack)({
  justifyContent: "center",
  marginTop: "32px",
});
export const PrimaryButtonStyles = {
  backgroundColor: "#EB7724",
  padding: "12px 20px",
  borderRadius: "9999px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "#ea580c",
  },
};
export const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: "var(--color-text-blue)",
  color: "#FFFFFF",
  fontWeight: 600,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  padding: "16px 24px",
}));

export const PrimaryButton = styled(Button)(() => ({
  padding: "12px 24px",
  borderRadius: "50px",
  fontWeight: 900,
  background: "#F47A20",
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "0 15px 30px rgba(244,122,32,0.3)",
  color: "#fff",
  "&:hover": {
    background: "#e65a00",
  },
}));

export const OutlineButton = styled(Button)(() => ({
  padding: "12px 24px",
  borderRadius: "50px",
  fontWeight: 900,
  borderColor: "rgba(0,0,0,0.1)",
  color: "#111827",
  fontSize: "1rem",
  textTransform: "none",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",

  "&:hover": {
    borderColor: "#F47A20",
    color: "#F47A20",
    background: "rgba(244, 122, 32, 0.05)",
  },
}));
