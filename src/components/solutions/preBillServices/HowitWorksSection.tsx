
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import {
  HowItSectionContainer,
  HowItWrapper,
  StepsCard,
  StepsRow,
  ArrowBox,
  ButtonsRow,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import AppButton from "../../ui/appButton/AppButton";

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

const HowItWorksSection = () => {
  return (
    <HowItSectionContainer>
      <HowItWrapper>
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
          <AppButton variantType="outline">
            See Platform in Action
          </AppButton>
        </ButtonsRow>
      </HowItWrapper>
    </HowItSectionContainer>
  );
};

export default HowItWorksSection;
