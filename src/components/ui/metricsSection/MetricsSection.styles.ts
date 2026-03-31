import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* SECTION */
export const Section = styled(Box)(({ theme }) => ({
  paddingTop: "48px",
  paddingBottom: "48px",
  background: "rgb(234, 88, 12)",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    paddingTop: "64px",
    paddingBottom: "64px",
  },
}));

export const Glow = styled(motion.div)(() => ({
  position: "absolute",
  top: "10%",
  left: "5%",
  width: "300px",
  height: "300px",
  background:
    "radial-gradient(circle, rgba(107,191,89,0.1), transparent)",
  filter: "blur(80px)",
}));

export const StyledContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
}));

export const HeaderWrapper = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "64px", // same as mb={8}
}));

export const GridWrapper = styled(Grid)(() => ({
  justifyContent: "center",
}));

export const GridItem = styled(Grid)(() => ({
  display: "flex",
}));
