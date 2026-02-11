import React from "react";
import {  Typography, Grid, Stack, Divider } from "@mui/material";
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
} from "./Rcmreadiness.style";

/* TYPES */
type ChecklistItem = { label: string };

type SectionProps = {
  title: string;
  icon?: string;
  items: ChecklistItem[];
};

/* SECTION CARD */
const SectionCard: React.FC<SectionProps> = ({ title, icon, items }) => (
  <SectionPaper elevation={0}>
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        {icon && <Typography fontSize={20}>{icon}</Typography>}
        <SectionTitle variant="h6">{title}</SectionTitle>
      </Stack>

      <Divider />

      <Stack spacing={1}>
        {items.map((item, index) => (
          <Stack key={index} direction="row" spacing={1} alignItems="flex-start">
            <StyledCheckbox size="small" />
            <Typography variant="body2" color="#1f2937">
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  </SectionPaper>
);

/* RESULT CARD */
const ResultCard = () => (
  <ResultPaper elevation={0}>
    <Typography variant="overline" fontWeight={600} letterSpacing={1}>
      RESULTS ANALYSIS
    </Typography>

    <Typography mt={2} variant="h6" fontWeight={500}>
      If you checked <strong>15 or more boxes</strong>, your organization is a
      prime candidate for AI automation.
    </Typography>

    <Typography mt={2}>
      You are likely facing significant manual burdens that iCAN™ technology can
      alleviate immediately.
    </Typography>
  </ResultPaper>
);

/* DATA */
const sections: SectionProps[] =  [
  {
    title: "Correspondence Classification",
    icon: "📁",
    items: [
      { label: "Receive daily high volumes of correspondence" },
      { label: "Documents arrive via fax, email, portals, and mail" },
      { label: "Staff manually reviews, labels, and sorts documents" },
      { label: "Handling 5+ categories (denials, medical records, appeals)" },
    ],
  },
  {
    title: "Payment Posting & Reconciliation",
    icon: "💰",
    items: [
      { label: "Manual posting of non‑standard ERAs or paper EOBs" },
      { label: "Significant delays in month‑end reconciliation" },
      { label: "Difficulty matching bulk payments to individual claims" },
      { label: "High volume of unposted cash on the balance sheet" },
    ],
  },
  {
    title: "EMR & Facility Complexity",
    icon: "🏥",
    items: [
      { label: "Operating across multiple incompatible EMR systems" },
      { label: "Managing billing for multiple facility locations" },
      { label: "Lack of centralized data integration between sites" },
      { label: "Inconsistent data formats require manual work" },
    ],
  },
  {
    title: "Operational Challenges",
    icon: "⏳",
    items: [
      { label: "Staff turnover or shortages in the RCM department" },
      { label: "Missed appeal deadlines due to routing delays" },
      { label: "Backlogs in work queues creating cash‑flow delays" },
    ],
  },
  {
    title: "AI Compatibility & Readiness",
    icon: "🤖",
    items: [
      { label: "Current inputs are digital (PDF, 835/837, scanned images)" },
      { label: "IT team is open to API, SFTP, or secure pilot access" },
      { label: "Workflows are documented or can be mapped clearly" },
      { label: "Data is accessible via shared folders or DMS" },
    ],
  },
  {
    title: "Organizational Readiness",
    icon: "🤝",
    items: [
      { label: "Key stakeholders support automation" },
      { label: "Budget is available for efficiency tools" },
      { label: "Organization is willing to pilot new technology" },
      { label: "There is a designated champion to drive the initiative" },
    ],
  },
];

/* MAIN SCREEN */
const RCMReadinessScreen: React.FC = () => (
  <Container>
    <HeaderWrapper>
      <Stack spacing={2} mb={6}>
        <HeaderTitle>Revenue Cycle Management AI Readiness Assessment</HeaderTitle>
        <HeaderSubText>
          Use this checklist to determine if your organization is ready for
          AI-driven automation.
        </HeaderSubText>
      </Stack>

      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid  size={{xs:12,md:6}} key={index}>
            <SectionCard {...section} />
          </Grid>
        ))}
      </Grid>

      <ResultCard />

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

export default RCMReadinessScreen;
