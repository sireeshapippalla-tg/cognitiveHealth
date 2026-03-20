import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 10),
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "60px 20px",
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  // UNIQUE BACKGROUND: Gradient with brand colors
  background: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
  padding: "120px 80px",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "80px 20px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-20%",
    width: "100%",
    height: "200%",
    background: "radial-gradient(circle, rgba(244, 122, 32, 0.08), transparent 70%)",
    zIndex: 0,
    pointerEvents: "none"
  }
}));

export const MeasureWrapper = styled(Box)(() => ({
  margin: "0 auto",
  position: "relative",
  zIndex: 1
}));

export const HowItSectionContainer = styled(Box)(({ theme }) => ({
  background: "#F9FAFB",
  padding: "120px 0",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "80px 20px",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(107, 191, 89, 0.05), transparent 70%)",
    zIndex: 0
  }
}));

export const HowItWrapper = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  padding: "16px",
  textAlign: "center",
  marginTop: "30px",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },
}));

export const StepsCard = styled(Box)(() => ({
  marginTop: 60,
  position: "relative"
}));

export const StepsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: 40,
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
     flexDirection: "column",
     alignItems: "center"
  }
}));

export const ArrowBox = styled(Box)(({ theme }) => ({
  color: "#F47A20",
  display: "flex",
  alignItems: "center",
  marginTop: "40px",
  opacity: 0.4,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ButtonsRow = styled(Box)(() => ({
  marginTop: 60,
  display: "flex",
  justifyContent: "center",
  gap: 24,
  flexWrap: "wrap",
}));

export const IconWrapper = styled("div")({
  width: 64,
  height: 64,
  border: "1.5px solid rgba(244, 122, 32, 0.2)",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#F47A20",
  transition: "all 0.3s ease",
  "& svg": { fontSize: "2rem" },
  "&:hover": {
     background: "rgba(244, 122, 32, 0.1)",
     borderColor: "#F47A20"
  }
});