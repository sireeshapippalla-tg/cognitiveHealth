import { styled } from "@mui/material/styles";
import { Box, Container, Breadcrumbs, Link, Typography } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
})) as typeof Box;

export const GlowOrbOne = styled(Box)({
  position: "absolute",
  top: "-10%",
  right: "-5%",
  width: "40%",
  height: "40%",
  background: "radial-gradient(circle, rgba(55, 125, 255, 0.05) 0%, transparent 70%)",
  zIndex: 0,
}) as typeof Box;

export const GlowOrbTwo = styled(Box)({
  position: "absolute",
  bottom: "-10%",
  left: "-5%",
  width: "40%",
  height: "40%",
  background: "radial-gradient(circle, rgba(0, 196, 140, 0.05) 0%, transparent 70%)",
  zIndex: 0,
}) as typeof Box;

export const StyledContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
}) as typeof Container;

export const StyledBreadcrumbs = styled(Breadcrumbs)({
  marginBottom: "32px",
  color: "#64748b",
}) as typeof Breadcrumbs;

export const BreadcrumbLink = styled(Link)({
  cursor: "pointer",
}) as typeof Link;

export const HeaderLogo = styled("img")(({ theme }) => ({
  height: "48px",
  marginBottom: theme.spacing(3),
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  color: "#1e293b",
  marginBottom: theme.spacing(2),
  fontSize: "2.5rem",
  letterSpacing: "-0.02em",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
})) as typeof Typography;

export const PrimaryHighlightSpan = styled("span")({
  color: "var(--color-primary)",
});

export const HeroDescription = styled(Typography)(() => ({
  color: "#64748b",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: 400,
  lineHeight: 1.6,
})) as typeof Typography;

export const CalendarCard = styled(Box)({
  background: "#ffffff",
  borderRadius: "32px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)",
  border: "1px solid rgba(255,255,255,0.8)",
  overflow: "hidden",
  minHeight: "800px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "6px",
    background: "linear-gradient(90deg, var(--color-primary), var(--color-green))",
  },
  "& iframe": {
    border: "none",
  },
}) as typeof Box;

export const FooterNoteText = styled(Typography)({
  color: "#94a3b8",
}) as typeof Typography;

export const HeaderBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
})) as typeof Box;

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  textAlign: "center",
})) as typeof Box;
