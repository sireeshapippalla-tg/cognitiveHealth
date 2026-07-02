import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const LayoutWrapper = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const HeroSection = styled(Box)<{ $bgImage?: string }>(({ theme, $bgImage }) => ({
  backgroundImage: $bgImage ? `url(${$bgImage}) !important` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  marginTop: "80px",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.3rem",
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: "3.3rem",
  },
})) as typeof Typography;

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.9,
  marginTop: theme.spacing(3),
  lineHeight: 1.6,
  fontSize: "1.1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
})) as typeof Typography;

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "flex-start",
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#0b1f38",
  fontWeight: 600,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f3f4f6",
  },
}));

export const ContactSalesButton = styled(Button)(({ theme }) => ({
  borderColor: "white",
  color: "white",
  fontWeight: 600,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  textTransform: "none",
  "&:hover": {
    borderColor: "#e5e7eb",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
}));

export const Section2Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  backgroundColor: "#ffffff",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const PlaceholderBox = styled(Box)({
  width: "auto",
  maxHeight: "140px",
  objectFit: "contain",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
});
