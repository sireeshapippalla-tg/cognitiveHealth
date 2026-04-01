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
      // Simulate API call
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
              background: "linear-gradient(45deg, #4f8dfd, #3b82f6, #6366f1, #4f8dfd)",
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
                  background: "#fff",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid #fff",
                  "&:hover": {
                    background: "#fff",
                    color: "#ef4444",
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>

          <Box mb={4} textAlign="center">
            <Typography variant="h5" fontWeight={900} color="#1e293b" gutterBottom>
              Get the Transformation Roadmap
            </Typography>
            <Typography variant="body1" color="#64748b">
              Enter your work email and we'll send you our complete guide to intelligent revenue cycle automation.
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
              sx={{ color: "#94a3b8", mt: 1.5, display: "block", textAlign: "center" }}
            >
              No spam, just the insights you need for clinical and financial excellence.
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
                disabled={loading || !email}
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
                {loading ? "Processing..." : "Get the Guide"}
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};

export default ImplementationGuideModal;
