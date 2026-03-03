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
    title: "Batch receipt and separating",
    description:
      "Receive digital image of the batches.separate individual unique letters ",
     icon: <InboxOutlinedIcon />,
  },
  {
    title: "AI Classification & Extraction",
    description:
      "Document type identification. Payment amount and payer data extraction. Check image and MICR data capture",
    icon: <SyncAltOutlinedIcon />,
  },
  {
    title: "Validation & Quality Check",
    description:
      "Automated business rule validation. Confidence scoring and exception flagging. Human review of low-confidence items",
    icon: <FactCheckOutlinedIcon />,
  },
  {
    title: "Payment Data Output",
    description:
      "Structured payment data sent to payment posting. Bank reconciliation file generation. Correspondence routed to appropriate teams",
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
