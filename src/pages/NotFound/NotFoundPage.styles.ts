import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  backgroundColor: "#f9fafb",
}));

export const Card = styled(Box)(({ theme }) => ({
  textAlign: "center",
  maxWidth: "520px",
  width: "100%",
  backgroundColor: "#ffffff",
  padding: "48px 32px",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",

  [theme.breakpoints.down("sm")]: {
    padding: "36px 20px",
  },
}));

export const ErrorCode = styled(Typography)({
  fontSize: "96px",
  fontWeight: 800,
  color: "#2563eb",
  lineHeight: 1,
  marginBottom: "16px",
});

export const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "12px",
});

export const Description = styled(Typography)({
  fontSize: "16px",
  color: "#6b7280",
  lineHeight: 1.6,
  marginBottom: "32px",
});

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "16px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const PrimaryButton = styled(Button)({
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 600,

  "&:hover": {
    backgroundColor: "#1d4ed8",
  },
});

export const SecondaryButton = styled(Button)({
  borderColor: "#d1d5db",
  color: "#111827",
  padding: "10px 20px",
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 600,
});
