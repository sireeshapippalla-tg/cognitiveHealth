import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Contract Digitization & Modeling",
    description:
      "Upload contracts (PDF, paper, digital). AI extracts terms, schedules, and rules. System models expected reimbursement logic.",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    title: "Automated Payment Validation",
    description:
      "Every payment checked against contract. Expected vs actual reimbursement comparison. Expected vs actual reimbursement comparison.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Underpayment Recovery",
    description:
      "Auto-generation of appeal letters with contract citations.Supporting documentation compilation. Payer portal submission or mailing.",
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Performance Monitoring & Insights",
    description:
      "Payer compliance tracking.Revenue leakage quantification.Strategic insights for contract negotiations.",
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
