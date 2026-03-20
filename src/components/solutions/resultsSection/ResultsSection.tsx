import {
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import emailjs from "@emailjs/browser";

const stats = [
  {
    value: "93.8%",
    label: "Clean Claim and Reconciliation Accuracy",
  },
  {
    value: "60%",
    label: "Reduction in Denial Rates",
  },
  {
    value: "$2M+",
    label: "Annual Revenue Recovery per Facility",
  },
  {
    value: "80%",
    label: "Decrease in Manual Work",
  },
];

const pdfFile =
  "/National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf";
const pdfList = [
  {
    name: "National Provider Organization",
    file: "/National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf",
  },
  {
    name: "Regional 7 Hospital Health System",
    file: "/Copy-of-National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf",
  },
];

const ResultsSection = () => {
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [openPdfList, setOpenPdfList] = useState(false);
  const [openPdfViewer, setOpenPdfViewer] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleOpenPdfList = () => setOpenPdfList(true);
  const handleSelectPdf = (file: string) => {
    setSelectedPdf(file);
    setOpenPdfList(false);
    setOpenPdfViewer(true);
  };
  const handleBackToList = () => {
    setOpenPdfViewer(false);
    setOpenPdfList(true);
  };
  const handleCloseAll = () => {
    setOpenPdfViewer(false);
    setOpenPdfList(false);
    setSelectedPdf(null);
  };

  const handleSendEmail = async () => {
    if (!email) {
      toast.error("Please enter work email");
      return;
    }
    try {
      setLoading(true);
      const absolutePdfLink = window.location.origin + pdfFile;
      await emailjs.send(
        "service_87hf7ak",
        "template_xs1xiis",
        { to_email: email, pdf_link: absolutePdfLink },
        "97EUcQj5LwbXO5vNo",
      );
      toast.success("PDF sent successfully to your email!");
      setOpenEmailDialog(false);
      setEmail("");
    } catch (error) {
      toast.error("Failed to send email");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background: Ambient Glowing Orbs */}
      <motion.div
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "0%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(244, 122, 32, 0.05) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                mb: 2,
                fontSize: "32px",
                color: "#111827",
                lineHeight: 1.1,
                // letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              See Real Results from Healthcare Organizations Like Yours
            </Typography>
            <Typography
              sx={{
                color: "#4B5563",
                maxWidth: "650px",
                mx: "auto",
                fontSize: "1.2rem",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Leading health systems, physician groups, and specialty providers
              are achieving breakthrough results with CognitiveHealth AI agents
            </Typography>
          </motion.div>
        </Box>

        {/* ORGANIC METRICS CLUSTER: Staggered, Floating, Non-Grid feeling */}
        <Grid container spacing={6} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    textAlign: "center",
                    background: "linear-gradient(180deg, #ffffff, #f9fafb)",
                    border: "1px solid #E5E7EB",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      fontWeight: 900,
                      mb: 1,
                      padding: "10px",
                      background: " #F47A20",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Box
                    sx={{
                      width: "50px",
                      height: "4px",
                      mx: "auto",
                      my: 2,
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, #F47A20, #6BBF59, #709cd0)",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#4B5563",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      lineHeight: 1.5,
                      maxWidth: "220px",
                      mx: "auto",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA ACTIONS */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Button
              variant="contained"
              onClick={handleOpenPdfList}
              sx={{
                px: 4,
                py: 1.8,
                borderRadius: "50px",
                fontWeight: 900,
                background: "#F47A20",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 15px 30px rgba(244,122,32,0.3)",
                "&:hover": { background: "#e65a00" },
              }}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Read Customer Success Stories
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenEmailDialog(true)}
              sx={{
                px: 4,
                py: 1.8,
                borderRadius: "50px",
                fontWeight: 900,
                borderColor: "rgba(0,0,0,0.1)",
                color: "#111827",
                fontSize: "1rem",
                textTransform: "none",
                background: "#fff",
                "&:hover": {
                  borderColor: "#F47A20",
                  color: "#F47A20",
                  background: "rgba(244, 122, 32, 0.05)",
                },
              }}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Download Complete Results Package
            </Button>
          </Box>

          <Typography
            sx={{
              color: "#6B7280",
              // fontWeight: 800,
              // letterSpacing: "2px",
              // textTransform: "uppercase",
              fontSize: "16px",
            }}
          >
            Join{" "}
            <Box component="span" sx={{ color: "#111827" }}>
              50+ healthcare organizations
            </Box>{" "}
            processing{" "}
            <Box component="span" sx={{ color: "#111827" }}>
              10M+ claims monthly
            </Box>{" "}
            with CognitiveHealth
          </Typography>
        </Box>
      </Container>

      {/* REUSED DIALOGS - KEEPING LOGIC AS IS */}
      <Dialog
        open={openEmailDialog}
        onClose={() => setOpenEmailDialog(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "32px", p: 2 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            p: 2,
          }}
        >
          <Typography variant="h5" fontWeight={900}>
            Download Package
          </Typography>
          <IconButton onClick={() => setOpenEmailDialog(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 4, pt: 0 }}>
          <Typography variant="body1" sx={{ color: "#6B7280", mb: 4 }}>
            Enter your work email and we'll send the complete results package
            instantly.
          </Typography>
          <TextField
            fullWidth
            label="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
          />
          <Button
            fullWidth
            variant="contained"
            disabled={!email || loading}
            onClick={handleSendEmail}
            sx={{
              mt: 4,
              py: 2,
              borderRadius: "16px",
              background: "#F47A20",
              fontWeight: 800,
            }}
          >
            {loading ? "Sending..." : "Send Report"}
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPdfList}
        onClose={handleCloseAll}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "40px", p: 2 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
          }}
        >
          <Typography variant="h5" fontWeight={900}>
            Success Stories
          </Typography>
          <IconButton onClick={handleCloseAll}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {pdfList.map((pdf, idx) => (
              <Box
                key={idx}
                onClick={() => handleSelectPdf(pdf.file)}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: "rgba(0,0,0,0.03)",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  "&:hover": {
                    background: "rgba(244, 122, 32, 0.08)",
                    transform: "translateX(10px)",
                  },
                }}
              >
                <PictureAsPdfIcon sx={{ color: "#F47A20", fontSize: 32 }} />
                <Typography fontWeight={700} sx={{ flex: 1 }}>
                  {pdf.name}
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#9CA3AF" }} />
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openPdfViewer}
        onClose={handleCloseAll}
        fullScreen
        PaperProps={{ sx: { background: "#fff" } }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
          }}
        >
          <Button
            onClick={handleBackToList}
            startIcon={
              <ArrowForwardIosIcon
                sx={{ transform: "rotate(180deg)", fontSize: 14 }}
              />
            }
          >
            Back to Stories
          </Button>
          <IconButton onClick={handleCloseAll}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0 }}>
          <iframe
            src={`${selectedPdf}#toolbar=0`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ResultsSection;
