import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  padding: "32px 24px",
  textAlign: "center",
  borderRadius: "16px",
  border: "1px solid #f3f4f6",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

export const ValueText = styled(Typography)(({ theme }) => ({
  color: "#ea580c",
  fontWeight: 800,
  marginBottom: "12px",
  fontSize: "44px",

  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

export const DescriptionText = styled(Typography)({
  color: "#4b5563",
  fontSize: "15px",
  fontWeight: 500,
  maxWidth: "200px",
  margin: "0 auto",
});
