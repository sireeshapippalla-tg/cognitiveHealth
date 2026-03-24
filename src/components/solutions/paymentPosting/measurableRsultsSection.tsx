import paymentImage9 from "../../../assets/solutions/paymentImage9.png";

import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "93.8%",
    title: "Fully Reconciled Payments",
    description: "Industry-leading reconciliation accuracy",
    icon: <TaskAltOutlinedIcon />,
  },
  {
    value: "98%+",
    title: "Posting Accuracy",
    description: "Virtually zero error rate with AI automation",
    icon: <ShieldOutlinedIcon />,
  },
  {
    value: "41.6%",
    title: "Faster Turnaround",
    description: "Dramatic reduction in processing time",
    icon: <BoltOutlinedIcon />,
  },
  {
    value: "26%",
    title: "Faster Cash Application",
    description: "Accelerated revenue recognition",
    icon: <MonetizationOnOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <MetricsSection
      pillIcon={paymentImage9}
      pillText="Outcome-Focused Innovation"
      title="Measurable Results"
      subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
      stats={stats}
    />
  );
};

export default MeasurableResultsSection;
