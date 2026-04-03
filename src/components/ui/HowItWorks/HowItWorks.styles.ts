import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

interface StepContentProps {
  isLeft: boolean;
}

/* SECTION */
export const Section = styled(Box)(({ theme }) => ({
  padding: "80px 16px",
  // background: "#f9fafb",
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    padding: "100px 64px",
  },
}));

/* HEADER */
export const Header = styled(Box)(() => ({
  marginBottom: "64px",
  textAlign: "center",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: "16px",
  color: "var(--color-gray-900)",
  fontSize: "2.5rem",

 
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const Subtitle = styled(Typography)(() => ({
  color: "var(--color-gray-600)",
  maxWidth: "600px",
  margin: "0 auto",
  fontSize: "1.1rem",
}));

/* TIMELINE */
export const TimelineWrapper = styled(Box)(() => ({
  position: "relative",
  maxWidth: "900px",
  margin: "0 auto",
}));

export const VerticalLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "25px",
  top: 0,
  bottom: 0,
  width: "3px",
  background:
    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.1) 90%, transparent)",

  [theme.breakpoints.up("md")]: {
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

/* STEP */
export const StepRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<{ isLeft: boolean }>(({ theme, isLeft }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "64px",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    justifyContent: isLeft ? "flex-start" : "flex-end",
    marginBottom: "80px",
  },
}));

export const MotionStep = styled(motion.div)(() => ({
  width: "100%",
}));

export const StepContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<{ isLeft: boolean }>(({ theme, isLeft }) => ({
  width: "100%",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    width: "50%",
    marginLeft: isLeft ? 0 : "auto",
    marginRight: isLeft ? "auto" : 0,
  },
}));

export const StepContents = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<StepContentProps>(({ theme, isLeft }) => ({
  paddingLeft: "80px",
  textAlign: "left",

  [theme.breakpoints.up("md")]: {
    paddingLeft: isLeft ? 0 : "50px",
    paddingRight: isLeft ? "50px" : 0,
    textAlign: isLeft ? "right" : "left",
  },
}));

/* ICON */
export const StepIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLeft" && prop !== "themeColor",
})<{ isLeft: boolean; themeColor: string }>(({ theme, isLeft, themeColor }) => ({
  position: "absolute",
  top: 0,
  left: "0px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: themeColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-white)",
  zIndex: 2,
  boxShadow: `0 10px 25px ${themeColor}4D`,
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },

  "& svg": {
    fontSize: "1.5rem",
  },

  [theme.breakpoints.up("md")]: {
    left: isLeft ? "auto" : "-35px",
    right: isLeft ? "-35px" : "auto",
    width: "70px",
    height: "70px",

    "& svg": {
      fontSize: "2rem",
    },
  },
}));

/* TEXT */
export const StepTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-gray-900)",
  marginBottom: "12px",
  fontSize: "1.25rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
}));

export const StepDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isLeft",
})<{ isLeft: boolean }>(({ theme, isLeft }) => ({
  color: "var(--color-gray-600)",
  lineHeight: 1.6,
  fontSize: "0.95rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.05rem",
    maxWidth: "380px",
    marginLeft: isLeft ? "auto" : 0,
  },
}));

/* CTA */
export const CTAWrapper = styled(Box)(() => ({
  textAlign: "center",
  marginTop: "48px",
}));

export const CTAButton = styled(Button)<{ themeColor: string }>(
  ({ themeColor }) => ({
    padding: "12px 40px",
    borderRadius: "40px",
    fontWeight: "bold",
    textTransform: "none",
    background: themeColor,
    color: "white",
    boxShadow: `0 10px 25px ${themeColor}4D`,

    "&:hover": {
      background: themeColor,
      filter: "brightness(0.9)",
    },
  })
);