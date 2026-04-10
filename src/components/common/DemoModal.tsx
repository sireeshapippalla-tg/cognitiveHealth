import React from "react";
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useDemo } from "../../context/DemoContext";
import logo from "../../assets/cognitiveLogo.svg";

const DemoModal: React.FC = () => {
  const { isDemoModalOpen, closeDemoModal } = useDemo();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // HubSpot Meeting Link - Uses VITE_HUBSPOT_MEETING_HANDLE from .env
  const meetingHandle = import.meta.env.VITE_HUBSPOT_MEETING_HANDLE;
  const hubspotMeetingUrl = `https://meetings.hubspot.com/${meetingHandle}?embed=true`;

  return (
    <Dialog
      open={isDemoModalOpen}
      onClose={closeDemoModal}
      maxWidth="lg"
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(10, 15, 30, 0.4)",
            backdropFilter: "blur(12px)",
          },
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
          outline: "none",
        },
      }}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <AnimatePresence>
        {isDemoModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Box
              sx={{
                position: "relative",
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                borderRadius: isMobile ? "24px" : "32px",
                padding: isMobile ? 2 : 4,
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                display: "flex",
                flexDirection: "column",
                maxHeight: "95vh",
                minHeight: "auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -2,
                  zIndex: -1,
                  background: "linear-gradient(45deg, var(--color-text-blue), var(--color-green), var(--color-primary), var(--color-text-blue))",
                  borderRadius: "34px",
                  opacity: 0.4,
                  filter: "blur(8px)",
                },
              }}
            >
              {/* Close Button */}
              <Box sx={{ position: "absolute", right: 16, zIndex: 10 }}>
                <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    onClick={closeDemoModal}
                    sx={{
                      width: 40,
                      height: 40,
                      background: "var(--color-white)",
                      color: "#1e293b",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      border: "2px solid var(--color-white)",
                      "&:hover": { 
                        color: "var(--color-primary-dark)",
                        background: "var(--color-white)",
                      },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </motion.div>
              </Box>

              {/* Header Branding */}
              <Box mb={3} textAlign="center">
                <Box
                  component="img"
                  src={logo}
                  alt="CognitiveHealth Logo"
                  sx={{ height: 40, mb: 1, mx: "auto", display: "block" }}
                />
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={900}
                  color="#1e293b"
                  gutterBottom
                >
                  Schedule Your Personalized Demo
                </Typography>
                <Typography variant="body1" sx={{ color: "#64748b", maxWidth: 500, mx: "auto" }}>
                  Select a date and time from the calendar below to see the iCAN™ Platform in action.
                </Typography>
              </Box>

              {/* HubSpot Meetings Embed Widget */}
              <Box
                sx={{
                  width: "100%",
                  height: isMobile ? "600px" : "800px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <iframe
                  src={hubspotMeetingUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: "none" }}
                  title="HubSpot Meetings"
                />
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default DemoModal;
