import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  Typography,
  Dialog,
  IconButton,
  TextField,
  DialogContent,
} from "@mui/material";


export const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: "var(--color-text-blue)",
  color: "var(--color-white)",
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
  padding: "12px 24px",
  borderRadius: "50px",
  fontWeight: 900,
  background: "var(--color-primary)",
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "0 15px 30px rgba(244,122,32,0.3)",
  color: "var(--color-white)",
  "& svg": {
    fontSize: "14px",
  },
  "&:hover": {
    background: "var(--color-primary-dark)",
    color: "var(--color-text-dark)",
  },
}));

export const OutlineButton = styled(Button)(() => ({
  padding: "12px 24px",
  borderRadius: "50px",
  fontWeight: 900,
  borderColor: "rgba(0,0,0,0.1)",
  color: "var(--color-gray-900)",
  fontSize: "1rem",
  textTransform: "none",
  background: "var(--color-white)",
  border: "1px solid rgba(0,0,0,0.1)",
  "& svg": {
    fontSize: "14px",
  },
  "&:hover": {
    borderColor: "var(--color-primary)",
    color: "var(--color-primary)",
    background: "rgba(244, 122, 32, 0.05)",
  },
}));

export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
    outline: "none",
  },
});

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  borderRadius: "32px",
  padding: theme.spacing(4),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background:
      "linear-gradient(45deg, var(--color-primary-hover), var(--color-text-blue), var(--color-green), var(--color-primary))",
    borderRadius: "34px",
    opacity: 0.4,
    filter: "blur(8px)",
  },
}));

export const CloseBtnContainer = styled(Box)({
  position: "absolute",
  top: -16,
  right: -16,
  zIndex: 10,
});

export const CloseBtn = styled(IconButton)({
  width: 40,
  height: 40,
  background: "var(--color-white)",
  color: "#1e293b",
  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  border: "2px solid var(--color-white)",
  "&:hover": {
    color: "var(--color-primary-hover)",
  },
});

export const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

export const SubtitleText = styled(Typography)({
  color: "#64748b",
});

export const EmailTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(248, 250, 252, 0.8)",
  },
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  borderRadius: "16px",
  background: "var(--color-primary)",
  fontWeight: 800,
  boxShadow: "0 10px 20px rgba(244, 122, 32, 0.3)",
  "&:hover": {
    background: "var(--color-primary-dark)",
  },
}));

export const PdfModalBox = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  borderRadius: "40px",
  padding: theme.spacing(4),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background: "linear-gradient(45deg, var(--color-primary), var(--color-text-blue), var(--color-green), var(--color-primary))",
    borderRadius: "42px",
    opacity: 0.4,
    filter: "blur(10px)",
  },
}));

export const PdfCloseBtnContainer = styled(Box)({
  position: "absolute",
  top: -20,
  right: -20,
  zIndex: 10,
});

export const PdfCloseBtn = styled(IconButton)({
  width: 44,
  height: 44,
  background: "var(--color-white)",
  color: "#1e293b",
  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  border: "2px solid var(--color-white)",
  "&:hover": {
    color: "var(--color-primary-hover)",
  },
});

export const PdfListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const PdfItemRow = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "24px",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background: "rgba(244, 122, 32, 0.03)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  border: "1px solid rgba(244, 122, 32, 0.1)",
  "& .pdf-name": {
    flex: 1,
    color: "#1f2937",
    fontWeight: 700,
  },
  "& svg": {
    fontSize: "16px",
    color: "var(--color-primary)",
  },
  "&:hover": {
    background: "rgba(244, 122, 32, 0.1)",
    borderColor: "rgba(244, 122, 32, 0.3)",
    transform: "translateX(12px)",
    boxShadow: "0 10px 20px rgba(244, 122, 32, 0.1)",
  },
}));

export const PdfIconWrapper = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: "16px",
  background: "var(--color-white)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  "& svg": {
    color: "var(--color-primary)",
    fontSize: "24px",
  },
});

export const FullScreenDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    background: "var(--color-white)",
  },
});

export const ViewerHeaderBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #f1f5f9",
  background: "var(--color-white)",
  zIndex: 10,
}));

export const BackButton = styled(Button)({
  fontWeight: 700,
  textTransform: "none",
  color: "#64748b",
  "& svg": {
    transform: "rotate(180deg)",
    fontSize: "14px",
  },
});

export const HeaderCloseBtn = styled(IconButton)({
  color: "#1e293b",
});

export const ViewerContent = styled(DialogContent)({
  padding: 0,
  background: "#f8fafc",
  "& iframe": {
    border: "none",
  },
});
