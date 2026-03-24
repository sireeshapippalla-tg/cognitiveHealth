import paymentImage9 from "../../../assets/solutions/paymentImage9.png";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "95%",
    title: "",
    description: "Clean Claim Rate First-pass acceptance without errors or denials",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    value: "70% ",
    title: "",
    description:
      "Reduction in Claim Rework Catch and fix issues before submission",
    icon: <GppGoodOutlinedIcon />,
  },
  {
    value: "50%",
    title: "",
    description: "Faster Coding Turnaround AI-assisted coding accelerates chart review",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "2-4%",
    title: "",
    description: "Revenue Capture Improvement Optimized coding captures appropriate reimbursement",
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
