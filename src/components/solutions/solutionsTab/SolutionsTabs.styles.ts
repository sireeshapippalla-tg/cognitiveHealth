import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const BlogContainer = styled("div")(({ theme }) => ({
  padding: "30px 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const StickyTabsWrapper = styled("div")({
  position: "sticky",
  top: 70,
  zIndex: 1200,
  display: "flex",
  justifyContent: "center",
  padding: "16px 0",
  background: "#ffffff",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
});

export const TabsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "8px",
  padding: "6px",
  borderRadius: "999px",
  background: "#e5e7eb",


   overflowX: "auto",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    padding: "6px 12px",
  }
}));

// export const TabButton = styled(motion.button)<{
//   $active: boolean;
// }>(() => ({
//   position: "relative",
//   padding: "10px 18px",
//   borderRadius: "999px",
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontWeight: 600,
//   fontSize: "14px",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
// }));

export const TabButton = styled(motion.button)<{
  $active: boolean;
}>(({ theme }) => ({
  position: "relative",
  padding: "10px 18px",
  borderRadius: "999px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "14px",
  whiteSpace: "nowrap",   // important
  flexShrink: 0,          // important
  transition: "all 0.3s ease",

  [theme.breakpoints.down("md")]: {
    padding: "8px 14px",
    fontSize: "13px",
  },
}));

export const ActiveBackground = styled(motion.div)({
  position: "absolute",
  inset: 0,
  borderRadius: "999px",
  background: "var(--color-text-blue)",
  boxShadow: "0 8px 24px rgba(37,99,235,0.45)",
  zIndex: 0,
});

export const TabText = styled("span")<{
  $active: boolean;
}>(({ $active }) => ({
  position: "relative",
  zIndex: 1,
  color: $active ? "#ffffff" : "#6b7280",
  transition: "color 0.3s ease",
}));