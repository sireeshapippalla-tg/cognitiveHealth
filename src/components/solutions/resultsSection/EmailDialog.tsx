import React from "react";
import {
  Dialog,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

interface EmailDialogProps {
  open: boolean;
  onClose: () => void;
  email: string;
  setEmail: (val: string) => void;
  isLoading: boolean;
  onSend: () => void;
}

export const EmailDialog: React.FC<EmailDialogProps> = ({
  open,
  onClose,
  email,
  setEmail,
  isLoading,
  onSend,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(10, 15, 30, 0.4)",
            backdropFilter: "blur(8px)",
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
              background:
                "linear-gradient(45deg, var(--color-primary-hover), var(--color-text-blue), var(--color-green), var(--color-primary))",
              borderRadius: "34px",
              opacity: 0.4,
              filter: "blur(8px)",
            },
          }}
        >
          {/* Close Button - Detached */}
          <Box
            sx={{ position: "absolute", top: -16, right: -16, zIndex: 10 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={onClose}
                aria-label="Close"
                sx={{
                  width: 40,
                  height: 40,
                  background: "var(--color-white)",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid var(--color-white)",
                  "&:hover": { color: "var(--color-primary-hover)" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>

          <Box mb={3} textAlign="center">
            <Typography
              variant="h5"
              fontWeight={900}
              color="#1e293b"
              gutterBottom
            >
              Download Package
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748b" }}>
              Enter your work email and we'll send the complete results
              package instantly.
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Work Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "rgba(248, 250, 252, 0.8)",
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            disabled={!email || isLoading}
            onClick={onSend}
            sx={{
              mt: 4,
              py: 2,
              borderRadius: "16px",
              background: "var(--color-primary)",
              fontWeight: 800,
              boxShadow: "0 10px 20px rgba(244, 122, 32, 0.3)",
              "&:hover": { background: "var(--color-primary-dark)" },
            }}
          >
            {isLoading ? "Sending..." : "Send Report"}
          </Button>
        </Box>
      </motion.div>
    </Dialog>
  );
};
