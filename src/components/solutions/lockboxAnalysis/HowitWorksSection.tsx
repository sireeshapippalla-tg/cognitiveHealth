import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.webp";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Batch Receipt and Separating",
    description:
      "Receive digital image of the batches. separate individual unique letters.",
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "AI Classification & Extraction",
    description:
      "Document type identification. Payment amount and payer data extraction. Check image and MICR data capture.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Validation & Quality Check",
    description:
      "Automated business rule validation. Confidence scoring and exception flagging. Human review of low-confidence items.",
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Payment Data Output",
    description:
      "Structured payment data sent to payment posting. Bank reconciliation file generation.Correspondence routed to appropriate teams.",
    icon: <InsightsOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Intelligent Ingestion"
      title="How It Works"
      subtitle="Transforming paper and digital lockbox data into actionable financial intelligence"
      steps={steps}
      themeColor="#eb7b33"
      backgroundColor="var(--color-white)"
    />
  );
};

export default HowItWorksSection;
