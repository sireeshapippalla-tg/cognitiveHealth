import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",

  // marginTop:"40px",
  [theme.breakpoints.down("md")]: {
    padding: "60px 16px",
  },
}));
export const Wrapper = styled(Box)(({ theme }) => ({
 
  padding: "64px 32px",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: "48px 20px",
  },
}));