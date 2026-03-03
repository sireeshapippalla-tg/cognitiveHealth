import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {  HowItWrapper } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import {
  ArrowBox,
  StepsCard,
  StepsRow,
} from "../../home/howItWorks/HowItWorksSection.style";

const steps = [
  {
    title: "Contract Digitization & Modeling",
    description:
      "Upload contracts (PDF, paper, digital). AI extracts terms, schedules, and rules. System models expected reimbursement logic.",
    icon: <InboxOutlinedIcon />,
  },
  {
    title: "Automated Payment Validation",
    description:
      "Every payment checked against contract. Expected vs actual reimbursement comparison. Expected vs actual reimbursement comparison.",
    icon: <SyncAltOutlinedIcon />,
  },
  {
    title: "Underpayment Recovery",
    description:
      "Auto-generation of appeal letters with contract citations. Supporting documentation compilation. Payer portal submission or mailing.",
    icon: <FactCheckOutlinedIcon />,
  },
   {
    title: "Performance Monitoring & Insights",
    description:
      "Payer compliance tracking. Revenue leakage quantification. Strategic insights for contract negotiations.",
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
