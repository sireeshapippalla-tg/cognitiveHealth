import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(15),
  background: "var(--color-white)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const BackgroundDecoration = styled(Box)({
  position: "absolute",
  top: "10%",
  right: "-5%",
  width: "500px",
  height: "500px",
  background:
    "radial-gradient(circle, rgba(107, 191, 89, 0.05) 0%, transparent 70%)",
  filter: "blur(80px)",
  zIndex: 0,
});

export const HeaderBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(12),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  marginBottom: theme.spacing(3),
  fontSize: "28px",
  color: "var(--color-dark-gray)",
  letterSpacing: "-0.04em",
  lineHeight: 1.1,
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const SectionSubtitle = styled(Typography)({
  color: "var(--color-gray-500)",
  maxWidth: "650px",
  margin: "0 auto",
  fontSize: "1.2rem",
  lineHeight: 1.6,
  fontWeight: 500,
});

export const AdvisorsContainer = styled(Box)({
  maxWidth: "1000px",
  margin: "0 auto",
});

export const AdvisorCardWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: isMobile ? theme.spacing(4) : theme.spacing(8),
  alignItems: "center",
  textAlign: isMobile ? "center" : "left",
  marginBottom: theme.spacing(10),
  position: "relative",
  "&:hover .advisor-avatar": {
    transform: "scale(1.1) rotate(5deg)",
    boxShadow: "0 20px 40px rgba(107, 191, 89, 0.2)",
  },
  "&:hover .advisor-name": { color: "var(--color-primary)" },
}));

export const AdvisorAvatar = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: 140,
  height: 140,
  borderRadius: "40px",
  background:
    "linear-gradient(135deg, rgba(107, 191, 89, 0.1) 0%, rgba(107, 191, 89, 0.2) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3.5rem",
  fontWeight: 900,
  color: "var(--color-green)",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(107, 191, 89, 0.2)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
  [theme.breakpoints.down("md")]: {
    width: 70,
    height: 70,
    fontSize: "3rem",
  },
}));

export const AdvisorName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: "var(--color-dark-gray)",
  fontWeight: 900,
  fontSize: "25px",
  transition: "color 0.3s ease",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const AdvisorRole = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ isMobile }) => ({
  color: "var(--color-primary)",
  fontWeight: 800,
  fontSize: isMobile ? "16px" : "18px",
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: isMobile ? "center" : "flex-start",
  gap: "16px",
  "&::after": {
    content: '""',
    width: "40px",
    height: "2px",
    background: "rgba(244, 122, 32, 0.3)",
    display: isMobile ? "none" : "block",
  },
}));

export const AdvisorDescription = styled(Typography)({
  color: "var(--color-gray-600)",
  fontSize: "1.15rem",
  lineHeight: 1.8,
  maxWidth: "750px",
  fontWeight: 500,
});
