import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
    padding: " 20px",
  },
}));
export const SectionContainer = styled(Box)(() => ({
  background: "#ea580c",
  padding: "80px 0",
}));

export const MeasureWrapper = styled(Box)(() => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 16px",
}));

export const HowItSectionContainer = styled(Box)(({ theme }) => ({
  background: "#f9fafb",
  padding: "80px 0",
  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
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
  color: "#f97316",
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
