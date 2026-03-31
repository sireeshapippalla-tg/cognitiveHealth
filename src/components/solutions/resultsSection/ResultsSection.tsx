import {
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  // CircularProgress,
  Box,
  Container,
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
            <Box component="span" sx={{ color: "#111827" }}>
              50+ healthcare organizations
            </Box>{" "}
            processing{" "}
            <Box component="span" sx={{ color: "#111827" }}>
              10M+ claims monthly
            </Box>{" "}
            with CognitiveHealth
          </FooterText>
        </CTAWrapper>
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
    </Section>
  );
};

export default ResultsSection;
