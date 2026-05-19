import {
  Dialog,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useSendImplementationProcessPdfMutation } from "../../../services/emailApi";

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
      // Prepare FormData
      const formData = new FormData();
      formData.append("toEmail", email);

      // Send to Backend via RTK Query mutation
      await sendImplementationPdf(formData).unwrap();

      toast.success("Guide sent successfully. Please check your inbox.");
      setEmail("");
      onClose();
    } catch (err: any) {
      console.error(err);
      toast.error(err.data?.error || err.message || "Failed to send guide. Please try again.");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            padding: 5,
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "visible",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -2,
              zIndex: -1,
              background: "linear-gradient(45deg, var(--color-primary-hover), var(--color-text-blue), var(--color-green), var(--color-primary))",
              borderRadius: "34px",
              opacity: 0.4,
              filter: "blur(8px)",
            },
          }}
        >
          {/* Close Button - Detached */}
          <Box
            sx={{
              position: "absolute",
              top: -18,
              right: -18,
              zIndex: 10,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={onClose}
                sx={{
                  width: 40,
                  height: 40,
                  background: "var(--color-white)",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid var(--color-white)",
                  "&:hover": {
                    background: "var(--color-white)",
                    color: "var(--color-primary)",
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>

          <Box mb={4} textAlign="center">
            <Typography variant="h5" fontWeight={900} color="#1e293b" gutterBottom>
              Get the Implementation Guide
            </Typography>
            <Typography variant="body1" color="#64748b">
              Enter your work email and we’ll send you the Implementation Guide.
            </Typography>
          </Box>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Work Email Address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  backgroundColor: "rgba(248, 250, 252, 0.8)",
                  "& fieldset": {
                    borderColor: "rgba(226, 232, 240, 1)",
                  },
                },
              }}
            />
            
            <Typography
              variant="caption"
              sx={{ color: "var(--color-gray-600)", mt: 1.5, display: "block", textAlign: "center" }}
            >
             We respect your privacy. No spam.
            </Typography>

            <Box mt={4} display="flex" gap={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={onClose}
                sx={{
                  borderRadius: "16px",
                  py: 1.8,
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "#e2e8f0",
                  color: "#64748b",
                  "&:hover": {
                    borderColor: "#cbd5e1",
                    backgroundColor: "#f8fafc",
                  },
                }}
              >
                Not now
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading || !email}
                sx={{
                  borderRadius: "16px",
                  py: 1.8,
                  textTransform: "none",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #F47A20 0%, #ff8c3a 100%)",
                  boxShadow: "0 10px 20px rgba(244, 122, 32, 0.3)",
               
                  "&:hover": {
                    background: "linear-gradient(135deg, #ff8c3a 0%, #f47a20 100%)",
                    boxShadow: "0 12px 24px rgba(244, 122, 32, 0.4)",
                  },
                }}
              >
                {isLoading ? "Processing..." : "Send Guide"}
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};

export default ImplementationGuideModal;
