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
import { MetricCard } from "../../ui/metricCard/MetricCard";
import AppButton from "../../ui/appButton/AppButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";

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
    name: "Copy National Provider Organization",
    file: "/Copy-of-National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf",
  },
];
const ResultsSection = () => {
  const [openPdf, setOpenPdf] = useState(false);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleOpenPdf = () => {
    setOpenPdf(true);
    setSelectedPdf(null);
  };

  const handleClosePdf = () => {
    setOpenPdf(false);
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
      toast.error("Please enter work email");
      return;
    }

    try {
      setLoading(true);

      // fetch the pdf file
      const response = await fetch(pdfFile);
      const blob = await response.blob();

      // create form data
      const formData = new FormData();
      formData.append("email", email);
      formData.append("file", blob, "results.pdf");

      await fetch("/api/send-results-pdf", {
        method: "POST",
        body: formData,
      });

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
            onClick={handleOpenPdf}
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

      {/* dialog for view pdf */}

      <Dialog
        open={openPdf}
        onClose={handleClosePdf}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          },
        }}
      >
        <StyledDialogTitle>
          Customer Success Stories
          <IconButton
            size="small"
            onClick={() => {
              if (selectedPdf) {
                setSelectedPdf(null); // go back to list
              } else {
                handleClosePdf();
              }
            }}
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
        <DialogContent
          // sx={{ padding: "24px", marginTop: "30px" }}
          sx={{
            padding: "32px",
            // background: "#FAFAFA",
            margin: "30px"
          }}
        >
          {/* <IconButton
            onClick={() => {
              if (selectedPdf) {
                setSelectedPdf(null); // go back to list
              } else {
                handleClosePdf();
              }
            }}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              "&:hover": { background: "#f5f5f5" },
            }}
          >
            <CloseIcon />
          </IconButton> */}

          {/* Show PDF LIST */}
          {!selectedPdf && (
            <>
              {/* <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Customer Success Stories
              </Typography> */}

              <Grid container spacing={3}>
                {pdfList.map((pdf, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box
                      onClick={() => setSelectedPdf(pdf.file)}
                      sx={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "16px",
                        overflow: "hidden",
                        cursor: "pointer",
                        background: "#fff",
                        transition: "all 0.25s ease",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                          borderColor: "#EB7724",
                        },
                      }}
                    >
                      {/* Thumbnail */}
                      <Box
                        sx={{
                          height: 160,
                          background: "#F3F4F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 50,
                        }}
                      >
                        📄
                      </Box>

                      {/* Content */}
                      <Box sx={{ padding: "20px" }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            marginBottom: "6px",
                          }}
                        >
                          {pdf.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 14,
                            color: "#6B7280",
                            marginBottom: "16px",
                          }}
                        >
                          Customer Success Story
                        </Typography>

                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#EB7724",
                            borderRadius: "999px",
                            textTransform: "none",
                            fontSize: 13,
                            padding: "6px 14px",
                            "&:hover": {
                              backgroundColor: "#ea580c",
                            },
                          }}
                        >
                          View Story
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {/* Show SELECTED PDF */}
          {selectedPdf && (
            <Box>
              <Button
                onClick={() => setSelectedPdf(null)}
                sx={{
                  mb: 2,
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                ← Back to Stories
              </Button>

              <Box
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #E5E7EB",
                  background: "#fff",
                }}
              >
                <iframe
                  src={selectedPdf}
                  width="100%"
                  height="720px"
                  style={{ border: "none" }}
                  title="Customer Success Story"
                />
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

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
          {/* <IconButton
            onClick={() => setOpenEmailDialog(false)}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton> */}

          {/* <Typography
            sx={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 2,
            }}
          >
            Download Results Package
          </Typography> */}

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
          <Button onClick={() => setOpenEmailDialog(false)} disabled={loading}>
            Cancel
          </Button>

          <PrimaryButton
            variant="contained"
            disabled={!email || loading}
            onClick={handleSendEmail}
            startIcon={
              loading ? <CircularProgress size={16} color="inherit" /> : null
            }
          >
            {loading ? "Sending..." : "Send Report"}
          </PrimaryButton>
        </StyledDialogActions>
      </Dialog>
    </SectionContainer>
  );
};

export default ResultsSection;
