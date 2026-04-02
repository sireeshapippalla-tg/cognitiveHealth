import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogContent,
  TextField,
  CircularProgress,
  IconButton,
  Box,
  Fade,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {
  HeaderWrapper,
  SectionPaper,
  SectionTitle,
  StyledCheckbox,
  ResultPaper,
  FolderStyledIcon,
  PaymentsStyledIcon,
  HospitalStyledIcon,
  TimeStyledIcon,
  AIStyledIcon,
  HandshakeStyledIcon,
  TrendingStyledIcon,
  InsightsStyledIcon,
  SuccessStyledIcon,
  ResultsWrapper,
  StyledDialogTitle,
  StyledDialogActions,
  PrimaryButton,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
} from "./Rcmreadiness.style";
import AppButton from "../components/ui/appButton/AppButton";

import logo from "../assets/cognitiveLogo.png";

/* TYPES */
type ChecklistItem = { label: string };
type SectionProps = {
  title: string;
  icon?: React.ReactNode;
  items: ChecklistItem[];
};

/* DATA */
const sections: SectionProps[] = [
  {
    title: "Correspondence Classification",
    icon: <FolderStyledIcon />,
    items: [
      { label: "Receive daily high volumes of correspondence" },
      { label: "Documents arrive via fax, email, portals, and mail" },
      { label: "Staff manually reviews, labels, and sorts documents" },
      { label: "Handling 5+ categories (denials, medical records, appeals)" },
    ],
  },
  {
    title: "Payment Posting & Reconciliation",
    icon: <PaymentsStyledIcon />,
    items: [
      { label: "Manual posting of non-standard ERAs or paper EOBs" },
      { label: "Significant delays in month-end reconciliation" },
      { label: "Difficulty matching bulk payments to individual claims" },
      { label: "High volume of unposted cash on the balance sheet" },
    ],
  },
  {
    title: "EMR & Facility Complexity",
    icon: <HospitalStyledIcon />,
    items: [
      { label: "Operating across multiple incompatible EMR systems" },
      { label: "Managing billing for multiple facility locations" },
      { label: "Lack of centralized data integration between sites" },
      { label: "Inconsistent data formats require manual work" },
    ],
  },
  {
    title: "Low Dollar Denials & Write-Offs",
    icon: <TrendingStyledIcon />,
    items: [
      {
        label:
          "High volume of denials under $200–$500 that are written off or outsourced",
      },
      { label: "Cost-to-collect exceeds the potential recovery amount" },
      { label: "Lack of granular visibility into small balance denial trends" },
      { label: "Manual appeal process is too expensive for low balances" },
    ],
  },
  {
    title: "Measurable Impact Potential",
    icon: <InsightsStyledIcon />,
    items: [
      { label: "Leadership has set goals to reduce DSO or AR days" },
      { label: "Finance team requires ROI within 6–12 months" },
      { label: "Goal to shift staff from data entry to high-value tasks" },
      { label: "Need to reduce overall cost-to-collect" },
    ],
  },
  {
    title: "Operational Challenges",
    icon: <TimeStyledIcon />,
    items: [
      { label: "Staff turnover or shortages in the RCM department" },
      { label: "Missed appeal deadlines due to routing delays" },
      { label: "Backlogs in work queues creating cash-flow delays" },
    ],
  },
  {
    title: "AI Compatibility & Readiness",
    icon: <AIStyledIcon />,
    items: [
      { label: "Current inputs are digital (PDF, 835/837, scanned images)" },
      { label: "IT team is open to API, SFTP, or secure pilot access" },
      { label: "Workflows are documented or can be mapped clearly" },
      { label: "Data is accessible via shared folders or DMS" },
    ],
  },
  {
    title: "Organizational Readiness",
    icon: <HandshakeStyledIcon />,
    items: [
      { label: "Key stakeholders support automation" },
      { label: "Budget is available for efficiency tools" },
      { label: "Organization is willing to pilot new technology" },
      { label: "There is a designated champion to drive the initiative" },
    ],
  },
];

const RCMReadinessScreen: React.FC = () => {
  const navigate = useNavigate();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleCheck = (key: string) =>
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = () => {
    setScore(Object.values(checkedItems).filter(Boolean).length);
    setSubmitted(true);
  };

  const isAnyChecked = Object.values(checkedItems).some(Boolean);

  const generatePdfFromUI = async (): Promise<Blob> => {
    if (!pdfRef.current) throw new Error("PDF container not found");

    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;

    const usableWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * usableWidth) / canvas.width;

    /* LOGO */
    const logoImg = new Image();
    logoImg.src = logo;

    await new Promise((resolve) => {
      logoImg.onload = resolve;
    });

    pdf.addImage(logoImg, "PNG", margin, 10, 35, 12);

    pdf.setFontSize(20);
    pdf.setTextColor(30, 64, 175);
    // pdf.text("RCM AI Readiness Assessment", margin, 30);
    pdf.text("RCM AI Readiness Assessment", pageWidth / 2, 35, {
      align: "center",
    });

    let position = 40;

    pdf.addImage(imgData, "PNG", margin, position, usableWidth, imgHeight);

    let heightLeft = imgHeight - (pageHeight - 40);

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 30;

      pdf.addPage();
      pdf.addImage(imgData, "PNG", margin, position, usableWidth, imgHeight);

      heightLeft -= pageHeight - 40;
    }

    return pdf.output("blob");
  };
  const handleSendEmail = async () => {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setSending(true);

      const pdfBlob = await generatePdfFromUI();

      if (!pdfBlob) {
        toast.error("Failed to generate PDF");
        setSending(false);
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("score", score.toString());
      formData.append("file", pdfBlob, "RCM-AI-Assessment.pdf");

      await fetch("http://localhost:5000/api/email/send-assessment-email", {
        method: "POST",
        body: formData,
      });

      toast.success("Assessment report sent successfully!");
      setOpenEmailDialog(false);
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send assessment report");
    } finally {
      setSending(false);
    }
  };
  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const selectedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (selectedCount / totalItems) * 100;
  return (
    // <HeaderWrapper>
    <>
      <HeroSection>
        <HeroTitle>Revenue Cycle Management AI Readiness Assessment</HeroTitle>

        <HeroSubtitle>
          Use this checklist to determine if your organization is ready for
          AI-driven RCM solutions.
        </HeroSubtitle>
      </HeroSection>
      <HeaderWrapper ref={pdfRef}>
        <Box
          sx={{
            position: "sticky",
            top: 60,
            zIndex: 1000,
            background: "var(--color-white)",
            paddingTop: "16px",
            paddingBottom: "16px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography fontWeight={600}>Progress</Typography>

            <Typography color="text.secondary">
              {selectedCount} / {totalItems} selected
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 10,
              backgroundColor: "#e5e7eb",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "var(--color-green)",
              },
            }}
          />
        </Box>
        <Grid container spacing={3} alignItems="stretch">
          {sections.map((section, sIndex) => (
            <Grid key={sIndex} size={{ xs: 12, md: 6 }}>
              <SectionPaper elevation={0}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    {section.icon}
                    <SectionTitle variant="h6">{section.title}</SectionTitle>
                  </Stack>

                  <Divider />

                  <Stack spacing={1}>
                    {section.items.map((item, iIndex) => {
                      const key = `${sIndex}-${iIndex}`;
                      return (
                        <Box
                          key={key}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <StyledCheckbox
                            size="small"
                            checked={!!checkedItems[key]}
                            onChange={() => handleCheck(key)}
                            disabled={submitted}
                            sx={{
                              p: 0,
                              mt: "3px",
                              mr: 1.5,
                              flexShrink: 0,
                            }}
                          />

                          <Typography
                            variant="body2"
                            sx={{
                              flex: 1,
                              lineHeight: 1.6,
                              color: "#1f2937",
                            }}
                          >
                            {item.label}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
              </SectionPaper>
            </Grid>
          ))}
        </Grid>
        {!submitted && (
          <Stack alignItems="center" mt={5}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!isAnyChecked}
            >
              Submit Assessment
            </Button>

            <Typography mt={2} mb={2} fontSize="14px" color="#6b7280">
              Select at least one item to see your results
            </Typography>
          </Stack>
        )}

        {submitted && (
          <ResultsWrapper>
            <Stack alignItems="center">
              <ResultPaper elevation={0} sx={{ maxWidth: 700, p: 6 }}>
                <Stack spacing={2} alignItems="center">
                  <SuccessStyledIcon sx={{ fontSize: 60 }} />

                  <Typography variant="h5" fontWeight={700}>
                    Results Analysis
                  </Typography>

                  <Typography align="center">
                    You have checked <strong>{score}</strong> boxes.
                  </Typography>

                  <Typography align="center" color="var(--color-gray-600)">
                    {score >= 15 ? (
                      <>
                        If you checked <strong>15 or more boxes</strong>, your
                        organization is a prime candidate for AI-driven
                        automation.
                      </>
                    ) : (
                      <>
                        If you checked <strong>fewer than 15 boxes</strong>,
                        your organization shows partial readiness for AI
                        automation.
                      </>
                    )}
                  </Typography>

                  <Typography align="center" color="var(--color-gray-600)">
                    {score >= 15 ? (
                      <>
                        You are likely facing significant manual burdens and
                        operational complexity that intelligent automation can
                        alleviate immediately.
                      </>
                    ) : (
                      <>
                        There are opportunities to improve workflows and
                        operational efficiency before fully scaling automation
                        initiatives.
                      </>
                    )}
                  </Typography>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    mt={2}
                  >
                    <AppButton
                      variantType="primary"
                      size="large"
                      onClick={() => setOpenEmailDialog(true)}
                    >
                      Send Email
                    </AppButton>

                    <AppButton
                      variantType="primary"
                      size="large"
                      onClick={() => navigate("/contact-us")}
                    >
                      Meet Our Experts
                    </AppButton>
                  </Stack>
                </Stack>
              </ResultPaper>
            </Stack>
          </ResultsWrapper>
        )}

        <Dialog
          open={openEmailDialog}
          onClose={() => !sending && setOpenEmailDialog(false)}
          maxWidth="xs"
          fullWidth
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(10, 15, 30, 0.4)",
                backdropFilter: "blur(12px)",
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
                  background: "linear-gradient(45deg, var(--color-text-blue), var(--color-green), var(--color-primary), var(--color-text-blue))",
                  borderRadius: "34px",
                  opacity: 0.4,
                  filter: "blur(8px)",
                },
              }}
            >
              <Box sx={{ position: "absolute", top: -16, right: -16, zIndex: 10 }}>
                <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    onClick={() => setOpenEmailDialog(false)}
                    disabled={sending}
                    sx={{
                      width: 40,
                      height: 40,
                      background: "var(--color-white)",
                      color: "#1e293b",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                      border: "2px solid var(--color-white)",
                      "&:hover": { color: "var(--color-primary-dark)" },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </motion.div>
              </Box>

              <Box mb={3} textAlign="center">
                <Typography variant="h5" fontWeight={900} color="#1e293b" gutterBottom>
                  Send Assessment Report
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  Enter the email address where you would like to receive your personalized roadmap.
                </Typography>
              </Box>

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                placeholder="example@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                    backgroundColor: "rgba(248, 250, 252, 0.8)",
                  },
                }}
              />

              <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <PrimaryButton
                  variant="contained"
                  fullWidth
                  disabled={!email || sending}
                  onClick={handleSendEmail}
                  startIcon={sending ? <CircularProgress size={16} color="inherit" /> : null}
                  sx={{
                    py: 1.8,
                    borderRadius: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                  }}
                >
                  {sending ? "Generating PDF..." : "Send Assessment Report"}
                </PrimaryButton>

                <Button
                  fullWidth
                  variant="text"
                  sx={{ textTransform: "none", color: "#64748b", fontWeight: 600 }}
                  onClick={async () => {
                    const newWindow = window.open("", "_blank");
                    try {
                      const pdfBlob = await generatePdfFromUI();
                      const url = URL.createObjectURL(pdfBlob);
                      if (newWindow) newWindow.location.href = url;
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Preview PDF
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Dialog>
      </HeaderWrapper>
    </>
  );
};

export default RCMReadinessScreen;
