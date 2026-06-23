import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const StyledCard = motion.create(
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
    position: "relative",
    "&:hover": {
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transform: "translateY(-8px)",
      borderColor: "var(--color-primary)",
      "& .read-more-link": {
        color: "var(--color-primary-hover)",
        gap: "8px",
      },
    },
  }))
);

export const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingTop: "60%", // 5:3 aspect ratio
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
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  zIndex: 2,
  "& .MuiChip-label": {
    padding: "0 12px",
  },
});

export const CardContent = styled(Box)({
  padding: "24px 28px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "12px",
});

export const MetaInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "13px",
  fontWeight: 500,
  color: "#64748b",
  marginBottom: "4px",
  "& svg": {
    fontSize: "16px",
    color: "#94a3b8",
  },
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    gap: "8px",
  },
}));

export const MetaItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const CardTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 800,
  lineHeight: "1.4",
  color: "#0f172a",
  letterSpacing: "-0.02em",
  transition: "color 0.3s ease",
  ".MuiCard-root:hover &": {
    color: "var(--color-primary)",
  },
});

export const CardDescription = styled(Typography)({
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#475569",
  marginBottom: "20px",
  flexGrow: 1,
});

export const ReadMoreLink = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "15px",
  fontWeight: 700,
  color: "var(--color-primary)",
  textDecoration: "none",
  marginTop: "auto",
  transition: "all 0.3s ease",
  "&:hover": {
    gap: "10px",
  },
});
