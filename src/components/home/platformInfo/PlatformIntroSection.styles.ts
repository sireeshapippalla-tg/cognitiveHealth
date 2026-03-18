import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "160px 40px",
  margin: "0 auto",
  backgroundColor: "var(--color-bg-main)",
  [theme.breakpoints.down("lg")]: {
    padding: "120px 40px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "100px 20px",
  },
}));

export const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  textAlign: "center",
}));