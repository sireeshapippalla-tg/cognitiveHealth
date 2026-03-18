// import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

// export const TrustSection = styled(Box)(({ theme }) => ({
//   marginTop: "30px",
//   [theme.breakpoints.down("md")]: {
//     textAlign: "center",
//   },
// }));

// export const TrustTitle = styled(Box)(({ theme }) => ({
//   // fontFamily: "Inter",
//   fontSize: "16px",
//   lineHeight: "24px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "16px",
//   marginBottom: "32px",
//   color: "#0E0E0E",
//   fontWeight: 600,

//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     gap: "8px",
//   },
// }));

// export const LogoGrid = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   gap: "40px",
//   flexWrap: "nowrap",

//   [theme.breakpoints.down("md")]: {
//     gap: "32px",
//   },
// }));

// export const LogoImage = styled("img")(({ theme }) => ({
//   height: "60px",
//   maxWidth: "140px",
//   objectFit: "contain",
//   margin: "0 40px",

//   [theme.breakpoints.down("md")]: {
//     height: "24px",
//   },
// }));

// export const LogoScrollWrapper = styled("div")({
//   overflow: "hidden",
//   width: "100%",
//   "&:hover div": {
//     animationPlayState: "paused",
//   },
// });

// export const LogoTrack = styled("div")({
//   display: "flex",
//   width: "max-content",
//   animation: "scroll linear infinite",
//   "&:hover": {
//     animationPlayState: "paused",
//   },
//   "@keyframes scroll": {
//     "0%": { transform: "translateX(0)" },
//     "100%": { transform: "translateX(-50%)" },
//   },
// });

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
    background: "radial-gradient(circle, #F47A20, transparent)",
    filter: "blur(120px)",
    top: "-60px",
    left: "-60px",
    opacity: 0.15,
  },
}));

export const TrustTitle = styled(Box)(({ theme }) => ({
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.25em",
  textAlign: "center",
  marginBottom: "40px",
  fontWeight: 700,

  // 🔥 gradient text
  background: "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const LogoScrollWrapper = styled("div")({
  overflow: "hidden",
  width: "100%",
  position: "relative",

  // 🔥 edge fade mask
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",

  "&:hover div": {
    animationPlayState: "paused",
  },

  // 🔥 center spotlight
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
    pointerEvents: "none",
    zIndex: 2,
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