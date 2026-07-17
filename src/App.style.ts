import { Box, CircularProgress, styled } from "@mui/material";

export const LoadingWrapper = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f8fafc",
  backdropFilter: "blur(12px)",
  gap: "16px",
});

export const LoadingSpinner = styled(CircularProgress)({
  color: "var(--color-primary)",
});
