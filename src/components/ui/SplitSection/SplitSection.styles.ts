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

export const Eyebrow = styled(Typography)({
  fontSize: "14px",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "12px",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#111827",
  marginBottom: "16px",

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

export const Description = styled(Typography)({
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#6b7280",
  marginBottom: "32px",
});

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",

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
