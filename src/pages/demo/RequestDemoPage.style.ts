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
  fontSize: "2rem",
  letterSpacing: "-0.02em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
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

export const UnifiedDemoCard = styled(Box)({
  // background: "#ffffff",
  // borderRadius: "32px",
  // boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)",
  // border: "1px solid rgba(255,255,255,0.8)",
  overflow: "hidden",
  position: "relative",
}) as typeof Box;

export const ContactPane = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
})) as typeof Box;

export const CalendarPane = styled(Box)({
  height: "100%",
  position: "relative",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
}) as typeof Box;


export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2.5),
  "& svg": {
    color: "var(--color-primary)",
    fontSize: "1.75rem",
    marginTop: "4px",
    flexShrink: 0,
  },
}));

export const ContactLabel = styled(Typography)({
  fontWeight: 700,
  color: "#1e293b",
  fontSize: "1.1rem",
  marginBottom: "4px",
}) as typeof Typography;

export const ContactValue = styled(Typography)({
  color: "#64748b",
  fontSize: "1rem",
  lineHeight: 1.6,
  wordBreak: "break-word",
  overflowWrap: "break-word",
  "& a": {
    color: "var(--color-primary)",
    textDecoration: "none",
    fontWeight: 600,
    transition: "color 0.2s ease",
    "&:hover": {
      color: "var(--color-green)",
      textDecoration: "underline",
    },
  },
}) as typeof Typography;


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
