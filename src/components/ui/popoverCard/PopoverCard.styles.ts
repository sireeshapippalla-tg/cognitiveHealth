import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: "14px",
  backgroundColor: "#FFF7ED",
  transition: "all 0.25s ease",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(249,115,22,0.15)",
    transform: "translateY(-2px)",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  flex: 1,
}));

export const IconWrapper = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: "12px",
  backgroundColor: "#F97316",
  // backgroundColor:"--var(--color-primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});