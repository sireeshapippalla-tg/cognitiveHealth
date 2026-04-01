import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const StyledDialog = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  borderRadius: "32px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "visible",
  padding: theme.spacing(1),
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -2,
    zIndex: -1,
    background: "linear-gradient(45deg, #3b82f6, #6366f1, #a855f7, #ec4899)",
    borderRadius: "34px",
    opacity: 0.7,
    filter: "blur(8px)",
  },
}));

export const CloseButtonWrapper = styled(motion.div)({
  position: "absolute",
  top: -20,
  right: -20,
  zIndex: 10,
});

export const VideoWrapper = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // 16:9 Aspect Ratio
  width: "100%",
  borderRadius: "24px",
  overflow: "hidden",
  background: "#000",
  boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
});

export const Iframe = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
});
