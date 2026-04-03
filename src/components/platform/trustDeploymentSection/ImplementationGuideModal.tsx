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

import { useSendImplementationProcessPdfMutation } from "../../../services/apiSlice";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ImplementationGuideModal: React.FC<Props> = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [sendImplementationPdf, { isLoading }] = useSendImplementationProcessPdfMutation();

  const handleSubmit = async () => {
    if (!email) return;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // 1. Fetch the placeholder PDF file
      const pdfPath = "/National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf";
      const response = await fetch(pdfPath);
      const blob = await response.blob();

      // 2. Prepare FormData
      const formData = new FormData();
      formData.append("email", email);
      formData.append("file", blob, "our-implementation-process.pdf");

      // 3. Send to Backend
      await sendImplementationPdf(formData).unwrap();

      toast.success("Guide sent successfully. Please check your inbox.");
      setEmail("");
      onClose();
    } catch (err: any) {
      console.error(err);
      toast.error(err.data?.error || "Failed to send guide. Please try again.");
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
        {/* <DialogTitle>Get the Implementation Guide</DialogTitle> */}
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

          <Button variant="contained" onClick={handleSubmit} disabled={isLoading || !email}>
            {isLoading ? "Sending..." : "Send Guide"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImplementationGuideModal;
