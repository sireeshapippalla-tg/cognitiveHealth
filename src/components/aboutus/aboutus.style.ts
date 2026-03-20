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
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(6),
  },
}));
export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1.5),
  fontSize: 28,

  [theme.breakpoints.down("md")]: {
    fontSize: 22,
  },
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 600,
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  fontSize: 15,

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
  paddingLeft: " 60px",
  paddingRight: "60px",
  [theme.breakpoints.down("md")]: {
    padding: "0px",
  },
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
