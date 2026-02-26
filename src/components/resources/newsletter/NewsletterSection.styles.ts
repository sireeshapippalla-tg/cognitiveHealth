import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const NewsletterWrapper = styled(Box)({
  backgroundColor: "#FFF7F2", // Light orange background
  borderRadius: "24px",
  padding: "64px 24px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  margin: "64px 0",
});

export const Title = styled(Typography)(() => ({
  // fontFamily: "Inter",
  fontWeight: 600,
  lineHeight: "48px",
  color: "var(--color-text-dark)",
  marginBottom: "8px",
}));

export const Subtitle = styled(Typography)(() => ({
  // fontFamily: "Inter",
  color: "var(--color-text-light)",
  fontSize: "20px",
  maxWidth: "700px",
  lineHeight: "150%",
  marginBottom: "16px",
}));

export const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const PrimaryButton = styled(Button)({
  // fontFamily: "Inter",
  backgroundColor: "#EB7724", // Orange color
  color: "#fff",
  textTransform: "none",
  borderRadius: "50px",
  padding: "12px 32px",
  fontWeight: 600,
  lineHeight: "140%",
  fontSize: "14px",
  boxShadow: "0px 4px 12px rgba(232, 141, 62, 0.2)",
  "&:hover": {
    backgroundColor: "#d67d2e",
    boxShadow: "0px 6px 16px rgba(232, 141, 62, 0.3)",
  },
});

export const SecondaryButton = styled(Button)(({ theme }) => ({
  // fontFamily: "Inter",
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
  border: "1px solid #2F2F2F",
  textTransform: "none",
  borderRadius: "50px",
  padding: "12px 32px",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "140%",
  "&:hover": {
    backgroundColor: "#f9fafb",
    borderColor: "#D1D5DB",
  },
}));
