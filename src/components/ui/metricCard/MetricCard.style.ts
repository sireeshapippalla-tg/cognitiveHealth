import { Box, Card, Typography } from "@mui/material";
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
  // fontFamily: "Inter",
  fontWeight: 600,
  // marginBottom: "12px",
  lineHeight: 1,
  fontSize: "30px",
  marginTop: "8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));

export const DescriptionText = styled(Typography)({
  color: "#2F2F2F",
  // fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "140%",
  maxWidth: "200px",
  margin: "0 auto",
  marginTop: "8px",
});

export const IconWrapper = styled(Box)(() => ({
  width: 40,
  height: 40,
  margin: "0 auto 12px",
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f0fdf4", // light green bg (can enhance later)
}));

export const TitleText = styled(Typography)(() => ({
  fontWeight: 600,
  marginBottom: 4,
}));
