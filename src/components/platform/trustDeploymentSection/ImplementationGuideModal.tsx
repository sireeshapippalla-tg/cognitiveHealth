import {
  Typography,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useSendImplementationProcessPdfMutation } from "../../../services/emailApi";
import {
  StyledDialog,
  ModalBox,
  CloseBtnContainer,
  CloseBtn,
  HeaderBox,
  FormWrapper,
  EmailTextField,
  PrivacyText,
  ActionsBox,
  CancelButton,
  SubmitButton,
} from "./trustDeployment.style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ImplementationGuideModal: React.FC<Props> = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [sendImplementationPdf, { isLoading }] =
    useSendImplementationProcessPdfMutation();

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
      formData.append("email", email);

      // Send to Backend via RTK Query mutation
      await sendImplementationPdf(formData).unwrap();

      toast.success("Guide sent successfully. Please check your inbox.");
      setEmail("");
      onClose();
    } catch (err: unknown) {
      console.error(err);
      const error = err as { data?: { error?: string }; message?: string };
      toast.error(
        error.data?.error ||
          error.message ||
          "Failed to send guide. Please try again."
      );
    }
  };

  return (
    <StyledDialog
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
              whileHover={{ scale: 1.15, rotate: 90 }}
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
              Get the Implementation Guide
            </Typography>
            <Typography variant="body1" color="#64748b">
              Enter your work email and we’ll send you the Implementation Guide.
            </Typography>
          </HeaderBox>

          <FormWrapper noValidate>
            <EmailTextField
              fullWidth
              label="Work Email Address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PrivacyText variant="caption">
              We respect your privacy. No spam.
            </PrivacyText>

            <ActionsBox>
              <CancelButton
                fullWidth
                variant="outlined"
                onClick={onClose}
              >
                Not now
              </CancelButton>
              <SubmitButton
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading || !email}
              >
                {isLoading ? "Processing..." : "Send Guide"}
              </SubmitButton>
            </ActionsBox>
          </FormWrapper>
        </ModalBox>
      </motion.div>
    </StyledDialog>
  );
};

export default ImplementationGuideModal;

