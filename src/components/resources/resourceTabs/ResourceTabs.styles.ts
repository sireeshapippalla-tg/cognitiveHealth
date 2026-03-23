import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export const BlogContainer = styled(Box)(({ theme }) => ({
  padding: "60px 80px",
  backgroundColor: "#ffffff",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
  },
}));

export const StickyTabsWrapper = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 65,
  zIndex: 1000, 
  width: "100%", 
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)", 
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  padding: "16px 80px",
  overflow: "visible",
  [theme.breakpoints.down("md")]: {
    padding: "16px 20px",
    flexDirection: "column",
    gap: "16px",
  },
}));

export const TabsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "4px",
  padding: "4px",
  borderRadius: "100px",
  background: "#f1f5f9",
  border: "1px solid rgba(0,0,0,0.03)",
  maxWidth: "100%",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const TabButton = styled(motion.button)<{
  $active: boolean;
}>(({ theme }) => ({
  position: "relative",
  padding: "10px 20px",
  borderRadius: "100px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "14px",
  whiteSpace: "nowrap",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  outline: "none",
  WebkitTapHighlightColor: "transparent",
  transition: "color 0.3s ease",

  [theme.breakpoints.down("md")]: {
    padding: "8px 16px",
    fontSize: "13px",
  },
}));

export const ActiveBackground = styled(motion.div)({
  position: "absolute",
  inset: 0,
  borderRadius: "100px",
  background: "var(--color-primary)",
  boxShadow: "0 4px 12px rgba(235, 123, 51, 0.3)",
  zIndex: 0,
});

export const TabText = styled("span")<{
  $active: boolean;
}>(({ $active }) => ({
  position: "relative",
  zIndex: 1,
  color: $active ? "#ffffff" : "#64748b",
  transition: "color 0.3s ease",
}));

export const FilterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});
