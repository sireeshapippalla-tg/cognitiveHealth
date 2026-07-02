import React from "react";
import { Fade, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useDemo } from "../../context/DemoContext";
import logo from "../../assets/cognitiveLogo.svg";
import {
  StyledDialog,
  ModalContainer,
  CloseButtonWrapper,
  StyledCloseButton,
  LogoImage,
  HeaderBranding,
  TitleText,
  SubtitleText,
  WidgetContainer,
} from "./DemoModal.style";

const DemoModal: React.FC = () => {
  const { isDemoModalOpen, closeDemoModal } = useDemo();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // HubSpot Meeting Link - Uses VITE_HUBSPOT_MEETING_HANDLE from .env
  const meetingHandle = import.meta.env.VITE_HUBSPOT_MEETING_HANDLE;
  const hubspotMeetingUrl = `https://meetings.hubspot.com/${meetingHandle}?embed=true`;

  return (
    <StyledDialog
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
            <ModalContainer>
              {/* Close Button */}
              <CloseButtonWrapper>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <StyledCloseButton
                    onClick={closeDemoModal}
                    aria-label="Close"
                  >
                    <CloseIcon fontSize="small" />
                  </StyledCloseButton>
                </motion.div>
              </CloseButtonWrapper>

              {/* Header Branding */}
              <HeaderBranding>
                <LogoImage
                  src={logo}
                  alt="CognitiveHealth Logo"
                />
                <TitleText
                  variant={isMobile ? "h5" : "h4"}
                  gutterBottom
                >
                  Schedule Your Personalized Demo
                </TitleText>
                <SubtitleText
                  variant="body1"
                >
                  Select a date and time from the calendar below to see the
                  iCAN™ Platform in action.
                </SubtitleText>
              </HeaderBranding>

              {/* HubSpot Meetings Embed Widget */}
              <WidgetContainer>
                <iframe
                  src={hubspotMeetingUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: "none" }}
                  title="HubSpot Meetings"
                />
              </WidgetContainer>
            </ModalContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledDialog>
  );
};

export default DemoModal;
