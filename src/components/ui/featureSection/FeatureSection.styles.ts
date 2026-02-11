import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SectionProps {
  background?: string;
}

export const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== "background",
})<SectionProps>(({ theme, background }) => ({
  width: "100%",
  background: background ?? "#ffffff",
  padding: "64px 24px",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px",
  },
}));

export const Inner = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  textAlign: "center",
  color: "var(--color-text-dark)",
  lineHeight: '48px',
  marginBottom: "8px",

  "& span": {
    color: "#ea580c",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "15px",
  color: "var(--color-text-light)",
  maxWidth: "720px",
  margin: "0 auto 48px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "32px",
  },
}));
