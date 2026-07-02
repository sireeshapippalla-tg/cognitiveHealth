import { useState, useEffect } from "react";
import { Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  VideoWrapper,
  Iframe,
  StyledDialog,
  CloseButtonWrapper,
  DialogStyled,
  CloseButton,
  VideoElement,
  LoaderOverlay,
  LoaderProgress,
} from "./VideoPlayerModal.style";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(true);
    }
  }, [open, videoUrl]);

  return (
    <DialogStyled
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
            <CloseButton
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon fontSize="small" />
            </CloseButton>
          </CloseButtonWrapper>

          <VideoWrapper>
            {type === "mp4" ? (
              <VideoElement
                src={src}
                controls
                autoPlay
              />
            ) : (
              <>
                {isLoading && (
                  <LoaderOverlay>
                    <LoaderProgress size={60} thickness={4} />
                  </LoaderOverlay>
                )}
                <Iframe
                  src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                  $loading={isLoading}
                />
              </>
            )}
          </VideoWrapper>
        </StyledDialog>
      </motion.div>
    </DialogStyled>
  );
};

export default VideoPlayerModal;

