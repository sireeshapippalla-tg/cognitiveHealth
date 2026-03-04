
import FeatureSection from "../../ui/featureSection/FeatureSection";
// import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.png';
// import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.png';
// import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.png';
// import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.png';

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const features = [
  {
    icon: <ShieldOutlinedIcon />,
    title: "Proactive Denial Prevention",
    description:
      "AI analyzes claim data pre-submission to identify and correct issues that would lead to denials, reducing denial rates by 40-60% before claims ever leave your system.",
  },
  {
    icon: <RuleOutlinedIcon />,
    title: "Intelligent Denial Prioritization",
    description:
      "Focus your team's energy on high-value, winnable denials. Our engine scores each denial by recovery probability, dollar amount, and time sensitivity—maximizing ROI on appeals efforts.",
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Automated Appeal Generation ",
    description:
      "AI writes compelling, evidence-based appeal letters in seconds, pulling relevant clinical documentation, payer policies, and regulatory citations—reducing appeal preparation time by 85%.",
  },
  {
    icon: <InsightsOutlinedIcon />,
    title: "Root Cause Intelligence ",
    description:
      "Identify systemic issues driving denials across payers, providers, and service lines. Our analytics pinpoint exactly where to focus process improvements for maximum impact.",
  },
];


const TransformSection = () => {
  return (
    <FeatureSection
      title="Transform Denials from Revenue Drain to Recovery Engine"
      subtitle="The iCAN™ Denials Workflow solution doesn't just help you work denials faster—
                it prevents them from happening in the first place. Our AI agents identify 
                denial patterns, generate evidence-based appeals, and provide actionable 
                insights to eliminate root causes across your revenue cycle."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
