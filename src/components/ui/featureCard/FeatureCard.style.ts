import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CardProps {
  variant?: "default" | "pink";
}
interface HeaderProps {
  direction?: "row" | "column";
}
interface TitleProps {
  direction?: "row" | "column";
}

export const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<CardProps>(({ variant }) => ({
  borderRadius: "24px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "152px",
  cursor: "pointer",
  transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
  position: "relative",
  overflow: "hidden",

  background: variant === "pink"
    ? "linear-gradient(135deg, rgba(255, 245, 235, 0.5) 0%, rgba(255, 255, 255, 0.9) 100%)"
    : "linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(255, 255, 255, 0.9) 100%)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  boxShadow: "0 4px 15px rgba(0,0,0,0.02), inset 0 2px 4px rgba(255,255,255,0.8)",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: variant === "pink"
      ? "radial-gradient(circle at right bottom, rgba(244, 122, 32, 0.05), transparent 60%)"
      : "radial-gradient(circle at right bottom, rgba(74, 144, 226, 0.05), transparent 60%)",
    pointerEvents: "none",
  },

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: variant === "pink"
      ? "0 25px 50px -12px rgba(244, 122, 32, 0.15), inset 0 2px 4px rgba(255,255,255,0.9)"
      : "0 25px 50px -12px rgba(74, 144, 226, 0.15), inset 0 2px 4px rgba(255,255,255,0.9)",
    borderColor: variant === "pink"
      ? "rgba(244, 122, 32, 0.2)"
      : "rgba(74, 144, 226, 0.2)",
  },
}));

export const Header = styled(Box, {
  shouldForwardProp: (prop) => prop !== "direction",
})<HeaderProps>(({ theme, direction = "column" }) => ({
  display: "flex",
  gap: "20px",
  marginBottom: "16px",
  flexDirection: direction,
  alignItems: direction === "column" ? "flex-start" : "center",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const IconBox = styled(Box)({
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.9)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  padding: "14px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  "& svg": {
    fontSize: 28,
  },
});

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "direction",
})<TitleProps>(({ direction = "column" }) => ({
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#0f172a",
  lineHeight: "1.3",
  textAlign: "left",
  flex: 1,
  wordBreak: "break-word",
  margin: direction === "row" ? "auto 0" : "0",
}));

export const Description = styled(Typography)({
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#475569",
  marginBottom: "24px",
  textAlign: "left",
  zIndex: 1,
});

export const LearnMoreButton = styled(Button)({
  fontSize: "0.875rem",
  padding: "4px 0",
  alignSelf: "flex-start",
  color: "#4A90E2",
  textTransform: "none",
  fontWeight: 600,
  letterSpacing: "0.3px",
  zIndex: 1,
  "&:hover": {
    background: "transparent",
    color: "var(--color-primary)",
  },
});
