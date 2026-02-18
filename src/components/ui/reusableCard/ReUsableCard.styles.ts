import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/* CARD */
export const CardRoot = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "24px",
  border: "1px solid #e5e7eb",
  maxWidth: "420px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

/* ICON CONTAINER */
export const IconWrapper = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: "8px",
  backgroundColor: "#e0e7ff", // soft blue
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",

  "& svg": {
    fontSize: 20,
    color: "var(--color-text-blue)",
  },
});

/* TITLE */
export const CardTitle = styled(Typography)({
  fontSize: "16px",
  fontWeight: 600,
  color: "#111827",
  marginBottom: "8px",
});

/* DESCRIPTION */
export const CardDescription = styled(Typography)({
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#6b7280",
});
