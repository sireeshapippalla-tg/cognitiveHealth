import SplitSection from "../../components/ui/SplitSection/SplitSection";
import paymentPostingImage from "../../assets/paymentpostingImage.svg";
import FeatureSection from "../../components/ui/featureSection/FeatureSection";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Container, Grid, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BoltIcon from "@mui/icons-material/Bolt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import StorageIcon from "@mui/icons-material/Storage";
import ExpandableCard, {
  type ExpandableItem,
} from "../../components/ui/teamCard/TeamCard";
import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { MetricCard } from "../../components/ui/metricCard/MetricCard";
import {
  SectionContainer,
  Wrapper,
} from "../../components/home/ImpactSection/ImpactSection.styles";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import {
  ArrowBox,
  ButtonsRow,
  StepsCard,
  StepsRow,
} from "../../components/home/howItWorks/HowItWorksSection.style";
import { ProcessStep } from "../../components/ui/processStep/ProcessStep";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AppButton from "../../components/ui/appButton/AppButton";
import CallToActionSection from "../../components/home/CTA/CTASection";

const stats = [
  {
    value: "93.8%",
    title: "Fully Reconciled Payments",
    description: "Industry-leading reconciliation accuracy",
    icon: <CheckCircleOutlineIcon />,
  },
  {
    value: "~0%",
    title: "Posting Errors",
    description: "Virtually zero error rate with AI automation",
    icon: <BoltOutlinedIcon />,
  },
  {
    value: "41.6%",
    title: "Faster Turnaround",
    description: "Dramatic reduction in processing time",
    icon: <SpeedOutlinedIcon />,
  },
  {
    value: "26%",
    title: "Faster Cash Application",
    description: "Accelerated revenue recognition",
    icon: <AttachMoneyOutlinedIcon />,
  },
];

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Unified Payment Workbench",
    description:
      "A centralized command center that brings together all payment activities across multiple sources...",
    icon: <DashboardIcon />,
    defaultOpen: true, // 👈 first one open like screenshot
  },
  {
    id: 2,
    title: "Automated Payment Posting Engine",
    icon: <BoltIcon />,
  },
  {
    id: 3,
    title: "Exception and Variance Manager",
    icon: <ErrorOutlineIcon />,
  },
  {
    id: 4,
    title: "Real-Time Cash Analytics Dashboard",
    icon: <InsightsIcon />,
  },
  {
    id: 5,
    title: "Multi-Source Data Connector",
    icon: <StorageIcon />,
  },
];

const features = [
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Centralized Payment Processing",
    description:
      "Consolidate all payment sources into a single, unified workspace for streamlined operations and enhanced visibility.",
  },
  {
    icon: <BoltOutlinedIcon />,
    title: "Automated Posting and Reconciliation",
    description:
      "Leverage AI-powered automation to match, post, and reconcile payments with unprecedented speed and accuracy.",
  },
  {
    icon: <MonitorHeartOutlinedIcon />,
    title: "Reduced Errors and Faster Turnaround",
    description:
      "Eliminate manual data entry errors and accelerate payment processing with intelligent automation and exception handling.",
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Real-Time Cash Visibility",
    description:
      "Gain instant insights into your cash position with live dashboards and analytics that drive informed decision-making.",
  },
];

const steps = [
  {
    title: "Payment Intake",
    description:
      "Automated ingestion from multiple sources including credit cards, paper checks, EFTs, and electronic remittances (835 files). All payment data flows into the unified workbench.",
    icon: <CloudUploadOutlinedIcon fontSize="small" />,
  },
  {
    title: "Automated Matching & Handling",
    description:
      "AI-powered engine applies configurable business rules to automatically match payments with patient accounts, claims, and invoices. Unmatched payments and variances are intelligently identified and routed for resolution.",
    icon: <SyncAltOutlinedIcon fontSize="small" />,
  },
  {
    title: "Real-Time Reporting",
    description:
      "Comprehensive analytics dashboards provide instant visibility into cash positions, reconciliation status, team performance, and operational KPIs.",
    icon: <BarChartOutlinedIcon fontSize="small" />,
  },
];

const SolutionsPage = () => {
  return (
    <>
      <SplitSection
        title="Payment Posting & Advanced Reconciliation"
        description="Super Charge your revenue cycle with AI Agents"
        image={paymentPostingImage}
        primaryAction={{ label: "Request a Demo" }}
        secondaryAction={{ label: "See Platform in Action →" }}
      />
      <FeatureSection
        title="Transform Your Payment Operations"
        subtitle="The iCAN™ Payment Posting & Advanced Reconciliation solution delivers end-to-end automation for healthcare payment processing, combining AI-driven intelligence with enterprise-grade reliability to optimize your revenue cycle performance."
        background="#f3f4f6"
        items={features}
        columns={4}
      />
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        {/* Section Header */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          mb={2}
          fontSize={{ xs: 26, md: 32 }}
        >
          Core Capabilities
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
          mb={6}
          fontSize={{ xs: 14, md: 16 }}
        >
          Powerful features designed to streamline every aspect of payment
          processing and reconciliation
        </Typography>
        <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid size={{ xs: 12 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid>
      </Container>
      <SectionContainer bg="#ea580c">
        <Wrapper>
          <SectionTitle
            pillText="Organizations See ROI Within The First 6 Months Of Deployment"
            title="Measurable Results"
            subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
            maxWidth={700}
            textColor="white"
          />

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <MetricCard
                  value={stat.value}
                  title={stat.title}
                  description={stat.description}
                  icon={stat.icon}
                  color={"#22c55e"}
                />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </SectionContainer>
      <SectionContainer sx={{ backgroundColor: "#f9fafb" }}>
        <Wrapper>
          <SectionTitle
            title="How It Works"
            subtitle="Streamlined workflow from payment intake to final reconciliation"
          />

          <StepsCard>
            <StepsRow>
              {steps.map((step, index) => (
                <>
                  <ProcessStep
                    key={step.title}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />

                  {index !== steps.length - 1 && (
                    <ArrowBox>
                      <ArrowForwardIcon />
                    </ArrowBox>
                  )}
                </>
              ))}
            </StepsRow>
          </StepsCard>

          <ButtonsRow>
            <AppButton variantType="primary">Request a Demo</AppButton>
            <AppButton variantType="outline">See Platform in Action</AppButton>
          </ButtonsRow>
        </Wrapper>
      </SectionContainer>
      <CallToActionSection />
    </>
  );
};

export default SolutionsPage;
