import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  // maxWidth: "1400px",
  margin: "0 auto",
  padding: "30px 80px",
  backgroundColor: "#f9fafb",
  // marginTop:"40px",
  [theme.breakpoints.down("md")]: {
    padding: "16px",
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  borderRadius: "20px",
  // padding: "32px",
  textAlign: "center",
  // maxWidth: "1100px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

export const StepsCard = styled(Box)({
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  // border: "1px solid #ECECEC",
  // padding: "28px 24px",
  marginBottom: "40px",
});

export const StepsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "30px 80px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "32px",
    padding:"30px 20px"
  },
}));

export const ArrowBox = styled(Box)(({ theme }) => ({
  color: "#EB7724",
  display: "flex",
  alignItems: "center",
  margin: "0 12px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "16px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
