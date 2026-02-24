import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

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
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Get the Implementation Guide</DialogTitle>

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

          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send Guide"}
          </Button>
      
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImplementationGuideModal;
