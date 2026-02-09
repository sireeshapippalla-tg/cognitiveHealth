import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)({
  backgroundColor: "#fff7ed",
  borderRadius: "16px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ffedd5",
    transform: "translateY(-4px)",
  },
});

export const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const IconBox = styled(Box)({
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled(Typography)({
  fontWeight: 700,
  color: "#1f2937",
});

export const LearnMoreButton = styled(Button)({
  marginTop: "auto",
  padding: 0,
  alignSelf: "flex-start",
  color: "#3b82f6",
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});
