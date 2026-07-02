import { styled } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";

export const StyledSectionContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  backgroundColor: "var(--color-bg-lite)",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(6),
  },
}));

export const SectionHeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1.5),
  fontSize: "28px",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const SectionHeaderSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 600,
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  fontSize: "15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const GridContainerWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "0px",
  },
}));
