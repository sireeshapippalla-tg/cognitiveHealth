import { Box, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

/* ===== HERO SECTION ===== */

export const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  padding: "120px 80px 160px",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 140px",
  },
}));

export const HeroContent = styled(Box)({
  maxWidth: 600,
});

export const HeroTitle = styled(Typography)({
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 20,
  lineHeight: 1.2,

  "@media (max-width: 600px)": {
    fontSize: 32,
    lineHeight: 1.2,
  },
});

export const HeroSubtitle = styled(Typography)({
  fontSize: 16,
  // opacity: 0.8,
  lineHeight: 1.7,
});

/* ===== FLOATING FORM CARD ===== */

export const FormCard = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "80px",
  top: "80px",
  width: "420px",
  backgroundColor: "var(--color-white)",
  borderRadius: 16,
  boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
  padding: "40px",
  borderTop: "4px solid var(--color-text-blue)",

  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: "auto",
    top: "auto",
    width: "100%",
    marginTop: 40,
  },
}));

export const FormTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 20,
  color: "var(--color-dark-gray)",
});

export const StyledInput = styled(TextField)({
  marginBottom: 20,
});

export const SubmitButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  color: "var(--color-white)",
  textTransform: "none",
  fontWeight: 600,
  padding: "12px",
  borderRadius: 6,

  "&:hover": {
    backgroundColor: "var(--color-primary-dark)",
  },
});

/* ===== LOWER INFO SECTION ===== */

export const InfoSection = styled(Box)(({ theme }) => ({
  // backgroundColor: "#F4F5F7",
  padding: "120px 80px 100px",
  marginTop: "-60px",
  maxWidth: 800,
  // marginLeft: "auto",
  // marginRight: "auto",
  borderRadius: 16,

  [theme.breakpoints.down("md")]: {
    padding: "80px 24px",
    marginTop: 0,
  },
}));

export const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 14,
  marginBottom: 14,
});

export const InfoIconWrapper = styled(Box)({
  width: 22,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--color-primary)",
});

export const InfoTextItem = styled(Typography)({
  fontSize: 14,
  color: "var(--color-dark-gray)",
  userSelect: "none",         
  WebkitUserSelect: "none",
  MozUserSelect: "none",

  cursor: "default",
});

export const InfoWrapper = styled(Box)({
  maxWidth: 800,
});

export const InfoText = styled(Typography)({
  fontSize: 16,
  marginBottom: 30,
  color: "var(--color-dark-gray)",
  fontWeight: 500,
});

export const InfoItem = styled(Typography)({
  fontSize: 14,
  marginBottom: 10,
});
