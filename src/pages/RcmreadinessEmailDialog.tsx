import React from "react";
import {
  Dialog,
  TextField,
  CircularProgress,
  IconButton,
  Box,
  Fade,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { PrimaryButton } from "./Rcmreadiness.style";

interface RcmreadinessEmailDialogProps {
  open: boolean;
  onClose: () => void;
  email: string;
  setEmail: (val: string) => void;
  isProcessing: boolean;
  isGeneratingPdf: boolean;
  isSending: boolean;
  onSend: () => void;
  onPreviewPdf?: () => void;
}

export const RcmreadinessEmailDialog: React.FC<RcmreadinessEmailDialogProps> = ({
  open,
  onClose,
  email,
  setEmail,
  isProcessing,
  isGeneratingPdf,
  isSending,
  onSend,
  onPreviewPdf,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => !isProcessing && onClose()}
      maxWidth="xs"
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
            padding: 4,
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "visible",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -2,
              zIndex: -1,
              background: "linear-gradient(45deg, var(--color-text-blue), var(--color-green), var(--color-primary), var(--color-text-blue))",
              borderRadius: "34px",
              opacity: 0.4,
              filter: "blur(8px)",
            },
          }}
        >
          <Box sx={{ position: "absolute", top: -16, right: -16, zIndex: 10 }}>
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                aria-label="Close dialog"
                onClick={onClose}
                disabled={isProcessing}
                sx={{
                  width: 40,
                  height: 40,
                  background: "var(--color-white)",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid var(--color-white)",
                  "&:hover": { color: "var(--color-primary-dark)" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>

          <Box mb={3} textAlign="center">
            <Typography variant="h5" fontWeight={900} color="#1e293b" gutterBottom>
              Send Assessment Report
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748b" }}>
              Enter the email address where you would like to receive your personalized roadmap.
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Work Email Address"
            type="email"
            placeholder="example@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "rgba(248, 250, 252, 0.8)",
              },
            }}
          />

          <Box mt={4} display="flex" flexDirection="column" gap={2}>
            <PrimaryButton
              variant="contained"
              fullWidth
              disabled={!email || isProcessing}
              onClick={onSend}
              startIcon={isProcessing ? <CircularProgress size={16} color="inherit" /> : null}
              sx={{
                py: 1.8,
                borderRadius: "16px",
                fontWeight: 800,
                textTransform: "none",
              }}
            >
              {isGeneratingPdf ? "Generating PDF..." : isSending ? "Sending Report..." : "Send Assessment Report"}
            </PrimaryButton>

            {onPreviewPdf && (
              <Button
                fullWidth
                variant="text"
                sx={{ textTransform: "none", color: "#64748b", fontWeight: 600 }}
                onClick={onPreviewPdf}
              >
                {/* Preview PDF */}
              </Button>
            )}
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};
