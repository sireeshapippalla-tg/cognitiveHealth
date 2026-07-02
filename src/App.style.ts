import { Box, CircularProgress, styled } from "@mui/material";

export const LoadingWrapper = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(248, 250, 252, 0.6)",
  backdropFilter: "blur(12px)",
  gap: "16px",
});

export const LoadingSpinner = styled(CircularProgress)({
  color: "var(--color-primary)",
});
