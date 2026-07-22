import React from "react";
import { Fade, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import {
  StyledDialog,
  ModalBox,
  CloseBtnContainer,
  CloseBtn,
  HeaderBox,
  EmailTextField,
  SubmitButton,
  SubtitleText,
} from "./ResultsDialog.style";

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
    <StyledDialog
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
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <ModalBox>
          {/* Close Button - Detached */}
          <CloseBtnContainer>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <CloseBtn
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon fontSize="small" />
              </CloseBtn>
            </motion.div>
          </CloseBtnContainer>

          <HeaderBox>
            <Typography
              variant="h5"
              fontWeight={900}
              color="#1e293b"
              gutterBottom
            >
              Download Package
            </Typography>
            <SubtitleText variant="body2">
              Enter your work email and we'll send the complete results package
              instantly.
            </SubtitleText>
          </HeaderBox>

          <Box sx={{ textAlign: "left", mb: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#475569", ml: 1 }}>
              Work Email Address
            </Typography>
          </Box>
          <EmailTextField
            fullWidth
            placeholder="example@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <SubmitButton
            fullWidth
            variant="contained"
            disabled={!email || isLoading}
            onClick={onSend}
          >
            {isLoading ? "Sending..." : "Send Report"}
          </SubmitButton>
        </ModalBox>
      </motion.div>
    </StyledDialog>
  );
};
