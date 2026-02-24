import {
  Dialog,
  DialogContent,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  name: string;
  designation?: string;
  image?: string;
  description?: string;
}

const TeamMemberModal: React.FC<Props> = ({
  open,
  onClose,
  name,
  designation,
  image,
  description,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 4, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>

        <Box display="flex" alignItems="center" gap={3} mb={1}>
          <Avatar src={image} alt={name} sx={{ width: 100, height: 100 }} />
          <Box>
            <Typography variant="h6" fontWeight={700}>
              {name}
            </Typography>
            <Typography color="primary" fontWeight={500}>
              {designation}
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            lineHeight: 1.8,
            color: "text.secondary",

            fontSize: 16,
          }}
        >
          {description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
