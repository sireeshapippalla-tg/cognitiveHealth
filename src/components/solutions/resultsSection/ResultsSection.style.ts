import { styled } from "@mui/material/styles";
import { Box, Button, DialogActions, DialogTitle, Stack, Typography } from "@mui/material";

export const SectionContainer = styled(Box)({
  background: "#f9fafb",
  padding: "80px 0",
});

export const Wrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
  padding: "0 20px",
});

export const Title = styled(Typography)({
  // fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: '48px',
  color: "#0E0E0E",
  marginBottom: "16px",
});

export const Subtitle = styled(Typography)({
  fontSize: "20px",
  color: "#2F2F2F",
  lineHeight: '150%',
  maxWidth: "740px",
  margin: "0 auto 32px",
});

export const FooterText = styled(Typography)({
   marginTop: "24px",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#2F2F2F",
  textAlign: "center",
  maxWidth: "720px",
  marginLeft: "auto",
  marginRight: "auto",
});

export const CtaActions = styled(Stack)({
  justifyContent: "center",
  marginTop: "32px",
});
export const PrimaryButtonStyles = {
  backgroundColor: "#EB7724",
  padding: "12px 20px",
  borderRadius: "9999px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "#ea580c",
  },
};
export const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: "var(--color-text-blue)",
  color: "#FFFFFF",
  fontWeight: 600,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
  padding: "16px 24px",
}));
export const PrimaryButton = styled(Button)(() => ({
  backgroundColor: "var(--color-text-blue)",
  color: "#fff",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#1E40AF",
  },
}));