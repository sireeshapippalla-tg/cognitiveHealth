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
  color: "#EB7724",
  fontFamily: "Inter",
  fontWeight: 600,
  marginBottom: "12px",
  lineHeight:'150%',
  fontSize: "32px",

  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

export const DescriptionText = styled(Typography)({
  color: "#2F2F2F",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "140%",
  maxWidth: "200px",
  margin: "0 auto",
});
