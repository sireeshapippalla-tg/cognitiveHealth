import { Box, Chip, Button, InputBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Hero = styled(Box)(({ theme }) => ({
  backgroundColor: "#f8fafc",
  padding: "120px 24px 40px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(180deg, #f0f9ff 0%, var(--color-white) 100%)",

  [theme.breakpoints.down("md")]: {
    padding: "100px 16px 30px",
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

export const ShapeOne = motion.create(
  styled(Box)({
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
    top: "-10%",
    left: "-10%",
    width: "40%",
    height: "60%",
    background: "radial-gradient(circle, rgba(235, 123, 51, 0.15) 0%, transparent 70%)",
  })
);

export const ShapeTwo = motion.create(
  styled(Box)({
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
    bottom: "-20%",
    right: "-10%",
    width: "50%",
    height: "70%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
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
  color: "#0f172a",
  lineHeight: "50px",
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
  color: "#0f172a",
  lineHeight: "36px",
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
  margin: "0 auto 8px",
  fontSize: "18px",
  lineHeight: "1.6",
  opacity: 0.8,
}));

export const SearchWrapper = styled(Box)(({ theme }) => ({
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
  "& svg": {
    color: "#94a3b8",
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 4px 4px 10px",
  },
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  marginLeft: "12px",
  fontSize: "16px",
  minWidth: 0,
  "& input": {
    minWidth: 0,
    width: "100%",
    paddingRight: "8px",
  },
  "& input::placeholder": {
    color: "#64748b",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "6px",
    fontSize: "14px",
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  color: "white",
  padding: "10px 28px",
  borderRadius: "100px",
  fontWeight: 600,
  textTransform: "none",
  whiteSpace: "nowrap",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "var(--color-primary-hover)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px 16px",
    fontSize: "14px",
  },
}));
