import paymentImage9 from "../../../assets/solutions/paymentImage9.png";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "95%",
    title: "Claim Accuracy",
    description: "Reduction in coding errors before initial submission",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    value: "10+% ",
    title: "Revenue Lift",
    description:
      "Increase in net patient revenue through charge capture optimization",
    icon: <GppGoodOutlinedIcon />,
  },
  {
    value: "X3",
    title: "Review Velocity",
    description: "Increase in pre-bill review speed using AI validation",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "50%",
    title: "Audit Efficiency",
    description: "Reduction in manual audit overhead for compliance teams",
    icon: <SavingsOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <MetricsSection
      pillIcon={paymentImage9}
      pillText="Accuracy Before Billing"
      title="Measurable Results"
      subtitle="Real outcomes from healthcare organizations using the iCAN™ Pre-Bill Review solution"
      stats={stats}
    />
  );
};

export default MeasurableResultsSection;
