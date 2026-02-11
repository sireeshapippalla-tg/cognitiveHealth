import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
 
  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));
export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "32px",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));
