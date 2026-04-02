import { styled, Box, Typography, Button } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: "30px 80px",
  backgroundColor: "var(--color-white)7f2",
  
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
//   maxWidth: 1100,
  margin: "0 auto",
  backgroundColor: "var(--color-white)",
  borderRadius: 16,
  padding: theme.spacing(6),
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  marginBottom: theme.spacing(5),
}));

export const ContentRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(6),
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    textAlign: "center",
  },
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  lineHeight: 1.8,
  fontSize: 17,
  marginBottom: theme.spacing(2),
}));

export const QuoteAuthor = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

export const Checklist = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ChecklistItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 500,
}));

export const CTAWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(5),
}));

export const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 10,
  padding: "12px 32px",
}));