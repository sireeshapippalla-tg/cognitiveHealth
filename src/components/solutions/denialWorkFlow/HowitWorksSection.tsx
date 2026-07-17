import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import paymentImage9 from "../../../assets/solutions/paymentImage9.webp";
import { ReusableHowItWorks } from "../../ui/HowItWorks/ReusableHowItWorks";
import type { HowItWorksStep } from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Denial Detection & Intake",
    description:
      "Automated capture from 835 remittances. Real-time denial reason classification. Priority scoring and routing.",
    icon: <MoveToInboxOutlinedIcon />,
  },
  {
    title: "Root Cause Analysis",
    description:
      "AI identifies patterns and systemic issues. Payer-specific denial trend analysis. Provider and service line performance tracking.",
    icon: <InsightsOutlinedIcon />,
  },
  {
    title: "Automated Resolution & Appeals",
    description:
      "Low-dollar denials auto-resolved via payer portals. High-value denials get AI-generated appeals. Medical records automatically attached.",
    icon: <GavelOutlinedIcon />,
  },
  {
    title: "Prevention & Continuous Improvement",
    description:
      "Insights feed back to pre-submission scrubbing. Training and workflow adjustments. Ongoing monitoring and optimization.",
    icon: <TrendingUpOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    <ReusableHowItWorks
      pillIcon={paymentImage9}
      pillText="Smart Recovery Process"
      title="How It Works"
      subtitle="An intelligent approach to detecting, resolving, and preventing healthcare claim denials"
      steps={steps}
      themeColor="#eb7b33"
      backgroundColor="var(--color-white)"
    />
  );
};

export default HowItWorksSection;
