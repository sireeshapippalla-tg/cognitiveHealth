// import { Grid, Box, Typography, Container } from "@mui/material";
// import { MeasureWrapper, SectionContainer } from "./solutions.style";
// import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
// import { motion } from "framer-motion";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "$1.5M+",
    title: "Annual Recovery",
    description: "Average annual recovery per facility from variance detection",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    value: "99.9%",
    title: "Payment Accuracy",
    description: "Every payment checked against contract terms",
    icon: <VerifiedOutlinedIcon />,
  },
  {
    value: "24 Hours",
    title: "Detection Time",
    description: "From payment receipt to underpayment identification",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "85%",
    title: "Appeal Success",
    description: "Contract-based appeals with documented evidence",
    icon: <TrendingUpOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <MetricsSection
      pillIcon={paymentImage9}
      pillText="Contract Accuracy Guaranteed"
      title="Measurable Results"
      subtitle="Real outcomes from healthcare organizations using the iCAN™ Contract Analysis solution"
      stats={stats}
    />
  );
};

export default MeasurableResultsSection;
