import { styled } from "@mui/material/styles";
import { Dialog, IconButton, Box, Typography } from "@mui/material";

export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
    outline: "none",
  },
});

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  borderRadius: "32px",
  padding: theme.spacing(4),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  maxHeight: "95vh",
  minHeight: "auto",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "24px",
    padding: theme.spacing(2),
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background:
      "linear-gradient(45deg, var(--color-text-blue), var(--color-green), var(--color-primary), var(--color-text-blue))",
    borderRadius: "34px",
    opacity: 0.4,
    filter: "blur(8px)",
  },
}));

export const CloseButtonWrapper = styled(Box)({
  position: "absolute",
  right: 16,
  zIndex: 10,
});

export const StyledCloseButton = styled(IconButton)({
  width: 40,
  height: 40,
  background: "var(--color-white)",
  color: "#1e293b",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  border: "2px solid var(--color-white)",
  "&:hover": {
    color: "var(--color-primary-dark)",
    background: "var(--color-white)",
  },
});

export const LogoImage = styled("img")({
  height: 40,
  marginBottom: 8,
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
});

export const HeaderBranding = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

export const TitleText = styled(Typography)({
  fontWeight: 900,
  color: "#1e293b",
});

export const SubtitleText = styled(Typography)({
  color: "#64748b",
  maxWidth: 500,
  marginLeft: "auto",
  marginRight: "auto",
});

export const WidgetContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "800px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
  border: "1px solid #e2e8f0",
  [theme.breakpoints.down("sm")]: {
    height: "600px",
  },
}));
