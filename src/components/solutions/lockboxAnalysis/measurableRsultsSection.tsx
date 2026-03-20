import paymentImage9 from "../../../assets/solutions/paymentImage9.png";

import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "99.5%",
    title: "Extraction Accuracy",
    description:
      "Industry-leading accuracy in digitizing paper EOBs and checks",
    icon: <CloudDoneOutlinedIcon />,
  },
  {
    value: "100%",
    title: "Audit Visibility",
    description:
      "Full digital trail for every document received in the lockbox",
    icon: <FindInPageOutlinedIcon />,
  },
  {
    value: "X5",
    title: "Faster Processing",
    description:
      "Increase in processing speed compared to manual lockbox handling",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "30%",
    title: "Cost Reduction",
    description:
      "Average reduction in operational overhead for lockbox management",
    icon: <TrendingUpOutlinedIcon />,
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
