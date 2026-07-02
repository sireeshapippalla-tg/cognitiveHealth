import React from "react";
import { Fade, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  FullScreenDialog,
  ViewerHeaderBox,
  BackButton,
  HeaderCloseBtn,
  ViewerContent,
} from "./ResultsDialog.style";

interface PdfViewerDialogProps {
  open: boolean;
  onClose: () => void;
  onBack: () => void;
  selectedPdf: string | null;
}

export const PdfViewerDialog: React.FC<PdfViewerDialogProps> = ({
  open,
  onClose,
  onBack,
  selectedPdf,
}) => {
  return (
    <FullScreenDialog
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
    >
      <ViewerHeaderBox>
        <BackButton
          onClick={onBack}
          startIcon={
            <ArrowForwardIosIcon />
          }
        >
          Back to Stories
        </BackButton>
        <Typography fontWeight={800} color="#1e293b">
          Customer Case Study
        </Typography>
        <HeaderCloseBtn
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </HeaderCloseBtn>
      </ViewerHeaderBox>
      <ViewerContent>
        {selectedPdf && (
          <iframe
            src={`${selectedPdf}#toolbar=0`}
            width="100%"
            height="100%"
            title="PDF Viewer"
          />
        )}
      </ViewerContent>
    </FullScreenDialog>
  );
};

