import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  border: "1px solid #E5E7EB",
  boxShadow: "none",
  overflow: "visible", // Important for the floating overlay
  transition: "all 0.3s ease-in-out",
  backgroundColor: "#FFFFFF",
  position: "relative",
  marginTop: "24px", // Give space for top overlay if needed, or normal flow
  "&:hover": {
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-4px)",
    borderColor: "transparent",
    "& .read-more-link": {
      color: "#E88D3E", // Orange
      gap: "8px",
    },
  },
});

// ... (other components)

export const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  width: "100%",
  borderRadius: "16px 16px 0 0",
  overflow: "hidden",
});

export const CardImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
  ".MuiCard-root:hover &": {
    transform: "scale(1.05)",
  },
});

export const MetricOverlay = styled(Box)({
  position: "absolute",
  // bottom: "0",
  left: "50%",
  bottom:"70px",
  transform: "translate(-50%, 50%)",
  width: "90%",
  backgroundColor: "#ffffff",
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, #FFFFFF 100%)",
  backdropFilter: "blur(12px)",
  borderRadius: "12px",
   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
  padding: "16px 24px",
  textAlign: "center",
  zIndex: 2,
  border: "1px solid rgba(255, 255, 255, 0.6)",
});

export const MetricValue = styled(Typography)({
  fontSize: "28px",
  fontWeight: 800,
  color: "#E88D3E", // Orange
  lineHeight: 1.2,
});

export const MetricLabel = styled(Typography)({
  fontSize: "13px",
  fontWeight: 600,
  color: "#374151", // text.primary usually, hardcoding or using theme correctly? I'll just remove theme and use a hex for now or assume default. Actually, I should keep theme if I use it.
  marginTop: "4px",
});

export const CardContent = styled(Box)({
  padding: "48px 24px 24px", // Extra padding top to account for the overlay
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "12px",
});

export const CategoryChip = styled(Chip)({
  backgroundColor: "#E0F2FE", // Light blue
  color: "#0284C7", // Darker blue text
  fontWeight: 600,
  fontSize: "12px",
  height: "28px",
  border: "none",
  alignSelf: "flex-start",
  marginBottom: "8px",
  "& .MuiChip-label": {
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  "& svg": {
    fontSize: "14px",
  }
});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "1.4",
  color: "var(--color-text-blue)",
  // marginBottom: "4px",
   display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  lineHeight: "1.6",
  color: theme.palette.text.secondary,
  // marginBottom: "16px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  flexGrow: 1,
}));

export const ReadMoreLink = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "15px",
  fontWeight: 600,
  color: "#E88D3E", // Orange
  textDecoration: "none",
  marginTop: "auto",
  transition: "all 0.2s ease",
  "&:hover": {
    color: "#d67d2e",
  },
});
