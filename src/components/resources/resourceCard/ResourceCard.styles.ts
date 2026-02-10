import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  border: "1px solid #E5E7EB",
  boxShadow: "none",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-4px)",
    borderColor: "transparent",
    "& .read-more-link": {
      color: "var(--color-primary-hover)",
      gap: "8px",
    },
  },
}));

export const CardImageWrapper = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  width: "100%",
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

export const CategoryChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "12px",
  height: "28px",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  "& .MuiChip-label": {
    padding: "0 12px",
  },
}));

export const CardContent = styled(Box)({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "12px",
});

export const MetaInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "13px",
  color: theme.palette.text.secondary,
  marginBottom: "4px",
  "& svg": {
    fontSize: "16px",
    color: theme.palette.text.secondary,
  },
}));

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
  marginBottom: "16px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  flexGrow: 1,
}));

export const ReadMoreLink = styled(Link)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "15px",
  fontWeight: 600,
  color: "var(--color-primary)", // Updated to use primary color
  textDecoration: "none",
  marginTop: "auto",
  transition: "all 0.2s ease",

}));
