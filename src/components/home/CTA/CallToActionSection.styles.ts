import { Box, Stack, Typography } from "@mui/material";
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
  backgroundColor: "#fff7ed",
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
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: 1.25,
  color: "#111827",
  marginBottom: "16px",
});

/* SUBTITLE */
export const CtaSubtitle = styled(Typography)({
  fontSize: "16px",
  color: "#6b7280",
  maxWidth: "640px",
  margin: "0 auto 32px",
});

/* BUTTON GROUP */
export const CtaActions = styled(Stack)({
  justifyContent: "center",
});

/* PRIMARY BUTTON */
export const PrimaryButtonStyles = {
  backgroundColor: "#f97316",
  padding: "12px 20px",
  borderRadius: "999px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "#ea580c",
  },
};

/* OUTLINE BUTTON */
export const OutlineButtonStyles = {
  padding: "12px 20px",
  borderRadius: "999px",
  fontSize: "14px",
  borderColor: "#d1d5db",
  color: "#111827",

  "&:hover": {
    backgroundColor: "#f9fafb",
  },
};
