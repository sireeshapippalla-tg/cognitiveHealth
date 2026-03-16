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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  SectionContainer,
  Wrapper,
  Subtitle,
  CtaActions,
  FooterText,
  PrimaryButtonStyles,
  Title,
  StyledDialogTitle,
  StyledDialogActions,
  PrimaryButton,
} from "./ResultsSection.style";
import { useSendResultsPdfMutation } from '../../../services/apiSlice';
import { MetricCard } from "../../ui/metricCard/MetricCard";
import AppButton from "../../ui/appButton/AppButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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
// public

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
  // const [loading, setLoading] = useState(false); // Removed local loading state
  // const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const [openPdfList, setOpenPdfList] = useState(false);
  const [openPdfViewer, setOpenPdfViewer] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // RTK Query Mutations
  const [sendPdf, { isLoading }] = useSendResultsPdfMutation();

  // const handleOpenPdf = () => {
  //   setOpenPdf(true);
  //   setSelectedPdf(null);
  // };

  const handleOpenPdfList = () => {
    setOpenPdfList(true);
  };
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

  // const handleSendEmail = async () => {
  //   if (!email) {
  //     toast.error("Please enter work email");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     await fetch("/api/send-results-pdf", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         pdf: pdfFile,
  //       }),
  //     });

  //     toast.success("PDF sent successfully to your email!");
  //     setOpenEmailDialog(false);
  //     setEmail("");
  //   } catch (error) {
  //     toast.error("Failed to send email");
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
    <SectionContainer>
      <Wrapper>
        <Title>See Real Results from Healthcare Organizations Like Yours</Title>

        <Subtitle>
          Leading health systems, physician groups, and specialty providers are
          achieving breakthrough results with CognitiveHealth AI agents.
        </Subtitle>

        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MetricCard
                value={stat.value}
                description={stat.label}
                color="#EB7724"
              />
            </Grid>
          ))}
        </Grid>

        <CtaActions direction={{ xs: "column", sm: "row" }} spacing={2}>
          <AppButton
            variantType="primary"
            sx={PrimaryButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            onClick={handleOpenPdfList}
            //  onClick={() => window.open("/National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf", "_blank")}
          >
            Read Customer Success Stories
          </AppButton>

          <AppButton
            variantType="outline"
            showBorder={true}
            // sx={OutlineButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            onClick={() => setOpenEmailDialog(true)}
          >
            Download Complete Results Package
          </AppButton>
        </CtaActions>

        <FooterText>
          Join <b>50+ healthcare organizations</b> processing
          <b> 10M+ claims monthly</b> with CognitiveHealth
        </FooterText>
      </Wrapper>

      {/* dialog for download pdf */}
      <Dialog
        open={openEmailDialog}
        onClose={() => setOpenEmailDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <StyledDialogTitle>
          Download Results Package
          <IconButton
            size="small"
            onClick={() => setOpenEmailDialog(false)}
            // disabled={sending}
            sx={{
              color: "var(--color-text-blue)",
              backgroundColor: "#fff",
              borderRadius: "100%",
              ":hover": { backgroundColor: "#f3f4f6" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </StyledDialogTitle>
        <DialogContent sx={{ padding: "24px" }}>
          <Typography variant="body2" color="text.secondary" mb={2} mt={2}>
            Enter your work email and we’ll send the complete results package.
          </Typography>

          <TextField
            fullWidth
            label="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 3 }}
            type="email"
            placeholder="example@company.com"
          />
        </DialogContent>
        <StyledDialogActions>
          <Button onClick={() => setOpenEmailDialog(false)} disabled={isLoading}>
            Cancel
          </Button>

          <PrimaryButton
            variant="contained"
            disabled={!email || isLoading}
            onClick={handleSendEmail}
            startIcon={
              isLoading ? <CircularProgress size={16} color="inherit" /> : null
            }
          >
            {isLoading ? "Sending..." : "Send Report"}
          </PrimaryButton>
        </StyledDialogActions>
      </Dialog>

      {/* dialog for view pdf */}
      <Dialog
        open={openPdfList}
        onClose={handleCloseAll}
        maxWidth="sm"
        fullWidth
      >
        <StyledDialogTitle>
          Customer Success Stories
          <IconButton
            onClick={handleCloseAll}
            sx={{
              color: "var(--color-text-blue)",
              backgroundColor: "#fff",
              borderRadius: "100%",
              ":hover": { backgroundColor: "#f3f4f6" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>

        <DialogContent sx={{ padding: "24px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {pdfList.map((pdf, index) => (
              <Box
                key={index}
                onClick={() => handleSelectPdf(pdf.file)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#F9FAFB",
                  },
                }}
              >
                {/* LEFT SECTION */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <PictureAsPdfIcon
                    sx={{
                      color: "#EB7724",
                      fontSize: 26,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#111827",
                      }}
                    >
                      {pdf.name}
                    </Typography>
                  </Box>
                </Box>

                {/* RIGHT ARROW */}
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 14,
                    color: "#9CA3AF",
                  }}
                />
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openPdfViewer}
        onClose={handleCloseAll}
        maxWidth="lg"
        // fullWidth
        // PaperProps={{
        //   sx: {
        //     borderRadius: "16px",
        //     overflow: "hidden",
        //   },
        // }}
        fullScreen
  PaperProps={{
    sx: {
      backgroundColor: "#fff",
    },
  }}
      >
        <DialogContent sx={{ padding: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Button
              onClick={handleBackToList}
              sx={{
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              ← Back
            </Button>

            <IconButton onClick={handleCloseAll}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "80vh",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
};

export default ResultsSection;
