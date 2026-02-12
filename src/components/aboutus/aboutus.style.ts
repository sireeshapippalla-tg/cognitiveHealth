import { styled, Box, Typography, Container } from "@mui/material";

// export const SectionContainer = styled("div")(() => ({
//   // paddingTop: theme.spacing(5),
//   // paddingBottom: theme.spacing(10),
//   backgroundColor:"var(--color-bg-lite)"
// }));

export const SectionContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  backgroundColor: "var(--color-bg-lite)",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(10),
  },
}));
export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(2),
  fontSize: 32,

  [theme.breakpoints.down("md")]: {
    fontSize: 26,
  },
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 750,
  margin: "0 auto",
  marginBottom: theme.spacing(6),
  fontSize: 16,

  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));
export const SectionContainerAdvisoy = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const GridWrapperAdvisory = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
export const GridWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0px 60px",

  [theme.breakpoints.down("md")]: {
    padding: "0px", // tablet & mobile
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0px", // small mobile (optional)
  },
}));

