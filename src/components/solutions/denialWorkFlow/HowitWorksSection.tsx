import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  // HowItSectionContainer,
  HowItWrapper,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
// import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
// import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
// import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
// import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { ArrowBox, StepsCard, StepsRow } from "../../home/howItWorks/HowItWorksSection.style";

import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";


const steps = [
  {
    title: "Denial Detection & Intake",
    description:
      "Automated capture from 835 remittances. Real-time denial reason classification. Priority scoring and routing",
    //  icon: <InboxOutlinedIcon />,
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "Root Cause Analysis",
    description:
      "AI identifies patterns and systemic issues.Payer-specific denial trend analysis.Provider and service line performance tracking",
    // icon: <SyncAltOutlinedIcon />,
    icon: <InsightsOutlinedIcon />,
  },
  {
    title: "Automated Resolution & Appeals",
    description:
      "Low-dollar denials auto-resolved via payer portals. High-value denials get AI-generated appeals. Medical records automatically attached",
    // icon: <FactCheckOutlinedIcon />,
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Prevention & Continuous Improvement",
    description:
      "Insights feed back to pre-submission scrubbing. Training and workflow adjustments. Ongoing monitoring and optimization",
    // icon: <InsertChartOutlinedIcon />,
    icon: <TrendingUpOutlinedIcon />,
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
    // {/* </HowItSectionContainer> */}
  );
};

export default HowItWorksSection;
