import React, { useState } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

import {
  // Container,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubText,
  SectionPaper,
  SectionTitle,
  StyledCheckbox,
  ResultPaper,
  FooterWrapper,
  FooterEmail,
  FooterCaption,
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
} from "./Rcmreadiness.style";
import AppButton from "../components/ui/appButton/AppButton";
import jsPDF from "jspdf";

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

  // const handleBack = () => navigate("/#howItWorks");
  const isAnyChecked = Object.values(checkedItems).some(Boolean);
  //   window.history.length > 1 ? navigate(-1) : navigate("/#howItWorks");
  // const isAnyChecked = Object.values(checkedItems).some(Boolean);

  // const generatePdfBlob = (): Blob => {
  //   const doc = new jsPDF();

  //   doc.setFontSize(18);
  //   doc.text("RCM AI Readiness Assessment", 20, 20);

  //   doc.setFontSize(12);
  //   doc.text(`Assessment Score: ${score}`, 20, 40);

  //   let startY = 60;
  //   let counter = 1;

  //   sections.forEach((section, sIndex) => {
  //     section.items.forEach((item, iIndex) => {
  //       const key = `${sIndex}-${iIndex}`;
  //       if (checkedItems[key]) {
  //         doc.text(`${counter}. ${item.label}`, 20, startY);
  //         startY += 8;
  //         counter++;
  //       }
  //     });
  //   });

  //   return doc.output("blob");
  // };

  // const handleSendEmail = async (): Promise<void> => {
  //   try {
  //     const pdfBlob = generatePdfBlob();

  //     const formData = new FormData();
  //     formData.append("file", pdfBlob, "RCM-Assessment.pdf");
  //     formData.append("score", score.toString());

  //     await fetch("/api/send-email", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     alert("Email sent successfully!");
  //   } catch (error) {
  //     console.error("Email failed:", error);
  //   }
  // };

  const handleSendEmail = async () => {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setSending(true);

      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("RCM AI Readiness Assessment", 20, 20);
      doc.setFontSize(12);
      doc.text(`Assessment Score: ${score}`, 20, 40);

      const pdfBlob = doc.output("blob");

      const formData = new FormData();
      formData.append("email", email);
      formData.append("score", score.toString());
      formData.append("file", pdfBlob, "RCM-Assessment.pdf");

      await fetch("/api/send-assessment-email", {
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

  return (
    <HeaderWrapper>
      <Stack spacing={2} mb={6}>
        <HeaderTitle>
          Revenue Cycle Management AI Readiness Assessment
        </HeaderTitle>
        <HeaderSubText>
          Use this checklist to determine if your organization is ready for
          AI-driven automation.
        </HeaderSubText>
      </Stack>
      <Grid container spacing={3}>
        {sections.map((section, sIndex) => (
          <Grid key={sIndex} size={{ xs: 12, md: 6 }}>
            <SectionPaper elevation={0}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  {section.icon}
                  <SectionTitle variant="h6">{section.title}</SectionTitle>
                </Stack>

                <Divider />

                <Stack spacing={1}>
                  {section.items.map((item, iIndex) => {
                    const key = `${sIndex}-${iIndex}`;
                    return (
                      <Stack
                        key={key}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                      >
                        <StyledCheckbox
                          size="small"
                          checked={!!checkedItems[key]}
                          onChange={() => handleCheck(key)}
                          disabled={submitted}
                        />
                        <Typography variant="body2" color="#1f2937">
                          {item.label}
                        </Typography>
                      </Stack>
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
        </Stack>
      )}
      {/* {submitted && (
          <ResultPaper elevation={0}>
            <Stack alignItems="center" spacing={2}>
              <SuccessStyledIcon />
              <Typography variant="h6" fontWeight={600}>
                Your response has been submitted
              </Typography>
              <Typography>
                Your Score: <strong>{score}</strong>
              </Typography>
              <Typography>
                {score >= 15
                  ? "Your organization is a prime candidate for AI automation."
                  : "Your organization shows partial readiness."}
              </Typography>
              <Button variant="outlined" onClick={handleBack}>
                Go Back
              </Button>
            </Stack>
          </ResultPaper>
        )} */}

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

                <Typography align="center" color="#374151">
                  {score >= 15 ? (
                    <>
                      If you checked <strong>15 or more boxes</strong>, your
                      organization is a prime candidate for AI-driven
                      automation.
                    </>
                  ) : (
                    <>
                      If you checked <strong>fewer than 15 boxes</strong>, your
                      organization shows partial readiness for AI automation.
                    </>
                  )}
                </Typography>

                <Typography align="center" color="#374151">
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
                  {/* Send Email Button */}
                  <AppButton
                    variantType="primary"
                    size="large"
                    onClick={() => setOpenEmailDialog(true)}
                  >
                    Send Email
                  </AppButton>

                  {/* Connect With Experts Button */}
                  <AppButton
                    variantType="primary"
                    size="large"
                    onClick={() => navigate("/contact-us")}
                  >
                    Meet Our Experts
                  </AppButton>
                </Stack>

                {/* <Button variant="contained" size="large" onClick={handleBack}>
                    Back to Assessment
                  </Button> */}
              </Stack>
            </ResultPaper>
          </Stack>
        </ResultsWrapper>
      )}
      <FooterWrapper>
        <Typography variant="h5" color="var(--color-text-blue)">
          Ready to automate your RCM workflows?
        </Typography>
        <Typography color="var(--color-text-blue)">Contact us at</Typography>
        <FooterEmail variant="h6">info@cognitivehealthit.com</FooterEmail>
        <FooterCaption variant="caption">
          © CognitiveHealth – RCM Automation Solutions
        </FooterCaption>
      </FooterWrapper>

      <Dialog
        open={openEmailDialog}
        onClose={() => !sending && setOpenEmailDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <StyledDialogTitle>
          Send Assessment Report
          <IconButton
            size="small"
            onClick={() => setOpenEmailDialog(false)}
            disabled={sending}
            sx={{ color:"var(--color-text-blue)", backgroundColor:"#fff",
              borderRadius:"100%"
             }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </StyledDialogTitle>

        <DialogContent sx={{ padding: "24px" }}>
          <Typography variant="body2" color="text.secondary" mb={2} mt={2}>
            Enter the email address where you would like to receive the report.
          </Typography>

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@company.com"
          />
        </DialogContent>

        <StyledDialogActions>
          <Button onClick={() => setOpenEmailDialog(false)} disabled={sending}>
            Cancel
          </Button>

          <PrimaryButton
            variant="contained"
            disabled={!email || sending}
            onClick={handleSendEmail}
            startIcon={
              sending ? <CircularProgress size={16} color="inherit" /> : null
            }
          >
            {sending ? "Sending..." : "Send Report"}
          </PrimaryButton>
        </StyledDialogActions>
      </Dialog>
    </HeaderWrapper>
  );
};

export default RCMReadinessScreen;
