import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Payment Intake",
    description:
      "Automated ingestion from all payment sources. ERA/835 files, EOBs, bank feeds, and lockbox.",
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "Automated Matching & Handling",
    description:
      "AI matches payments to open claims. Auto-calculates adjustments and applies payments.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Exception Processing",
    description:
      "Intelligent routing of variances. AI-suggested resolutions for edge cases.",
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Reconciliation & Reporting",
    description: "Daily bank reconciliation. Real-time cash position updates.",
    icon: <InsightsOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Streamlined Workflow"
      title="How It Works"
      subtitle="Intelligent end-to-end automation from payment intake to final reconciliation"
      steps={steps}
      themeColor="#F47A20"
      backgroundColor="var(--color-white)"
    />
  );
};

export default HowItWorksSection;
