import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)({
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "1px solid #e5e7eb",
  transition: "all 0.2s ease",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
});

export const Header = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "12px",
});

export const IconBox = styled(Box)({
  backgroundColor: "#2563eb",
  color: "#ffffff",
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    fontSize: 18,
  },
});

export const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: "15px",
  color: "#111827",
});

export const Description = styled(Typography)({
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#6b7280",
  marginBottom: "12px",
});

export const LearnMoreButton = styled(Button)({
  padding: 0,
  alignSelf: "flex-start",
  color: "#2563eb",
  textTransform: "none",
  fontWeight: 500,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});
