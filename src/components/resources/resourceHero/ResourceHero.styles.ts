import { Box, Chip, Button, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Hero = styled(Box)(({ theme }) => ({
  backgroundColor: "#f8fafc",
  padding: "120px 24px 80px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(180deg, #f0f9ff 0%, var(--color-white) 100%)",

  [theme.breakpoints.down("md")]: {
    padding: "100px 16px 60px",
  },
}));

export const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 10,
  maxWidth: "900px",
  margin: "0 auto",
});

export const BackgroundShapes = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  pointerEvents: "none",
});

export const Shape = motion(
  styled(Box)({
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
  })
);

export const ResourceCenterChip = styled(Chip)({
  backgroundColor: "rgba(235, 123, 51, 0.08)",
  color: "var(--color-primary)",
  border: "1px solid rgba(235, 123, 51, 0.15)",
  borderRadius: "30px",
  fontWeight: 700,
  fontSize: "14px",
  marginBottom: "32px",
  padding: "4px 8px",
  "& .MuiChip-label": {
    padding: "0 12px",
  },
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "45px",
  fontWeight: 800,
  marginBottom: "20px",
  color: "var(--color-text-dark)",

  lineHeight: "50px",
  background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  // paddingBottom:"13px",
  paddingTop: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "40px",
  },
}));
export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 800,
  marginBottom: "20px",
  color: "var(--color-text-dark)",
  lineHeight: "36px",
  background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  paddingBottom: "13px",

  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
}));

export const Description = styled(Typography)(() => ({
  fontWeight: 400,
  color: "var(--color-text-light)",
  maxWidth: "700px",
  margin: "0 auto 48px",
  fontSize: "18px",
  lineHeight: "1.6",
  opacity: 0.8,
}));

export const SearchWrapper = styled(Box)(() => ({
  maxWidth: 600,
  margin: "0 auto",
  position: "relative",
  backgroundColor: "var(--color-white)",
  borderRadius: "100px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
  padding: "6px 6px 6px 16px",
  display: "flex",
  alignItems: "center",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover, &:focus-within": {
    boxShadow:
      "0 25px 30px -5px rgba(0, 0, 0, 0.08), 0 15px 15px -5px rgba(0, 0, 0, 0.04)",
    transform: "translateY(-2px)",
    borderColor: "var(--color-primary)",
  },
}));

export const StyledInput = styled(InputBase)({
  flex: 1,
  marginLeft: "12px",
  fontSize: "16px",
  "& input::placeholder": {
    color: "#64748b",
    opacity: 1,
  },
});

export const SearchButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  color: "white",
  padding: "10px 28px",
  borderRadius: "100px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "var(--color-primary-hover)",
  },
});
