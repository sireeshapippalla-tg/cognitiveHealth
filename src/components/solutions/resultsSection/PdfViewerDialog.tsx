import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Button,
  Box,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{ sx: { background: "var(--color-white)" } }}
      TransitionComponent={Fade}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #f1f5f9",
          background: "var(--color-white)",
          zIndex: 10,
        }}
      >
        <Button
          onClick={onBack}
          startIcon={
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(180deg)", fontSize: 14 }}
            />
          }
          sx={{ fontWeight: 700, textTransform: "none", color: "#64748b" }}
        >
          Back to Stories
        </Button>
        <Typography fontWeight={800} color="#1e293b">
          Customer Case Study
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="Close"
          sx={{ color: "#1e293b" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: 0, background: "#f8fafc" }}>
        {selectedPdf && (
          <iframe
            src={`${selectedPdf}#toolbar=0`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};