import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  // padding: "60px 24px",
  backgroundColor:"#f9fafb",
  // marginTop:"40px",
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(2)}`,
  },
}));
export const Wrapper = styled(Box)(({ theme }) => ({
 
  padding: `${theme.spacing(4)}`,
  textAlign: "center",
//   maxWidth: "1100px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(2)}`,
  },
}));