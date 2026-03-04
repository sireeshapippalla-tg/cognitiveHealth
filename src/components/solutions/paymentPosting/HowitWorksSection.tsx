import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  // HowItSectionContainer,
  HowItWrapper,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
// import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
// import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
// import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
// import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import {
  ArrowBox,
  StepsCard,
  StepsRow,
} from "../../home/howItWorks/HowItWorksSection.style";

import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const steps = [
  {
    title: "Payment Intake",
    description:
      "Automated ingestion from all payment sources. ERA/835 files, EOBs, bank feeds, and lockbox.",
    // icon: <InboxOutlinedIcon />,
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "Automated Matching & Handling",
    description:
      "AI matches payments to open claims.Auto-calculates adjustments and applies payments",
    // icon: <SyncAltOutlinedIcon />,
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Exception Processing",
    description:
      "Intelligent routing of variances.AI-suggested resolutions for edge cases",
    // icon: <FactCheckOutlinedIcon />,
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Real-Time Reporting",
    description: "Daily bank reconciliation.Real-time cash position updates",
    // icon: <InsertChartOutlinedIcon />,
    icon: <InsightsOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    // <HowItSectionContainer>
    <HowItWrapper>
      <SectionTitle
        title="How It Works"
        // subtitle="Streamlined workflow from payment intake to final reconciliation"
      />

      <StepsCard sx={{ marginTop: 4 }}>
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
    </HowItWrapper>
    // </HowItSectionContainer>
  );
};

export default HowItWorksSection;
