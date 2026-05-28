import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Paper,
  Checkbox,
  DialogTitle,
  DialogActions,
  Button,
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
  // textAlign: "center",
  // padding: "40px 16px",
  // [theme.breakpoints.up("md")]: { padding: "34px 16px" },
  [theme.breakpoints.down("md")]: { padding: "20px" },
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
  padding: 4,
  marginTop: 2,
  "&.Mui-checked": { color: "-var(--color-primary)" },
});

/* RESULT */
export const ResultPaper = styled(Paper)(({ theme }) => ({
  // marginTop: 48,
  padding: 24,
  borderRadius: 12,
  textAlign: "center",
  background: "#eff6ff",
  border: "1px solid #bfdbfe",
  [theme.breakpoints.up("md")]: { padding: 40 },
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
  fontSize: 48,
});
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
  color: "var(--color-white)",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#1E40AF",
  },
}));

export const HeroSection = styled(Box)({
  background: "var(--color-text-blue)",
  padding: "70px 20px",
  textAlign: "center",
  color: "var(--color-white)",
  marginBottom: "40px",
});

export const HeroTitle = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
});

export const HeroSubtitle = styled(Typography)({
  marginTop: "16px",
  fontSize: "18px",
  opacity: 0.9,
});
