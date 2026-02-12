import React, { useState } from "react";
import { Typography, Grid, Stack, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  Container,
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
} from "./Rcmreadiness.style";

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
];

const RCMReadinessScreen: React.FC = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleCheck = (key: string) =>
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = () => {
    setScore(Object.values(checkedItems).filter(Boolean).length);
    setSubmitted(true);
  };

  const handleBack = () =>
    window.history.length > 1 ? navigate(-1) : navigate("/");
  const isAnyChecked = Object.values(checkedItems).some(Boolean);

  return (
    <Container>
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

        {submitted && (
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
        )}

        <FooterWrapper>
          <Typography variant="h5" color="#1e3a8a">
            Ready to automate your RCM workflows?
          </Typography>
          <Typography color="#374151">Contact us at</Typography>
          <FooterEmail variant="h6">info@cognitivehealthit.com</FooterEmail>
          <FooterCaption variant="caption">
            © CognitiveHealth – RCM Automation Solutions
          </FooterCaption>
        </FooterWrapper>
      </HeaderWrapper>
    </Container>
  );
};

export default RCMReadinessScreen;
