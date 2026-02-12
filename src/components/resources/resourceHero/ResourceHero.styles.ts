import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Hero = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff7ed",
  padding: "80px 24px 100px", // Increased padding at bottom for overlap effect if needed, but design looks clean
  textAlign: "center",
  backgroundImage: "radial-gradient(circle at top right, #fff1e0 0%, #fff7ed 40%)",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    padding: "60px 16px 80px",
  },
}));

export const Title = styled(Typography)(({ }) => ({
  fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: 600,
  marginBottom: "16px",
  color: "var(--color-text-dark)",
}));

export const Subtitle = styled(Typography)(({ }) => ({
  fontFamily: "Inter",
  fontWeight: 400,
  color: "var(--color-text-light)",
  maxWidth: "600px",
  margin: "0 auto 40px",
  fontSize: "20px",
  lineHeight: "150%",
}));

export const SearchWrapper = styled(Box)(({theme}) => ({
  maxWidth: 520,
  margin: "0 auto",
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "100px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #ECECEC",
  transition: "all 0.2s ease",
  "&:hover, &:focus-within": {
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
      borderColor: theme.palette.primary.main,
  }
}));
