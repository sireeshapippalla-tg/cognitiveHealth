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
    title: "Automated Eligibility Check",
    description:
      "Real-time verification at scheduling or registration. Multi-payer batch verification overnight. Integration with EMR/practice management systems.",
    icon: <SearchOutlinedIcon />,
  },
  {
    title: "Benefit Discovery & Analysis",
    description:
      "Extract detailed coverage information. Identify authorization requirements. Calculate patient responsibility estimates.",
    icon: <SettingsSuggestOutlinedIcon />,
  },
  {
    title: "Alert & Workflow Triggering",
    description:
      "Flag coverage issues for resolution. Trigger authorization workflows when needed. Notify financial counseling for high patient liability.",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Scheduled re-verification before appointments. Coverage change detection. Expired authorization alerts.",
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Multiple Provider Settings",
    description:
      "Acute Care & Hospital Systems. Home Health & Hospice. Behavioral Health & Substance Use. Long-Term Care & Skilled Nursing Facilities. Specialty & Ambulatory Providers. Physician Practices & Medical Groups.",
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
      backgroundColor="var(--color-white)"
    />
  );
};

export default HowItWorksSection;
