import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Chip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  border: "1px solid #E5E7EB",
  boxShadow: "none",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-4px)",
    borderColor: "transparent",
    "& .play-button": {
      transform: "translate(-50%, -50%) scale(1.1)",
      backgroundColor: "#E88D3E",
    },
     "& .read-more-link": {
      color: "#d67d2e",
      gap: "8px",
    },
  },
});

export const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  width: "100%",
  backgroundColor: "#000",
});

export const CardImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: 0.9,
  transition: "opacity 0.3s ease",
  ".MuiCard-root:hover &": {
    opacity: 1,
  },
});

export const PlayButtonOverlay = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const PlayButton = styled(IconButton)({
  backgroundColor: "#FFFFFF",
  color: "#E88D3E", // Orange icon
  padding: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ffffff",
  },
  "& svg": {
    fontSize: "32px",
  },
});

export const CardContent = styled(Box)({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const CategoryChip = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#FFFFFF",
  color: "#0284C7", 
  fontWeight: 600,
  fontSize: "12px",
  height: "28px",
  border: "none",
  zIndex: 2,
  "& .MuiChip-label": {
    padding: "0 12px",
  },
});

export const CardTitle = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "1.4",
  color: "var(--color-text-blue)",
  // marginBottom: "8px",
  marginTop: "8px",
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "1.6",
  color: theme.palette.text.secondary,
  marginBottom: "24px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  flexGrow: 1,
}));

export const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "auto",
});

export const WatchLink = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "15px",
  fontWeight: 600,
  color: "#E88D3E", // Orange
  textDecoration: "none",
  transition: "all 0.2s ease",
});

export const DurationBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 12px",
  borderRadius: "20px",
  border: "1px solid #E5E7EB",
  color: theme.palette.text.secondary,
  fontSize: "13px",
  fontWeight: 500,
  "& svg": {
    fontSize: "16px",
  },
}));
