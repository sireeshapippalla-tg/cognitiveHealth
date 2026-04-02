import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

interface SectionProps {
  background?: string;
  borderRadius?: string;
}
interface TitleProps {
  align?: "center" | "left";
}

export const HeaderMotion = styled(motion.div)(() => ({
  marginBottom: "40px",
}));

export const TimelineContainer = styled(Box)(() => ({
  position: "relative",
  paddingTop: "32px",
  paddingBottom: "32px",
}));

export const TimelineItems = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "48px",
}));

export const TimelineRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  position: "relative",
  zIndex: 1,
  gap: "32px",

  [theme.breakpoints.up("md")]: {
    gap: "48px",
  },
}));

export const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== "background",
})<SectionProps>(({ theme, background, borderRadius }) => ({
  width: "100%",
  background: background ?? "var(--color-white)",
  padding: "20px 40px",
  borderRadius: borderRadius ?? "0px",
  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));

export const Inner = styled(Box)({
  // maxWidth: "1200px",
  margin: "0 auto",
});

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "align",
})<TitleProps>(({ theme, align = "center" }) => ({
  fontSize: "32px",
  fontWeight: 700,
  textAlign: align,
  color: "var(--color-gray-900)",
  marginBottom: "8px",
  lineHeight:"40px",

  "& span": {
    color: "var(--color-primary-hover)",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  // fontFamily: "Inter",
  textAlign: "center",
  fontSize: "15px",
  color: "var(--color-text-light)",
  maxWidth: "720px",
  margin: "0 auto 32px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
  },
}));

export const TimelineLine = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  left: "30px",
  top: 0,
  width: "3px",
  zIndex: 0,

  [theme.breakpoints.down("md")]: {
    left: "22px",
  },
}));

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: "default" | "pink" }>(({ theme, variant }) => ({
  width: "50px",
  height: "50px",
  flexShrink: 0,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background:
    variant === "pink"
      ? "linear-gradient(135deg, #F47A20 0%, #E06912 100%)"
      : "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)",

  border: "3px solid",
  borderColor:
    variant === "pink"
      ? "rgba(244, 122, 32, 0.2)"
      : "rgba(74, 144, 226, 0.2)",

  boxShadow:
    variant === "pink"
      ? "0 8px 20px rgba(244, 122, 32, 0.3)"
      : "0 8px 20px rgba(74, 144, 226, 0.3)",

  "& img": {
    width: "28px",
    height: "28px",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },

  [theme.breakpoints.up("md")]: {
    width: "64px",
    height: "64px",
  },
}));

export const ContentWrapper = styled(motion.div)(() => ({
  flexGrow: 1,
  paddingTop: "6px",
}));

export const ContentCard = styled(Box)(() => ({
  background: "transparent",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  paddingBottom: "24px",
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#0f172a",
  marginBottom: "12px",
  fontSize: "1.3rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
}));

export const ItemDescription = styled(Typography)(() => ({
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#475569",
}));

export const AnimatedTimelineLine = styled(TimelineLine)<{
  variant: "default" | "pink";
}>(({ variant }) => ({
  background:
    variant === "pink"
      ? "linear-gradient(to bottom, transparent, var(--color-primary), var(--color-primary-dark), transparent)"
      : "linear-gradient(to bottom, transparent, var(--color-text-blue), var(--color-green), transparent)",
}));