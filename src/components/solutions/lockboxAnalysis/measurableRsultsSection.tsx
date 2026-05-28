import paymentImage9 from "../../../assets/solutions/paymentImage9.webp";

import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "95%",
    title: "",
    description:
      "Straight-Through Processing Rate Majority of lockbox items require no human intervention",
    icon: <CloudDoneOutlinedIcon />,
  },
  {
    value: "Same Business Day",
    title: "",
    description:
      "Average Mail-to-Data Time From mailbox receipt to posting-ready data",
    icon: <FindInPageOutlinedIcon />,
  },
  {
    value: "70%",
    title: "",
    description:
      "Reduction in Manual Data Entry Eliminate typing from paper EOBs",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "2 Days",
    title: "",
    description: "Faster Cash Application Accelerated recognition of payments",
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
