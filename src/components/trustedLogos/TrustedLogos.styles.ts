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
  marginTop: "120px",
  padding: "80px 0",
  position: "relative",
  // backgroundColor: "transparent",
  borderTop: "1px solid var(--color-divider)",
  borderBottom: "1px solid var(--color-divider)",
}));

export const TrustTitle = styled(Box)(({ theme }) => ({
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.25em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  marginBottom: "64px",
  color: "var(--color-primary)",
  fontWeight: 800,
  fontFamily: '"Outfit", sans-serif',
  opacity: 0.6,

  "&::before, &::after": {
    content: '""',
    height: "1px",
    width: "40px",
    background: "currentColor",
    opacity: 0.3,
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: "12px",
    "&::before, &::after": { display: "none" },
  },
}));

export const LogoGrid = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "100px",
  padding: "0 50px",
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "36px",
  maxWidth: "180px",
  objectFit: "contain",
  filter: "grayscale(1) contrast(0.8) opacity(0.5)",
  transition: "all 0.4s ease",
  cursor: "pointer",

  "&:hover": {
    filter: "grayscale(0) contrast(1) opacity(1)",
    transform: "scale(1.1)",
  },

  [theme.breakpoints.down("md")]: {
    height: "28px",
  },
}));

export const LogoScrollWrapper = styled("div")({
  overflow: "hidden",
  width: "100%",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
});

export const LogoTrack = styled("div")({
  display: "flex",
  width: "max-content",
  animation: "scroll 40s linear infinite",
  alignItems: "center",
  "@keyframes scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});