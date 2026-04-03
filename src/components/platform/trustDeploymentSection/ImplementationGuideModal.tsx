import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ImplementationGuideModal: React.FC<Props> = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    try {
      setLoading(true);

      // Replace this with your API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Guide sent successfully. Please check your inbox.");
      setEmail("");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send guide. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
         <Box
        sx={{
          background: "linear-gradient(90deg, #4F8DFD, #3B82F6)",
          color: "#fff",
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Get the Implementation Guide
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
          }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Box>

        <DialogContent>
          <Typography variant="body2" mb={2}>
            Enter your work email and we’ll send you the Implementation Guide.
          </Typography>

          <TextField
            fullWidth
            label="Work Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography
            variant="caption"
            color="text.secondary"
            mt={1}
            display="block"
          >
            We respect your privacy. No spam.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Close</Button>

          <Button variant="contained" onClick={handleSubmit} disabled={loading || !email}>
            {loading ? "Sending..." : "Send Guide"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImplementationGuideModal;
