import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { VideoWrapper, Iframe } from "./VideoPlayerModal.styles";
import { getVideoInfo } from "../../../utils/videoUtils";

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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 8, zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>

      {open && (
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
              src={src}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </VideoWrapper>
      )}
    </Dialog>
  );
};

export default VideoPlayerModal;
