import React from "react";
import { Fade, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  StyledDialog,
  PdfModalBox,
  PdfCloseBtnContainer,
  PdfCloseBtn,
  HeaderBox,
  PdfListContainer,
  PdfItemRow,
  PdfIconWrapper,
} from "./ResultsDialog.style";

interface PdfItem {
  name: string;
  file: string;
}

interface PdfListDialogProps {
  open: boolean;
  onClose: () => void;
  pdfList: PdfItem[];
  onSelectPdf: (file: string) => void;
}

export const PdfListDialog: React.FC<PdfListDialogProps> = ({
  open,
  onClose,
  pdfList,
  onSelectPdf,
}) => {
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
            backdropFilter: "blur(8px)",
          },
        },
      }}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <PdfModalBox>
          {/* Close Button - Detached */}
          <PdfCloseBtnContainer>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <PdfCloseBtn
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon />
              </PdfCloseBtn>
            </motion.div>
          </PdfCloseBtnContainer>

          <HeaderBox style={{ textAlign: "left", padding: "8px" }}>
            <Typography variant="h4" fontWeight={900} color="#1f2937">
              Success Stories
            </Typography>
            <Typography variant="body1" color="#6b7280" mt={1}>
              Select a case study to see our impact in detail.
            </Typography>
          </HeaderBox>

          <PdfListContainer>
            {pdfList.map((pdf, idx) => (
              <PdfItemRow
                key={idx}
                onClick={() => onSelectPdf(pdf.file)}
              >
                <PdfIconWrapper>
                  <PictureAsPdfIcon />
                </PdfIconWrapper>
                <Typography className="pdf-name">
                  {pdf.name}
                </Typography>
                <ArrowForwardIosIcon />
              </PdfItemRow>
            ))}
          </PdfListContainer>
        </PdfModalBox>
      </motion.div>
    </StyledDialog>
  );
};
