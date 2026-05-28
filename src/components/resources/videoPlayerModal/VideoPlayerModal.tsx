import { Dialog, IconButton, Box, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  VideoWrapper,
  Iframe,
  StyledDialog,
  CloseButtonWrapper,
} from "./VideoPlayerModal.styles";
import { getVideoInfo } from "../../../utils/videoUtils";
import { motion } from "framer-motion";

interface VideoPlayerModalProps {
  open: boolean;
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  open,
  videoUrl,
  onClose,
}) => {
  const { type, src } = getVideoInfo(videoUrl);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
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
        },
      }}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <StyledDialog>
          <CloseButtonWrapper
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={onClose}
              aria-label="Close"
              sx={{
                width: 44,
                height: 44,
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(4px)",
                color: "#1e293b",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  background: "var(--color-white)",
                  color: "var(--color-primary)",
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </CloseButtonWrapper>

          <VideoWrapper>
            {type === "mp4" ? (
              <Box
                component="video"
                src={src}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            ) : (
              <Iframe
                src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </VideoWrapper>
        </StyledDialog>
      </motion.div>
    </Dialog>
  );
};

export default VideoPlayerModal;
