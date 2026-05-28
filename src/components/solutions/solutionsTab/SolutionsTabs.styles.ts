import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const BlogContainer = styled("div")(() => ({
  // padding: "0px 80px",
}));

export const StickyTabsWrapper = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 65, // Secure overlap for header shadow/border
  zIndex: 1000,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // marginTop: "40px",
  padding: "16px 0", // Added top padding back for whitespace
  background: "var(--color-white)",
  backdropFilter: "blur(18px)",
  borderBottom: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  transition: "all 0.3s ease",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
    padding: "8px 0 12px 0",
    top: 54,
  },
}));

export const TabsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "12px",
  padding: "8px",
  borderRadius: "32px",
  background: "rgba(107, 191, 89, 0.05)",
  border: "1px solid rgba(107, 191, 89, 0.15)",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  maxWidth: "96%",
  position: "relative",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    padding: "6px",
    gap: "6px",
    borderRadius: "20px",
  },
}));

export const TabButton = styled(motion.button)<{
  $active: boolean;
}>(({ theme, $active }) => ({
  position: "relative",
  padding: "8px 16px",
  borderRadius: "24px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 900,
  fontSize: "15px",
  whiteSpace: "nowrap",
  flexShrink: 0,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  // textTransform: "uppercase",
  letterSpacing: "1px",
  color: $active ? "var(--color-white)" : "var(--color-gray-600)",
  display: "flex",
  alignItems: "center",
  gap: "10px",

  "&:hover": {
    background: !$active ? "rgba(244, 122, 32, 0.05)" : "transparent",
    transform: !$active ? "translateY(-2px)" : "none",
  },

  [theme.breakpoints.down("md")]: {
    padding: "12px 20px",
    fontSize: "13px",
  },
}));

export const ActiveBackground = styled(motion.div)({
  position: "absolute",
  inset: 0,
  borderRadius: "24px",
  background: "linear-gradient(135deg, #709cd0 0%, #4A90E2 100%)",
  boxShadow: "0 10px 30px rgba(112,156,208,0.4)",
  zIndex: 0,
});

export const TabText = styled("span")<{
  $active: boolean;
}>(() => ({
  position: "relative",
  zIndex: 1,
  fontWeight: 900,
  letterSpacing: "0.5px",
}));
