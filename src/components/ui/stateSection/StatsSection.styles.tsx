import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "64px 24px",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

export const Inner = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "8px",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)({
  fontSize: "15px",
  color: "#6b7280",
  marginBottom: "48px",
});

/* STAT CARD */
export const StatCard = styled(Box)({
  backgroundColor: "#fff7ed",
  borderRadius: "16px",
  padding: "28px",
  textAlign: "center",
  height: "100%",
});

export const StatValue = styled(Typography)({
  fontSize: "22px",
  fontWeight: 700,
  color: "#f97316",
  marginBottom: "6px",
});

export const StatTitle = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  color: "#111827",
  marginBottom: "4px",
});

export const StatDescription = styled(Typography)({
  fontSize: "12px",
  color: "#6b7280",
});