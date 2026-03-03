import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  // HowItSectionContainer,
  HowItWrapper,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { ArrowBox, StepsCard, StepsRow } from "../../home/howItWorks/HowItWorksSection.style";

const steps = [
  {
  title: "Payment Intake",
  description:
    "Automated ingestion from all payment sources. ERA/835 files, EOBs, bank feeds, and lockbox.",
  icon: <InboxOutlinedIcon />,
},
  {
    title: "Automated Matching & Handling",
    description:
      "AI matches payments to open claims.Auto-calculates adjustments and applies payments",
    icon: <SyncAltOutlinedIcon />,
  },
  {
    title: "Exception Processing",
    description:
      "Intelligent routing of variances.AI-suggested resolutions for edge cases",
    icon: <FactCheckOutlinedIcon />,
  },
  {
    title: "Real-Time Reporting",
    description:
      "Daily bank reconciliation.Real-time cash position updates",
    icon: <InsertChartOutlinedIcon />,
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

    <StepsCard sx={{marginTop:4}}>
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
