import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import FeatureSection from "../../ui/featureSection/FeatureSection";

const features = [
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Centralized Payment Processing",
    description:
      "Consolidate all payment sources into a single, unified workspace for streamlined operations and enhanced visibility.",
  },
  {
    icon: <BoltOutlinedIcon />,
    title: "Automated Posting and Reconciliation",
    description:
      "Leverage AI-powered automation to match, post, and reconcile payments with unprecedented speed and accuracy.",
  },
  {
    icon: <MonitorHeartOutlinedIcon />,
    title: "Reduced Errors and Faster Turnaround",
    description:
      "Eliminate manual data entry errors and accelerate payment processing with intelligent automation and exception handling.",
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Real-Time Cash Visibility",
    description:
      "Gain instant insights into your cash position with live dashboards and analytics that drive informed decision-making.",
  },
];

const TransformSection = () => {
  return (
    <FeatureSection
      title="Transform Your Payment Operations"
      subtitle="The iCAN™ Payment Posting & Advanced Reconciliation solution delivers end-to-end automation for healthcare payment processing, combining AI-driven intelligence with enterprise-grade reliability to optimize your revenue cycle performance."
      background="#f3f4f6"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
