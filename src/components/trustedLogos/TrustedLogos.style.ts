import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TrustSection = styled(Box)(() => ({
  // marginTop: "100px",
  padding: "60px 0",
  position: "relative",
  overflow: "hidden",
  // background: "#F9FAFB",

  // 🔥 background glow (brand)
  "&::before": {
    content: '""',
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "radial-gradient(circle, #eb7b33, transparent)",
    filter: "blur(120px)",
    top: "-60px",
    left: "-60px",
    opacity: 0.15,
  },
}));

export const TrustTitle = styled(Box)(() => ({
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.25em",
  textAlign: "center",
  marginBottom: "40px",
  fontWeight: 700,

}));

export const LogoScrollWrapper = styled("div")({
  overflow: "hidden",
  width: "100%",
  position: "relative",

  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",

  "&:hover div": {
    animationPlayState: "paused",
  },
});

export const LogoTrack = styled("div")({
  display: "flex",
  width: "fit-content",

  animation: "scroll 30s linear infinite",

  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)", // must match duplication
    },
  },
});

export const LogoGrid = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  padding: "0 40px",
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "40px",
  maxWidth: "160px",
  objectFit: "contain",

  // 🔥 default faded look
  // filter: "grayscale(1) opacity(0.4)",
  transition: "all 0.4s ease",

  "&:hover": {
    filter: "grayscale(0) opacity(1)",
    transform: "scale(1.1)",
  },

  [theme.breakpoints.down("md")]: {
    height: "28px",
  },
}));

import { Typography } from "@mui/material";
import { motion } from "framer-motion";

/* 🔥 Motion Wrapper */
export const MotionWrapper = styled(motion.div)(() => ({}));

/* 🔥 Title Motion Wrapper (replaces inline style) */
export const TitleMotionWrapper = styled(motion.div)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginBottom: "20px",
}));


export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  letterSpacing: "1px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
    textAlign: "center",
    margin: "0 auto 32px auto",
  },

  fontWeight: 600,
  padding: "0px 20px",
}));

export const LogoCard = styled(Box)(() => ({
  borderRadius: "12px",
  padding: "10px 18px",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    transform: "translateY(-6px) scale(1.05)",
    background:
      "linear-gradient(120deg, rgba(235,123,51,0.08), rgba(107,191,89,0.08))",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
}));

/* 🔥 Dynamic animation duration (replaces inline style) */
export const AnimatedLogoTrack = styled(LogoTrack)<{ speed: number }>(
  ({ speed }) => ({
    animationDuration: `${speed}s`,
  })
);
