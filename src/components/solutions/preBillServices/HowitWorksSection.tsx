import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Pre-Submission Claim Intake",
    description:
      "Claims staged from billing system. Clinical documentation attached. Patient eligibility and authorization verified.",
    icon: <FactCheckOutlinedIcon />,
  },
  {
    title: "AI Validation & Scrubbing",
    description:
      "Comprehensive edit checking (payer, NCCI, compliance).Coding validation against documentation.Reimbursement optimization analysis.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Exception Review & Correction",
    description:
      "Flagged claims routed to coding staff.AI provides correction suggestions.Bulk resolution for recurring issues.",
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Clean Claim Submission",
    description:
      "Validated claims released to clearinghouse.Real-time submission tracking.Error monitoring and continuous improvement.",
    icon: <VerifiedOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Data Integrity First"
      title="How It Works"
      subtitle="Ensuring clinical and financial data alignment before the claim ever leaves your system"
      steps={steps}
      themeColor="#F47A20"
      backgroundColor="var(--color-white)"
    />
  );
};

export default HowItWorksSection;
