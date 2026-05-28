import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

export const StyledCard = motion(
  styled(Card)(() => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    border: "1px solid rgba(229, 231, 235, 0.5)",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transform: "translateY(-8px)",
      borderColor: "var(--color-primary)",
    },
  }))
);

export const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingTop: "60%",
  width: "100%",
  overflow: "hidden",
  background: "#f1f5f9",
});

export const CardImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s ease",
  ".MuiCard-root:hover &": {
    transform: "scale(1.08)",
  },
});

export const PlayIconOverlay = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60px",
  height: "60px",
  backgroundColor: "rgba(235, 123, 51, 0.9)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-white)",
  zIndex: 2,
  boxShadow: "0 0 20px rgba(235, 123, 51, 0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  ".MuiCard-root:hover &": {
    transform: "translate(-50%, -50%) scale(1.1)",
    backgroundColor: "var(--color-primary-hover)",
  },
});

export const CategoryChip = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "var(--color-primary)",
  fontWeight: 700,
  fontSize: "12px",
  height: "28px",
  backdropFilter: "blur(8px)",
  zIndex: 2,
});

export const DurationBadge = styled(Box)({
  position: "absolute",
  bottom: "16px",
  right: "16px",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  color: "var(--color-white)",
  padding: "4px 10px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 600,
  backdropFilter: "blur(4px)",
  zIndex: 2,
});

export const CardContent = styled(Box)({
  padding: "24px 28px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "12px",
});

export const CardTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 800,
  lineHeight: "1.4",
  color: "var(--color-text-dark)",
  letterSpacing: "-0.02em",
  ".MuiCard-root:hover &": {
    color: "var(--color-primary)",
  },
});

export const CardDescription = styled(Typography)({
  fontSize: "15px",
  lineHeight: "1.6",
  color: "var(--color-gray-500)",
  marginBottom: "16px",
});

export const ActionButton = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "15px",
  fontWeight: 700,
  color: "var(--color-primary)",
  marginTop: "auto",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    gap: "10px",
  },
});
