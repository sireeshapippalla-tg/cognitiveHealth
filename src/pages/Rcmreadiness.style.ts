import { styled } from "@mui/material/styles";
import { Box, Typography, Paper, Checkbox } from "@mui/material";

/* CONTAINER */
export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "#ffffff",
  padding: "32px 16px",

  [theme.breakpoints.up("md")]: {
    padding: "64px 32px",
  },
}));

/* HEADER */
/* HEADER WRAPPER */
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1000,
  margin: "0 auto",
  textAlign: "center",
  padding: "40px 16px",

  [theme.breakpoints.up("md")]: {
    padding: "64px 16px",
  },
}));

/* TITLE */
export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#1e3a8a",
  lineHeight: 1.2,
  fontSize: "28px",

  [theme.breakpoints.up("sm")]: {
    fontSize: "36px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "44px",
  },
}));

/* SUBTITLE */
export const HeaderSubText = styled(Typography)(({ theme }) => ({
  marginTop: 12,
  color: "#6b7280",
  fontSize: "14px",
  maxWidth: 700,
  marginInline: "auto",
  lineHeight: 1.6,

  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));


/* SECTION CARD */
export const SectionPaper = styled(Paper)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 16,
  height: "100%",

  [theme.breakpoints.up("md")]: {
    padding: 24,
  },
}));

export const SectionTitle = styled(Typography)({
  fontWeight: 600,
  color: "#2563eb",
});

export const StyledCheckbox = styled(Checkbox)({
  color: "#f97316",
  padding: 4,
  marginTop: 2,

  "&.Mui-checked": {
    color: "#f97316",
  },
});

/* RESULT CARD */
export const ResultPaper = styled(Paper)(({ theme }) => ({
  marginTop: 48,
  padding: 24,
  borderRadius: 12,
  textAlign: "center",
  background: "#eff6ff",
  border: "1px solid #bfdbfe",

  [theme.breakpoints.up("md")]: {
    padding: 40,
  },
}));

/* FOOTER */
export const FooterWrapper = styled(Box)({
  marginTop: 64,
  textAlign: "center",
});

export const FooterEmail = styled(Typography)({
  color: "#f97316",
  fontWeight: 700,
});

export const FooterCaption = styled(Typography)({
  opacity: 0.6,
  color: "#6b7280",
});
