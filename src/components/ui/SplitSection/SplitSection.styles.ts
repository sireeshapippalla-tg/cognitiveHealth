import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface GridProps {
  reverse?: boolean;
}

export const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "64px 24px",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));
export const Highlight = styled("span")(() => ({
  fontWeight: 800,
  background: "#EB7724",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Grid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})<GridProps>(({ theme, reverse }) => ({
  display: "grid",
  gridTemplateColumns: reverse ? "1.3fr 1.1fr" : "1.1fr 1.3fr",
  alignItems: "center",
  gap: "64px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "40px",
    textAlign: "center",
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  maxWidth: "520px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    margin: "0 auto",
  },
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: 600,
  color:  "var(--color-text-dark)",
  marginBottom: "20px",
  lineHeight: "50px",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
    lineHeight: "35px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "23px",
  fontWeight: 600,
  lineHeight: "32px",
  color: "background: #0E0E0E",
  marginBottom: "16px",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "35px",
  },
}));

export const Description = styled(Typography)({
  fontSize: "18px",
  lineHeight: 1.6,
  color:  "var(--color-text-light)",
  marginBottom: "32px",
  fontWeight: 400,
});

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const Image = styled("img")({
  width: "100%",
  maxWidth: "700px",
  height: "auto",
});
