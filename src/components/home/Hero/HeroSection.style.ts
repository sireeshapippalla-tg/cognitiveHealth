import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroInner = styled(Box)(({ theme }) => ({
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 32px",

  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));
export const Hero = styled(Box)(() => ({
  width: "100%",
  overflowX: "hidden",
  marginBottom: "30px",
}));

/* GRID */
export const HeroGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  // gridTemplateColumns: "1fr 1.8fr",
  gridTemplateColumns: "1.4fr 1.2fr",
  gap: "72px",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "48px",
    textAlign: "center",
  },
}));

/* RIGHT */
export const DashboardWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

/* LEFT */
export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: { textAlign: "center", maxWidth: "100%" },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: 1.2,

  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: 1.2,
  },
}));

export const Highlight = styled("span")({
  color: "#ea580c",
});

export const Subtitle = styled(Box)({
  marginTop: "24px",
  maxWidth: "550px",
});

export const Actions = styled(Box)(({ theme }) => ({
  marginTop: "60px",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

/* TRUST SECTION */
export const TrustSection = styled(Box)(({ theme }) => ({
  marginTop: "80px",

  [theme.breakpoints.down("md")]: {
    marginTop: "64px",
    textAlign: "center",
  },
}));

export const TrustTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  marginBottom: "32px",
  fontSize: "14px",
  // color: "#4b5563",
  fontWeight: 500,

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
  flexWrap: "wrap",
  opacity: 0.8,

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    gap: "32px",
  },
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "28px",
  maxWidth: "140px",
  objectFit: "contain",

  filter: "none",
  opacity: 1,

  [theme.breakpoints.down("md")]: {
    height: "24px",
  },
}));

export const LogoText = styled("span")({
  fontSize: "18px",
  fontWeight: 700,
  color: "#9ca3af",
});
