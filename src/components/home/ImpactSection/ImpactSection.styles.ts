import { Box, styled } from "@mui/material";

interface SectionContainerProps {
  bg?: string;
}

export const SectionContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bg",
})<SectionContainerProps>(({ theme, bg }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  backgroundColor: bg || "#f9fafb",

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
