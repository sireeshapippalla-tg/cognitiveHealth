import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor:'#ECECEC',
  borderRadius:'40px'
}));
export const SectionContainer = styled(Box)(() => ({
  background: "#DC7328",
  padding: "80px 0",
}));

export const MeasureWrapper = styled(Box)(() => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 16px",
}));



export const HowItSectionContainer = styled(Box)(() => ({
  padding: "80px 0 0 0",
}));

export const HowItWrapper = styled(Box)(() => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 16px",
  textAlign: "center",
}));

export const StepsCard = styled(Box)(() => ({
  marginTop: 40,
}));

export const StepsRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
  flexWrap: "wrap",
}));

export const ArrowBox = styled(Box)(({ theme }) => ({
  color: "#EB7724",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ButtonsRow = styled(Box)(() => ({
  marginTop: 40,
  display: "flex",
  justifyContent: "center",
  gap: 16,
  flexWrap: "wrap",
}));
