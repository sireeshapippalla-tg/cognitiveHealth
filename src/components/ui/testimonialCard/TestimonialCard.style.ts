import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardWrapper = styled(Box)({
  backgroundColor: "#FFF7F2",
  borderRadius: "20px",
  border: "1px solid #ECECEC",
  justifyContent: "space-between",
  padding: "24px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "transparent",
    "& .read-more-link": {
      color: "var(--color-primary)", 
    },
  },
});

export const QuoteText = styled(Typography)({
  // fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "17px",
  color: "#0E151B",
  lineHeight: "1.5",
  marginBottom: "32px",
  textAlign: "left",
});

export const Footer = styled(Box)({
  marginTop: "auto",
});

export const Divider = styled(Box)({
  //   width: "32px",
  height: "1px",
  backgroundColor: "#ECECEC",
  marginBottom: "12px",
  border: "1px solid #ECECEC",
});

export const AuthorName = styled(Typography)({
  // fontFamily: "Inter",
  color: "var(--color-primary)",
  fontWeight: 500,
  fontSize: "18px",
  marginBottom: "4px",
  lineHeight: "130%",
  textAlign: "left",
});

export const RoleText = styled(Typography)({
  color: "var(--color-text-gray)",
  fontSize: "13px",
  marginBottom: "2px",
});

export const CompanyText = styled(Typography)({
  // fontFamily: "Inter",
  fontWeight: 400,
  color: "var(--color-text-dark)",
  fontSize: "16px",
  textAlign: "left",
});
