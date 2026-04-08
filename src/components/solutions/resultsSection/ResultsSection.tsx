import {
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import emailjs from "@emailjs/browser";
import {
  ButtonGroup,
  CTAWrapper,
  FooterText,
  Glow,
  Header,
  OutlineButton,
  PrimaryButton,
  Section,
  StatCard,
  StatDivider,
  StatLabel,
  StatValue,
  Title,
  Subtitle,
} from "./ResultsSection.style";

import { useSendResultsPdfMutation } from "../../../services/emailApi";

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
  const [openPdfList, setOpenPdfList] = useState(false);
  const [openPdfViewer, setOpenPdfViewer] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    const [sendPdf, { isLoading }] = useSendResultsPdfMutation();

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
      toast.error("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // 1. Fetch the PDF file
      const response = await fetch(pdfFile);
      const blob = await response.blob();

      // 3. Send email using RTK Query mutation
      const formData = new FormData();
      formData.append("email", email);
      formData.append("file", blob, "results.pdf");

      await sendPdf(formData).unwrap();

      toast.success("PDF sent successfully to your email!");
      setOpenEmailDialog(false);
      setEmail("");
    } catch (error: any) {
      toast.error(error.data?.error || error.message || "Failed to send email. Please try again.");
      console.error(error);
    }
  };

  return (
    <Section>
      {/* Dynamic Background: Ambient Glowing Orbs */}
      <Glow
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Title>
              See Real Results from Healthcare Organizations Like Yours
            </Title>

            <Subtitle>
              Leading health systems, physician groups, and specialty providers
              are achieving breakthrough results with CognitiveHealth AI agents
            </Subtitle>
          </motion.div>
        </Header>

        {/* ORGANIC METRICS CLUSTER: Staggered, Floating, Non-Grid feeling */}
        <Grid container spacing={6} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: "flex", alignItems: "stretch" }}
            >
              <motion.div
                style={{ width: "100%", display: "flex" }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <StatCard>
                  <StatValue>{stat.value}</StatValue>
                  <StatDivider />
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA ACTIONS */}
        <CTAWrapper>
          <ButtonGroup>
            <PrimaryButton
              onClick={handleOpenPdfList}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Read Customer Success Stories
            </PrimaryButton>
            <OutlineButton
              onClick={() => setOpenEmailDialog(true)}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Download Complete Results Package
            </OutlineButton>
          </ButtonGroup>

          <FooterText>
            Join{" "}
            <Box component="span" sx={{ color: "var(--color-gray-900)" }}>
              50+ healthcare organizations
            </Box>{" "}
            processing{" "}
            <Box component="span" sx={{ color: "var(--color-gray-900)" }}>
              10M+ claims monthly
            </Box>{" "}
            with CognitiveHealth
          </FooterText>
        </CTAWrapper>
      </Container>

      {/* UNIQUE EMAIL DIALOG */}
      <Dialog
        open={openEmailDialog}
        onClose={() => setOpenEmailDialog(false)}
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
                  onClick={() => setOpenEmailDialog(false)}
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
              label="Work Email"
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
              onClick={handleSendEmail}
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

      {/* UNIQUE PDF LIST DIALOG */}
      <Dialog
        open={openPdfList}
        onClose={handleCloseAll}
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
            <Box
              sx={{ position: "absolute", top: -20, right: -20, zIndex: 10 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={handleCloseAll}
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
                  onClick={() => handleSelectPdf(pdf.file)}
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
                  <Typography
                    fontWeight={700}
                    sx={{ flex: 1, color: "#1f2937" }}
                  >
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

      {/* FULLSCREEN PDF VIEWER */}
      <Dialog
        open={openPdfViewer}
        onClose={handleCloseAll}
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
            onClick={handleBackToList}
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
          <IconButton onClick={handleCloseAll} sx={{ color: "#1e293b" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, background: "#f8fafc" }}>
          <iframe
            src={`${selectedPdf}#toolbar=0`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default ResultsSection;
