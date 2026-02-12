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

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: "8px",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "18px",
  maxWidth: "700px",
  marginBottom: "16px",
}));

export const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const PrimaryButton = styled(Button)({
  backgroundColor: "#E88D3E", // Orange color
  color: "#fff",
  textTransform: "none",
  borderRadius: "50px",
  padding: "12px 32px",
  fontWeight: 600,
  fontSize: "15px",
  boxShadow: "0px 4px 12px rgba(232, 141, 62, 0.2)",
  "&:hover": {
    backgroundColor: "#d67d2e",
    boxShadow: "0px 6px 16px rgba(232, 141, 62, 0.3)",
  },
});

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
  border: "1px solid #E5E7EB",
  textTransform: "none",
  borderRadius: "50px",
  padding: "12px 32px",
  fontWeight: 600,
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "#f9fafb",
    borderColor: "#D1D5DB",
  },
}));
