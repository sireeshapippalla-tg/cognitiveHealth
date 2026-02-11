import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Card = styled(Box)({
  backgroundColor: "#FFF7F2",
  borderRadius: "20px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  minHeight: "152px",
  border: "1px solid #ECECEC",
  cursor: "pointer",
  transition: "all 0.25s ease",

  "&:hover": {
    transform: "translateY(-4px)",
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
  backgroundColor: "#3A63D2",
  color: "#ffffff",
  width: "56px",
  height: "56px",
  borderRadius: "8px",
  padding: "16px",
  gap: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    fontSize: 18,
  },
});

export const Title = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "20px",
  color: "#0E151B",
});

export const Description = styled(Typography)({
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#6b7280",
  marginBottom: "12px",
});

export const LearnMoreButton = styled(Button)({
  fontFamily: "Inter",
  fontSize: "14px",
  lineHeight: "140%",
  padding: 0,
  alignSelf: "flex-start",
  color: "#3A63D2",
  textTransform: "none",
  fontWeight: 500,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});
