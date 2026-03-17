import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TrustSection = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const TrustTitle = styled(Box)(({ theme }) => ({
  // fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  marginBottom: "32px",
  color: "#0E0E0E",
  fontWeight: 600,
  

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "8px",
  },
}));

export const LogoGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  flexWrap: "nowrap",

  [theme.breakpoints.down("md")]: {
    gap: "32px",
  },
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "60px",
  maxWidth: "140px",
  objectFit: "contain",
  margin: "0 40px",

  [theme.breakpoints.down("md")]: {
    height: "24px",
  },
}));

export const LogoScrollWrapper = styled("div")({
  overflow: "hidden",
  width: "100%",
  "&:hover div": {
    animationPlayState: "paused",
  },
});

export const LogoTrack = styled("div")({
  display: "flex",
  width: "max-content",
  animation: "scroll linear infinite",
  "&:hover": {
    animationPlayState: "paused",
  },
  "@keyframes scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});
