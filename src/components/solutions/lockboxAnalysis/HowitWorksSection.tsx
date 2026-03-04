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

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

const steps = [
  {
    title: "Batch receipt and separating",
    description:
      "Receive digital image of the batches.separate individual unique letters ",
     icon: <Inventory2OutlinedIcon />,
  },
  {
    title: "AI Classification & Extraction",
    description:
      "Document type identification. Payment amount and payer data extraction. Check image and MICR data capture",
    icon: <PsychologyAltOutlinedIcon />,
  },
  {
    title: "Validation & Quality Check",
    description:
      "Automated business rule validation. Confidence scoring and exception flagging. Human review of low-confidence items",
    icon: <VerifiedOutlinedIcon />,
  },
  {
    title: "Payment Data Output",
    description:
      "Structured payment data sent to payment posting. Bank reconciliation file generation. Correspondence routed to appropriate teams",
    icon: <PaymentsOutlinedIcon />,
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
