import { Grid } from "@mui/material";

import {
  CheckCircleOutline,
  BoltOutlined,
  SpeedOutlined,
  AttachMoneyOutlined,
} from "@mui/icons-material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";

const stats = [
  {
    value: "93.8%",
    title: "Fully Reconciled Payments",
    description: "Industry-leading reconciliation accuracy",
    icon: <CheckCircleOutline />,
  },
  {
    value: "~0%",
    title: "Posting Errors",
    description: "Virtually zero error rate with AI automation",
    icon: <BoltOutlined />,
  },
  {
    value: "41.6%",
    title: "Faster Turnaround",
    description: "Dramatic reduction in processing time",
    icon: <SpeedOutlined />,
  },
  {
    value: "26%",
    title: "Faster Cash Application",
    description: "Accelerated revenue recognition",
    icon: <AttachMoneyOutlined />,
  },
];

const MeasurableResultsSection = () => {
  return (
    <SectionContainer>
      <MeasureWrapper>
        <SectionTitle
          pillText="Organizations See ROI Within The First 6 Months Of Deployment"
          title="Measurable Results"
          subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
          textColor="white"
        />

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MetricCard {...stat} color="#22c55e" />
            </Grid>
          ))}
        </Grid>
      </MeasureWrapper>
    </SectionContainer>
  );
};

export default MeasurableResultsSection;
