import { styled } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";

export const StyledContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
});

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: "var(--color-white)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("xs")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const BackgroundGlow = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "500px",
  // background:
  //   "radial-gradient(circle, #eb7b33 0%, transparent 60%)",
  filter: "blur(40px)",
  zIndex: 0,
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.4rem",
  fontWeight: 800,
  textAlign: "center",
  color: "#0f172a",
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: 1.3,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    lineHeight: 1.3,
  },
}));

export const SubtitleTextStyle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "center",
  color: "#475569",
  marginBottom: theme.spacing(8),
  maxWidth: "750px",
  marginInline: "auto",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(6),
  },
}));

export const CardContainer = styled(Box)({
  position: "relative",
  padding: "32px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const BackgroundNumber = styled(Typography)({
  position: "absolute",
  top: "-15px",
  right: "15px",
  fontSize: "8rem",
  fontWeight: 900,
  color: "hsla(23, 82%, 56%, 0.12)",
  lineHeight: 1,
  zIndex: -1,
  userSelect: "none",
});

export const IconWrapper = styled(Box)({
  width: "60px",
  height: "60px",
  marginBottom: "24px",
  borderRadius: "14px",
  background: "#eb7b33",
  boxShadow: "0 8px 16px rgba(235, 123, 51, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    height: "28px",
    width: "28px",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },
});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: 800,
  color: "#0f172a",
  marginBottom: theme.spacing(1.5),
  letterSpacing: "-0.3px",
  lineHeight: 1.2,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.4,
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.4,
  },
}));

export const CardDescription = styled(Typography)({
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: "#475569",
});

export const HighlightText = styled("span")({
  color: "inherit",
});
