import { Box, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: "64px 24px",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

export const OuterCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  borderRadius: 28,
  padding: "0",
  overflow: "hidden",
  position: "relative",
}));

/* ORANGE HEADER STRIP */
export const HeaderStrip = styled(Box)(({ theme }) => ({
  backgroundColor: "#f27c22",
  padding: "20px 40px",
  color: "#ffffff",

  [theme.breakpoints.down("md")]: {
    padding: "36px 24px",
  },
}));


export const HeaderTitle = styled(Typography)({
  fontSize: 26,
  fontWeight: 700,
  marginBottom: 6,
});

export const HeaderSubtitle = styled(Typography)({
  fontSize: 14,
  opacity: 0.95,
  marginTop:100
});

/* CONTENT AREA */
export const Content = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "40px",
  padding: "48px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: "32px 24px",
  },
}));


/* LEFT INFO */
export const Info = styled(Box)({});

export const InfoBlock = styled(Box)({
  marginBottom: 24,
});

export const InfoLabel = styled(Typography)({
  fontSize: 13,
  color: "#6b7280",
  marginBottom: 4,
});

export const InfoValue = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#111827",
});

/* FORM CARD */
export const FormCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: 20,
  padding: "28px",
  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",

  marginTop: "-220px",

  [theme.breakpoints.down("md")]: {
    marginTop: "0", 
    padding: "24px",
  },
}));


export const StyledInput = styled(TextField)({
  marginBottom: 16,
});

export const SubmitButton = styled(Button)({
  backgroundColor: "#f27c22",
  color: "#ffffff",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 999,
  padding: "10px 24px",
  marginTop: 8,

  "&:hover": {
    backgroundColor: "#e56f18",
  },
});
