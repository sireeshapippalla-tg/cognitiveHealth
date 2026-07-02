import React from "react";
import { Fade, Typography, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import {
  StyledDialog,
  ModalBox,
  CloseBtnContainer,
  CloseBtn,
  HeaderBox,
  SubtitleText,
  EmailTextField,
  ActionsBox,
  DialogPrimaryButton,
  PreviewButton,
} from "./Rcmreadiness.style";

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

export const RcmreadinessEmailDialog: React.FC<
  RcmreadinessEmailDialogProps
> = ({
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
    <StyledDialog
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
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <ModalBox>
          <CloseBtnContainer>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <CloseBtn
                aria-label="Close dialog"
                onClick={onClose}
                disabled={isProcessing}
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
              Send Assessment Report
            </Typography>
            <SubtitleText variant="body2">
              Enter the email address where you would like to receive your
              personalized roadmap.
            </SubtitleText>
          </HeaderBox>

          <EmailTextField
            fullWidth
            label="Work Email Address"
            type="email"
            placeholder="example@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <ActionsBox>
            <DialogPrimaryButton
              variant="contained"
              fullWidth
              disabled={!email || isProcessing}
              onClick={onSend}
              startIcon={
                isProcessing ? (
                  <CircularProgress size={16} color="inherit" />
                ) : null
              }
            >
              {isGeneratingPdf
                ? "Generating PDF..."
                : isSending
                  ? "Sending Report..."
                  : "Send Assessment Report"}
            </DialogPrimaryButton>

            {onPreviewPdf && (
              <PreviewButton
                fullWidth
                variant="text"
                onClick={onPreviewPdf}
              >
                {/* Preview PDF */}
              </PreviewButton>
            )}
          </ActionsBox>
        </ModalBox>
      </motion.div>
    </StyledDialog>
  );
};
