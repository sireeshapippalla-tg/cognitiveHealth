import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Document Ingestion",
    description:
      "Automated capture from physical and digital lockboxes. High-speed scanning and indexing of paper documents.",
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "AI Character Recognition",
    description:
      "Advanced OCR and machine learning extract data from EOBs and checks. High-accuracy data capture even for non-standard formats.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Validation & Matching",
    description:
      "Data validated against provider systems. Automatic matching of checks to electronic remits and open invoices.",
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    title: "Seamless Integration",
    description:
      "Direct feed into the billing system. Daily reconciliation reports and unified cash position visibility.",
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
      themeColor="#F47A20"
      backgroundColor="#fff"
    />
  );
};

export default HowItWorksSection;
