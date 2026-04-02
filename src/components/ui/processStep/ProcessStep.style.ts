import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StepWrapper = styled(Box)({
  flex: 1,
  textAlign: "center",
  maxWidth: "260px",
});

export const IconBox = styled(Box)({
  width: "40px",
  height: "40px",
  backgroundColor: "var(--color-text-blue)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-white)",
  margin: "0 auto 14px",
});

export const StepTitle = styled(Typography)({
  fontSize: "16px",
  fontWeight: 700,
  color: "var(--color-gray-900)",
  marginBottom: "6px",
});

export const StepDescription = styled(Typography)({
  fontSize: "14px",
  color: "#6b7280",
});
