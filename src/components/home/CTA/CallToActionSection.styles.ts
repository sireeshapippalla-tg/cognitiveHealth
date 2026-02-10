import { Box, colors, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",

  marginTop:"40px",
  marginBottom:"40px",
  [theme.breakpoints.down("md")]: {
    padding: "60px 16px",
  },
}));

/* MAIN WRAPPER */
export const CtaWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF7F2",
  borderRadius: "20px",
  padding: "64px 32px",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: "48px 20px",
  },
}));

/* TITLE */
export const CtaTitle = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: '48px',
  color: "#0E0E0E",
  marginBottom: "16px",
});

/* SUBTITLE */
export const CtaSubtitle = styled(Typography)({
  fontFamily: "Inter",
  fontSize: "20px",
  color: "#2F2F2F",
  lineHeight: '150%',
  maxWidth: "640px",
  margin: "0 auto 32px",
});

/* BUTTON GROUP */
export const CtaActions = styled(Stack)({
  justifyContent: "center",
});

/* PRIMARY BUTTON */
export const PrimaryButtonStyles = {
  backgroundColor: "#EB7724",
  padding: "12px 20px",
  borderRadius: "9999px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "#ea580c",
  },
};

/* OUTLINE BUTTON */
export const OutlineButtonStyles = {
  padding: "12px 20px",
  borderRadius: "9999px",
  fontSize: "14px",
  borderColor: "#2F2F2F",
  color: "#2F2F2F",

  "&:hover": {
    backgroundColor: "#f9fafb",
  },
};
