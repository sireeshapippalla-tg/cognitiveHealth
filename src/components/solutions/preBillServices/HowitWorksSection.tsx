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
import {
  ArrowBox,
  StepsCard,
  StepsRow,
} from "../../home/howItWorks/HowItWorksSection.style";

import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const steps = [
  {
    title: "Pre-Submission Claim Intake",
    description:
      "Claims staged from billing system. Clinical documentation attached. Patient eligibility and authorization verified.",
    //  icon: <InboxOutlinedIcon />,
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "AI Validation & Scrubbing",
    description:
      "Comprehensive edit checking (payer, NCCI, compliance). Coding validation against documentation. Reimbursement optimization analysis.",
    // icon: <SyncAltOutlinedIcon />,
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Exception Review & Correction",
    description:
      "Flagged claims routed to coding staff. AI provides correction suggestions. Bulk resolution for recurring issues.",
    // icon: <InsertChartOutlinedIcon />,
    icon: <RateReviewOutlinedIcon />,
  },
  {
    title: "Clean Claim Submission",
    description:
      "Validated claims released to clearinghouse. Real-time submission tracking. Error monitoring and continuous improvement.",
    // icon: <InsertChartOutlinedIcon />,
    icon: <SendOutlinedIcon />,
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
