// import { Grid, Box, Typography, Container } from "@mui/material";
// import { MeasureWrapper, SectionContainer } from "./solutions.style";
// import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
// import { motion } from "framer-motion";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import MetricsSection from "../../ui/metricsSection/MetricsSection";

const stats = [
  {
    value: "98%",
    title: "",
    description: "Pre-Service Verification Rate Virtually all appointments verified before patient arrival",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    value: "75%",
    title: "",
    description: "Reduction in Eligibility Denials Catch coverage issues before service delivery",
    icon: <ShieldOutlinedIcon />,
  },
  {
    value: "30 Seconds",
    title: "",
    description: "Average Verification Time From patient check-in to confirmed eligibility",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    value: "40%",
    title: "",
    description: "Decrease in Bad Debt Better coverage verification = fewer uncompensated services",
    icon: <SavingsOutlinedIcon />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <MetricsSection
      pillIcon={paymentImage9}
      pillText="Coverage Verified Instantly"
      title="Measurable Results"
      subtitle="Real outcomes from healthcare organizations using the iCAN™ Eligibility Discovery solution"
      stats={stats}
    />
  );
};

export default MeasurableResultsSection;
