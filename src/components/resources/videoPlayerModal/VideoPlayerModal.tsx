import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { VideoWrapper, Iframe } from "./VideoPlayerModal.styles";

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
          <Iframe
            src={videoUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </VideoWrapper>
      )}
    </Dialog>
  );
};

export default VideoPlayerModal;
