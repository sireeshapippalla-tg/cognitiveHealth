import React, { useState, useRef } from "react";
import {
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
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
  StickyProgressBarBox,
  StyledLinearProgress,
  CheckboxRowBox,
  CheckboxLabelText,
} from "./Rcmreadiness.style";
import AppButton from "../components/ui/appButton/AppButton";
import { generatePdfFromUI } from "../utils/pdfGenerator";
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

  const [sendAssessmentEmail, { isLoading: isSending }] =
    useSendAssessmentEmailMutation();

  const isProcessing = isGeneratingPdf || isSending;

  const handleCheck = (key: string) =>
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = () => {
    setScore(Object.values(checkedItems).filter(Boolean).length);
    setSubmitted(true);
  };

  const isAnyChecked = Object.values(checkedItems).some(Boolean);

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

      if (!pdfRef.current) throw new Error("PDF container not found");
      const pdfBlob = await generatePdfFromUI(pdfRef.current);

      if (!pdfBlob) {
        toast.error("Failed to generate PDF");
        setIsGeneratingPdf(false);
        return;
      }

      setIsGeneratingPdf(false);

      const formData = new FormData();
      formData.append("email", email);
      formData.append("file", pdfBlob, "RCM-AI-Assessment.pdf");
      formData.append("score", score.toString());

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
      toast.error(
        err.data?.error ||
          err.message ||
          "An unexpected error occurred while sending"
      );
    }
  };

  const handlePreviewPdf = async () => {
    const newWindow = window.open("", "_blank");
    try {
      if (!pdfRef.current) throw new Error("PDF container not found");
      const pdfBlob = await generatePdfFromUI(pdfRef.current);
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
        <StickyProgressBarBox>
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

          <StyledLinearProgress
            variant="determinate"
            value={progress}
          />
        </StickyProgressBarBox>
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
                        <CheckboxRowBox key={key}>
                          <StyledCheckbox
                            size="small"
                            checked={!!checkedItems[key]}
                            onChange={() => handleCheck(key)}
                            disabled={submitted}
                          />

                          <CheckboxLabelText variant="body2">
                            {item.label}
                          </CheckboxLabelText>
                        </CheckboxRowBox>
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
              <ResultPaper elevation={0}>
                <Stack spacing={2} alignItems="center">
                  <SuccessStyledIcon />

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
