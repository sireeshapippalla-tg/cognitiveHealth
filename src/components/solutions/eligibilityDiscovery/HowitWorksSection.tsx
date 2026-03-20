import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Patient Search & Data Ingestion",
    description:
      "Automated capture of patient demographics. Direct integration with scheduling and ADT systems.",
    icon: <SearchOutlinedIcon />,
  },
  {
    title: "Real-Time Eligibility Check",
    description:
      "Instant 270/271 electronic transactions. Verification of active coverage, co-pay, and deductibles.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Benefit Level Extraction",
    description:
      "Detailed breakdown of service-specific benefits. Identification of secondary and tertiary payers.",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    title: "Payer Policy Content Research",
    description:
      "AI-driven research of specific payer rules. Documentation of prior authorization requirements.",
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Final Verification & Updates",
    description:
      "Consolidated verification report. Automatic update of patient records in the HIS/PMS.",
    icon: <VerifiedOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Coverage Intelligence"
      title="How It Works"
      subtitle="Ensuring accurate coverage and reducing front-end denials through automated verification"
      steps={steps}
      themeColor="#F47A20"
      backgroundColor="#fff"
    />
  );
};

export default HowItWorksSection;
