import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px 80px",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

export const Inner = styled(Box)({
  // maxWidth: "1200px",
  margin: "0 auto",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  color: "var(--color-text-dark)",
  marginBottom: "8px",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)({
  fontSize: "15px",
  color: "var(--color-text-light)",
  marginBottom: "48px",
});

/* STAT CARD */
export const StatCard = styled(Box)({
  backgroundColor: "#FFF7F2",
  borderRadius: "16px",
  border: "1px solid #ECECEC",
  padding: "28px",
  textAlign: "center",
  height: "100%",
});

export const StatValue = styled(Typography)({
  // fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: 600,
  color: "var(--color-primary)",
  marginBottom: "6px",
});

export const StatTitle = styled(Typography)({
  // fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--color-text-dark)",
  marginBottom: "4px",
});

export const StatDescription = styled(Typography)({
  // fontFamily: "Inter",
  fontSize: "14px",
  color: "var(--color-text-light)",
});