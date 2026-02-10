import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps {
  variant?: "default" | "pink";
}

export const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<CardProps>(({ variant }) => ({
  borderRadius: "16px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  cursor: "pointer",
  transition: "all 0.2s ease",

  backgroundColor: variant === "pink" ? "#fff7f2" : "#ffffff",
  border: "1px solid #e5e7eb",

  "&:hover": {
    backgroundColor: variant === "pink" ? "#ffedd5" : "#f9fafb",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
}));

export const Header = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "12px",
  flexDirection:"column"
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
  fontSize: "16px",
  lineHeight: 1.6,
  color: " #2F2F2F",
  marginBottom: "12px",
});

export const LearnMoreButton = styled(Button)({
  padding: 0,
  alignSelf: "flex-start",
  color: "#2563eb",
  textTransform: "none",
  fontWeight: 500,
});
