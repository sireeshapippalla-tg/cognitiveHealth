import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton, TextField, Button, Dialog } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PrimaryButton } from "../../ui/appButton/AppButton.style";

// Section Styling
export const TrustDeploymentWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  backgroundColor: "#f8fafc",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const RelativeBox = styled(Box)({
  position: "relative",
  zIndex: 1,
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "32px",
  background: "linear-gradient(135deg, var(--color-white) 0%, #f1f5f9 100%)",
  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.05)",
  border: "1px solid rgba(0, 0, 0, 0.02)",
  overflow: "hidden",
  padding: theme.spacing(4),
  color: "#0f172a",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(74, 144, 226, 0.08) 0%, transparent 70%)",
    transform: "translate(30%, -30%)",
    zIndex: 0,
  },
}));

export const TrustDeploymentTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.5rem",
  lineHeight: 1.3,
  textAlign: "center",
  marginBottom: theme.spacing(8),
  color: "#0f172a",
  letterSpacing: "-0.5px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
    lineHeight: 1.3,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
  },
}));

export const GradientSpan = styled("span")({
  color: "inherit",
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(10),
  },
}));

export const QuoteBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  backgroundColor: "rgba(74, 144, 226, 0.05)",
  borderRadius: "24px",
  border: "1px solid rgba(74, 144, 226, 0.15)",
}));

export const QuoteMark = styled(Typography)({
  position: "absolute",
  top: "-30px",
  left: "20px",
  fontSize: "8rem",
  fontWeight: 900,
  color: "rgba(74, 144, 226, 0.15)",
  lineHeight: 1,
  fontFamily: "serif",
});

export const QuoteText = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  color: "#1e293b",
  marginBottom: theme.spacing(3),
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));

export const QuoteAuthor = styled(Typography)({
  fontSize: "0.95rem",
  color: "var(--color-gray-500)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
});

export const ChecklistContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const ChecklistItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const CheckIconStyled = styled(CheckCircleIcon)({
  color: "var(--color-text-blue)",
  fontSize: "1.8rem",
  filter: "drop-shadow(0 4px 6px rgba(74,144,226,0.2))",
});

export const ChecklistText = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.1rem",
  color: "var(--color-gray-600)",
});

export const CTAWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(8),
}));

export const ArrowIconStyled = styled(ArrowForwardIosIcon)({
  fontSize: "1rem",
});

export const ImplementationButton = styled(PrimaryButton)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1.2),
  paddingBottom: theme.spacing(1.2),
  borderRadius: "40px",
  fontWeight: "bold",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  background: "var(--color-primary)",
  color: "white",
  boxShadow: "0 10px 25px rgba(235, 123, 51, 0.3)",
  whiteSpace: "normal",
  fontSize: "0.9rem",
  lineHeight: 1.3,
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1.6),
    paddingBottom: theme.spacing(1.6),
    whiteSpace: "nowrap",
    fontSize: "1rem",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-80%",
    width: "60%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
    transform: "skewX(-20deg)",
  },
  "&:hover::after": {
    left: "130%",
    transition: "0.7s",
  },
}));

// Modal Styling
export const ModalBox = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(20px)",
  borderRadius: "32px",
  padding: theme.spacing(5),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background: "linear-gradient(45deg, var(--color-primary-hover), var(--color-text-blue), var(--color-green), var(--color-primary))",
    borderRadius: "34px",
    opacity: 0.4,
    filter: "blur(8px)",
  },
}));

export const CloseBtnContainer = styled(Box)({
  position: "absolute",
  top: -18,
  right: -18,
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
    background: "var(--color-white)",
    color: "var(--color-primary)",
  },
});

export const FormWrapper = styled("form")(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const EmailTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    "& fieldset": {
      borderColor: "rgba(226, 232, 240, 1)",
    },
  },
}));

export const PrivacyText = styled(Typography)(({ theme }) => ({
  color: "var(--color-gray-600)",
  marginTop: theme.spacing(1.5),
  display: "block",
  textAlign: "center",
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  borderRadius: "16px",
  paddingTop: theme.spacing(1.8),
  paddingBottom: theme.spacing(1.8),
  textTransform: "none",
  fontWeight: 700,
  borderColor: "#e2e8f0",
  color: "#64748b",
  "&:hover": {
    borderColor: "#cbd5e1",
    backgroundColor: "#f8fafc",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "16px",
  paddingTop: theme.spacing(1.8),
  paddingBottom: theme.spacing(1.8),
  textTransform: "none",
  fontWeight: 700,
  background: "#eb7b33",
  boxShadow: "0 10px 20px rgba(235, 123, 51, 0.3)",
  "&:hover": {
    background: "#eb7b33",
    boxShadow: "0 12px 24px rgba(235, 123, 51, 0.4)",
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

export const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

export const ActionsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  gap: theme.spacing(2),
}));

