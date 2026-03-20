import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Contract Ingestion & Storage",
    description:
      "Centralized repository for all payer contracts. OCR and data extraction from scanned agreements. Automated versioning and renewal tracking.",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    title: "Rule Configuration",
    description:
      "Translate legalese into computer-parsable logic. Define complex reimbursement models (Fee schedules, % of charges, bundles). Map contract terms to claim data elements.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Real-Time Payment Modeling",
    description:
      "Calculate expected reimbursement for every claim. Cross-reference actual payments vs. contract terms. Flag underpayments and overpayments for immediate follow-up.",
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Performance Analytics & Insights",
    description:
      "Payer compliance reporting. Net-to-expected revenue analysis. Strategy insights for upcoming contract negotiations.",
    icon: <VerifiedOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Contractual Intelligence"
      title="How It Works"
      subtitle="Ensuring clinical outcomes are matched by financial performance through rigorous contract compliance"
      steps={steps}
      themeColor="#F47A20"
      backgroundColor="#fff"
    />
  );
};

export default HowItWorksSection;
