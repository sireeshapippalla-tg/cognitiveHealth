import { styled, Box, Typography, Container } from "@mui/material";

export const SectionContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
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
  maxWidth: 600,
  margin: "0 auto",
  marginBottom: theme.spacing(6),
  fontSize: 16,

  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));
export const SectionContainerAdvisoy = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

export const GridWrapperAdvisory = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const GridWrapper = styled(Box)(() => ({
  width: "100%",
}));
