import { styled } from "@mui/material/styles";
import { Dialog, IconButton, Typography, Box, Avatar } from "@mui/material";

export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
    outline: "none",
    marginLeft: 16,
    marginRight: 16,
    "@media (max-width:600px)": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
});

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  borderRadius: "40px",
  padding: theme.spacing(8),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  maxHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background: "linear-gradient(45deg, #3b82f6, #10b981, #f47a20, #3b82f6)",
    borderRadius: "42px",
    opacity: 0.4,
    filter: "blur(8px)",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: "60px 24px 32px",
    border: "none",
    boxShadow: "none",
    maxHeight: "100vh",
    "&::before": {
      content: "none",
    },
  },
}));

export const CloseButtonWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: -18,
  right: -18,
  zIndex: 100,
  [theme.breakpoints.down("sm")]: {
    top: 12,
    right: 12,
  },
}));

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  width: 44,
  height: 44,
  background: "var(--color-white)",
  color: "#1e293b",
  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  border: "2px solid var(--color-white)",
  "&:hover": {
    background: "var(--color-white)",
    color: "var(--color-primary-hover)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 36,
    height: 36,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(6),
  overflowY: "auto",
  paddingRight: theme.spacing(1),
  /* Custom Scrollbar */
  "&::-webkit-scrollbar": { width: "6px" },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0,0,0,0.05)",
    borderRadius: "10px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
    paddingRight: 0,
  },
}));

export const AvatarContainer = styled(Box)(({ theme }) => ({
  width: 240,
  height: 240,
  borderRadius: "32px",
  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
  padding: "2px",
  flexShrink: 0,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: 180,
    height: 180,
  },
}));

export const StyledAvatar = styled(Avatar)({
  width: "100%",
  height: "100%",
  borderRadius: "30px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
});

export const InfoContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const NameText = styled(Typography)(({ theme }) => ({
  color: "#1f2937",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  fontSize: "2.2rem",
  fontWeight: 900,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  color: "var(--color-text-blue)",
  fontWeight: 800,
  fontSize: "0.95rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.45,
  color: "#4b5563",
  fontSize: "1.05rem",
  fontWeight: 500,
  whiteSpace: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1.5),
  },
}));
