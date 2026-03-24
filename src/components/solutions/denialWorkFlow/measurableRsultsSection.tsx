import paymentImage9 from "../../../assets/solutions/paymentImage9.png";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "60%",
    title: "",
    description: "Denial Rate Reduction Proactive prevention eliminates denials before submission",
    icon: <ShieldOutlinedIcon />,
  },
  {
    value: "85%",
    title: "",
    description: "Appeal Success Rate AI-generated appeals with evidence-based arguments",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
  {
    value: "3 Days",
    title: "",
    description:
      "Average Appeal Turnaround From denial receipt to appeal submission",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "2M+",
    title: "",
    description:
      "Average Annual Recovery Per facility from improved denial management",
    icon: <PaymentsOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <MetricsSection
      pillIcon={paymentImage9}
      pillText="Organizations see ROI within the first 6 months of deployment"
      title="Measurable Results"
      subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
      stats={stats}
    />
  );
};

export default MeasurableResultsSection;
