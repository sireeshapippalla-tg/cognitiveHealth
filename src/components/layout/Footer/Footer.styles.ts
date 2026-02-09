import { Box, Stack, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterRoot = styled(Box)(({ theme }) => ({
  backgroundColor: "#2c2c2c",
  color: "#ffffff",
  padding: "72px 24px 32px",

  [theme.breakpoints.down("md")]: {
    padding: "48px 16px 24px",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  padding: "0 24px",

  [theme.breakpoints.up("md")]: {
    padding: "0",
  },
}));

/* BRAND */
export const Brand = styled(Box)(({ theme }) => ({
  maxWidth: 300,

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const Logo = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 12,
});

export const LogoWrapper = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 14px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  marginBottom: "16px",

  /* optional subtle shadow like design */
  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
});


export const Description = styled(Typography)({
  fontSize: 14,
  lineHeight: 1.6,
  color: "#cfd3d8",
  marginBottom: 20,
});

/* SOCIAL */
export const Social = styled(Stack)({
  "& svg": {
    color: "#f97316", // orange
    fontSize: 20,
    cursor: "pointer",
    transition: "opacity 0.2s ease",
  },

  "& svg:hover": {
    opacity: 0.75,
  },
});

/* HEADINGS */
export const Heading = styled(Typography)({
  fontSize: 15,
  fontWeight: 600,
  marginBottom: 16,
  color: "#ffffff",
});

/* LIST */
export const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const ListItem = styled("li")({
  fontSize: 14,
  color: "#cfd3d8",
  marginBottom: 5,
  cursor: "pointer",

  "&:hover": {
    color: "#f97316",
  },
});

/* DIVIDER */
export const FooterDivider = styled(Divider)({
  margin: "40px 0 24px",
  backgroundColor: "#4b4b4b",
});

/* BOTTOM */
export const Bottom = styled(Stack)(({ theme }) => ({
  fontSize: 14,
  color: "#cfd3d8",

  "& a": {
    color: "#f97316",
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    gap: 12,
  },
}));
