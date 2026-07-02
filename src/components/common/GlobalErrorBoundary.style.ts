import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const ErrorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  textAlign: "center",
  backgroundColor: "#f8fafc",
  padding: theme.spacing(3),
}));

export const ErrorIcon = styled(ErrorOutlineIcon)({
  fontSize: 80,
  color: "var(--color-primary)",
  marginBottom: 16,
});

export const Heading = styled(Typography)({
  fontWeight: 800,
  color: "var(--color-gray-900)",
});

export const MessageText = styled(Typography)({
  marginBottom: 32,
  maxWidth: 500,
  color: "var(--color-gray-500)",
});

export const ButtonWrapper = styled(Box)({
  display: "flex",
  gap: 16,
});

export const ReloadButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  "&:hover": { backgroundColor: "var(--color-primary-dark)" },
  textTransform: "none",
  borderRadius: "30px",
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 8,
  paddingBottom: 8,
});

export const HomeButton = styled(Button)({
  color: "var(--color-primary)",
  borderColor: "var(--color-primary)",
  textTransform: "none",
  borderRadius: "30px",
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 8,
  paddingBottom: 8,
});
