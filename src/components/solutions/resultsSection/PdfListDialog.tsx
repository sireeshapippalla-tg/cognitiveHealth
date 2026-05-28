import React from "react";
import { Dialog, IconButton, Typography, Box, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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
    <Dialog
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
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: "40px",
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
                "linear-gradient(45deg, var(--color-primary), var(--color-text-blue), var(--color-green), var(--color-primary))",
              borderRadius: "42px",
              opacity: 0.4,
              filter: "blur(10px)",
            },
          }}
        >
          {/* Close Button - Detached */}
          <Box sx={{ position: "absolute", top: -20, right: -20, zIndex: 10 }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={onClose}
                aria-label="Close"
                sx={{
                  width: 44,
                  height: 44,
                  background: "var(--color-white)",
                  color: "#1e293b",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  border: "2px solid var(--color-white)",
                  "&:hover": { color: "var(--color-primary-hover)" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </motion.div>
          </Box>

          <Box mb={4} p={1}>
            <Typography variant="h4" fontWeight={900} color="#1f2937">
              Success Stories
            </Typography>
            <Typography variant="body1" color="#6b7280" mt={1}>
              Select a case study to see our impact in detail.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {pdfList.map((pdf, idx) => (
              <Box
                key={idx}
                onClick={() => onSelectPdf(pdf.file)}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "rgba(244, 122, 32, 0.03)",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  border: "1px solid rgba(244, 122, 32, 0.1)",
                  "&:hover": {
                    background: "rgba(244, 122, 32, 0.1)",
                    borderColor: "rgba(244, 122, 32, 0.3)",
                    transform: "translateX(12px)",
                    boxShadow: "0 10px 20px rgba(244, 122, 32, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "16px",
                    background: "var(--color-white)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  }}
                >
                  <PictureAsPdfIcon
                    sx={{ color: "var(--color-primary)", fontSize: 24 }}
                  />
                </Box>
                <Typography fontWeight={700} sx={{ flex: 1, color: "#1f2937" }}>
                  {pdf.name}
                </Typography>
                <ArrowForwardIosIcon
                  sx={{ fontSize: 16, color: "var(--color-primary)" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};
