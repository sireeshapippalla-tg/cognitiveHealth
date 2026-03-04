import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HowItWrapper } from "./solutions.style";
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

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const steps = [
  {
    title: "Contract Digitization & Modeling",
    description:
      "Upload contracts (PDF, paper, digital). AI extracts terms, schedules, and rules. System models expected reimbursement logic.",
    // icon: <InboxOutlinedIcon />,
    icon: <DescriptionOutlinedIcon />,
  },
  {
    title: "Automated Payment Validation",
    description:
      "Every payment checked against contract. Expected vs actual reimbursement comparison.  Variance flagging and prioritization.",
    // icon: <SyncAltOutlinedIcon />,
    icon: <RuleOutlinedIcon />,
  },
  {
    title: "Underpayment Recovery",
    description:
      "Auto-generation of appeal letters with contract citations. Supporting documentation compilation. Payer portal submission or mailing.",
    // icon: <FactCheckOutlinedIcon />,
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    title: "Performance Monitoring & Insights",
    description:
      "Payer compliance tracking. Revenue leakage quantification. Strategic insights for contract negotiations.",
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
    // {/* </HowItSectionContainer> */}
  );
};

export default HowItWorksSection;
