import React, { useState, useRef } from "react";
import {
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  HeaderWrapper,
  SectionPaper,
  SectionTitle,
  StyledCheckbox,
  ResultPaper,
  SuccessStyledIcon,
  ResultsWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
} from "./Rcmreadiness.style";
import AppButton from "../components/ui/appButton/AppButton";

import logo from "../assets/cognitiveLogo.png";

import { useSendAssessmentEmailMutation } from "../services/emailApi";
import { sections } from "./RcmreadinessData";
import { RcmreadinessEmailDialog } from "./RcmreadinessEmailDialog";

const RCMReadinessScreen: React.FC = () => {
  const navigate = useNavigate();
  const pdfRef = useRef<HTMLDivElement>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
  const [sendAssessmentEmail, { isLoading: isSending }] = useSendAssessmentEmailMutation();

  const isProcessing = isGeneratingPdf || isSending;

  const handleCheck = (key: string) =>
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = () => {
    setScore(Object.values(checkedItems).filter(Boolean).length);
    setSubmitted(true);
  };

  const isAnyChecked = Object.values(checkedItems).some(Boolean);

  const generatePdfFromUI = async (): Promise<Blob> => {
    if (!pdfRef.current) throw new Error("PDF container not found");

    const [html2canvasModule, jsPDFModule] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);
    const html2canvas = html2canvasModule.default;
    const jsPDF = jsPDFModule.default;

    const canvas = await html2canvas(pdfRef.current, {
      scale: 1,
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.6);
    const pdf = new jsPDF("p", "mm", "a4", true);

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;

    const usableWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * usableWidth) / canvas.width;

    const logoImg = new Image();
    logoImg.src = logo;

    await new Promise((resolve) => {
      logoImg.onload = resolve;
    });

    pdf.addImage(logoImg, "PNG", margin, 10, 35, 12);

    pdf.setFontSize(20);
    pdf.setTextColor(30, 64, 175);
    pdf.text("RCM AI Readiness Assessment", pageWidth / 2, 35, {
      align: "center",
    });

    let position = 40;
    pdf.addImage(imgData, "JPEG", margin, position, usableWidth, imgHeight);

    let heightLeft = imgHeight - (pageHeight - 40);

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 30;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", margin, position, usableWidth, imgHeight);
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
      setIsGeneratingPdf(true);
      await new Promise((resolve) => setTimeout(resolve, 50)); 
      
      const pdfBlob = await generatePdfFromUI();

      if (!pdfBlob) {
        toast.error("Failed to generate PDF");
        setIsGeneratingPdf(false);
        return;
      }

      setIsGeneratingPdf(false);

      const formData = new FormData();
      formData.append("toEmail", email);
      formData.append("attachments", pdfBlob, "RCM-AI-Assessment.pdf");
      formData.append("countOfItems", score.toString());

      await sendAssessmentEmail(formData).unwrap();

      toast.success("Assessment report sent successfully!");
      setOpenEmailDialog(false);
      setEmail("");
      
      setCheckedItems({});
      setSubmitted(false);
      setScore(0);
      
    } catch (error: unknown) {
      console.error(error);
      setIsGeneratingPdf(false);
      const err = error as { data?: { error?: string }; message?: string };
      toast.error(err.data?.error || err.message || "An unexpected error occurred while sending");
    }
  };

  const handlePreviewPdf = async () => {
    const newWindow = window.open("", "_blank");
    try {
      const pdfBlob = await generatePdfFromUI();
      const url = URL.createObjectURL(pdfBlob);
      if (newWindow) newWindow.location.href = url;
    } catch (err) {
      console.error(err);
    }
  };

  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const selectedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (selectedCount / totalItems) * 100;

  return (
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
                    data-html2canvas-ignore="true"
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

        <RcmreadinessEmailDialog
          open={openEmailDialog}
          onClose={() => setOpenEmailDialog(false)}
          email={email}
          setEmail={setEmail}
          isProcessing={isProcessing}
          isGeneratingPdf={isGeneratingPdf}
          isSending={isSending}
          onSend={handleSendEmail}
          onPreviewPdf={handlePreviewPdf}
        />
      </HeaderWrapper>
    </>
  );
};

export default RCMReadinessScreen;
