import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Paper,
  Checkbox,
  DialogTitle,
  DialogActions,
  Button,
  Dialog,
  IconButton,
  TextField,
  LinearProgress,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import InsightsIcon from "@mui/icons-material/Insights";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* CONTAINER */
export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "var(--color-white)",
  // padding: "32px 16px",
  [theme.breakpoints.up("md")]: { padding: "64px 32px" },
  [theme.breakpoints.down("md")]: { padding: "20px" },
}));

/* HEADER */
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  paddingLeft: "24px",
  paddingRight: "24px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));
export const ResultsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1000,
  margin: "0 auto",
  textAlign: "center",
  // padding: "10px 16px",
  [theme.breakpoints.up("md")]: { padding: "64px 16px" },
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-text-blue)",
  lineHeight: 1.2,
  fontSize: "28px",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: { fontSize: "36px" },
  [theme.breakpoints.up("md")]: { fontSize: "44px" },
}));

export const HeaderSubText = styled(Typography)(({ theme }) => ({
  marginTop: 12,
  color: "#6b7280",
  fontSize: "14px",
  maxWidth: 700,
  marginInline: "auto",
  lineHeight: 1.6,
  [theme.breakpoints.up("sm")]: { fontSize: "16px" },
}));

/* SECTION CARD */
export const SectionPaper = styled(Paper)(() => ({
  // background: "var(--color-white)",
  // border: "1px solid #e5e7eb",
  // borderRadius: 12,
  // padding: 16,
  // height: "100%",
  // [theme.breakpoints.up("md")]: { padding: 24 },

  background: "var(--color-white)",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 20,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const SectionTitle = styled(Typography)({
  fontWeight: 600,
  color: "var(--color-text-blue)",
});

export const StyledCheckbox = styled(Checkbox)({
  color: "-var(--color-primary)",
  padding: 0,
  marginTop: "3px",
  marginRight: "12px",
  flexShrink: 0,
  "&.Mui-checked": { color: "-var(--color-primary)" },
});

/* RESULT */
export const ResultPaper = styled(Paper)(({ theme }) => ({
  padding: 48,
  borderRadius: 12,
  textAlign: "center",
  background: "#eff6ff",
  border: "1px solid #bfdbfe",
  maxWidth: 700,
  width: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: { padding: 24 },
}));

/* FOOTER */
export const FooterWrapper = styled(Box)({
  marginTop: 10,
  textAlign: "center",
});

export const FooterEmail = styled(Typography)({
  color: "-var(--color-primary)",
  fontWeight: 700,
});

export const FooterCaption = styled(Typography)({
  opacity: 0.6,
  color: "#6b7280",
});

export const FolderStyledIcon = styled(FolderIcon)({
  color: "var(--color-text-blue)",
  fontSize: 22,
});

export const PaymentsStyledIcon = styled(PaymentsIcon)({
  color: "var(--color-green)",
  fontSize: 22,
});

export const HospitalStyledIcon = styled(LocalHospitalIcon)({
  color: "var(--color-primary)",
  fontSize: 22,
});

export const TimeStyledIcon = styled(AccessTimeIcon)({
  color: "#06B6D4",
  fontSize: 22,
});

export const AIStyledIcon = styled(SmartToyIcon)({
  color: "#8B5CF6",
  fontSize: 22,
});

export const HandshakeStyledIcon = styled(HandshakeIcon)({
  color: "#F59E0B",
  fontSize: 22,
});

export const TrendingStyledIcon = styled(TrendingDownIcon)({
  color: "#EF4444",
  fontSize: 22,
});

export const InsightsStyledIcon = styled(InsightsIcon)({
  color: "#3B82F6",
  fontSize: 22,
});

export const SuccessStyledIcon = styled(CheckCircleIcon)({
  color: "var(--color-green)",
  fontSize: 60,
});
export const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: "#eb7b33",
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
  color: "var(--color-white)",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#1E40AF",
  },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  background: "var(--color-text-blue)",
  padding: "80px 20px",
  textAlign: "center",
  color: "var(--color-white)",
  marginBottom: "40px",
  marginTop: "56px",
  [theme.breakpoints.up("md")]: {
    marginTop: "64px",
    padding: "90px 20px",
  },
}));

export const HeroTitle = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
});

export const HeroSubtitle = styled(Typography)({
  marginTop: "16px",
  fontSize: "18px",
  opacity: 0.9,
});

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
      "linear-gradient(45deg, var(--color-text-blue), var(--color-green), var(--color-primary), var(--color-text-blue))",
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
    color: "var(--color-primary-dark)",
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

export const ActionsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const DialogPrimaryButton = styled(PrimaryButton)(({ theme }) => ({
  paddingTop: theme.spacing(1.8),
  paddingBottom: theme.spacing(1.8),
  borderRadius: "16px",
  fontWeight: 800,
}));

export const PreviewButton = styled(Button)({
  textTransform: "none",
  color: "#64748b",
  fontWeight: 600,
});

export const StickyProgressBarBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 64,
  zIndex: 1000,
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(12px)",
  paddingTop: "16px",
  paddingBottom: "16px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "16px",
  marginBottom: "32px",
  border: "1px solid rgba(229, 231, 235, 0.8)",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
  [theme.breakpoints.down("md")]: {
    top: 56,
    borderRadius: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
}));

export const StyledLinearProgress = styled(LinearProgress)({
  height: 12,
  borderRadius: 6,
  backgroundColor: "#f3f4f6",
  boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
  "& .MuiLinearProgress-bar": {
    borderRadius: 6,
    background: "linear-gradient(90deg, var(--color-text-blue) 0%, var(--color-green) 100%)",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

export const CheckboxRowBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
});

export const CheckboxLabelText = styled(Typography)({
  flex: 1,
  lineHeight: 1.6,
  color: "#1f2937",
});
