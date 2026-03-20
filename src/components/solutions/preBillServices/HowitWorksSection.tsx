import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Claim Capture & Ingestion",
    description:
      "Automated import of unbilled claims and encounters. Multi-source data aggregation including clinical notes and orders.",
    icon: <FactCheckOutlinedIcon />,
  },
  {
    title: "AI Scrubbing & Validation",
    description:
      "Cross-check against payer-specific rules and CCI edits. Identification of missing codes, modifiers, or documentation.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Variance Resolution",
    description:
      "Intelligent routing of flagged claims to coders. AI-suggested corrections for common billing errors.",
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Final Audit & Release",
    description:
      "Secondary quality check for high-value encounters. Clean claims released directly to the clearinghouse.",
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
      backgroundColor="#fff"
    />
  );
};

export default HowItWorksSection;
