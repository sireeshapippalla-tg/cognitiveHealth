import { Grid } from "@mui/material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { IconWrapper, MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from '../../../assets/solutions/paymentImage9.png';
// import paymentImage10 from '../../../assets/solutions/paymentImage10.svg';
// import paymentImage11 from '../../../assets/solutions/paymentImage11.svg';
// import paymentImage12 from '../../../assets/solutions/paymentImage12.svg';

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const stats = [
  {
    value: "95%+",
    // title: "Fully Reconciled Payments",
    description: "Clean Claim Rate First-pass acceptance without errors or denials",
    // icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
    icon: (<IconWrapper><VerifiedOutlinedIcon /></IconWrapper>),
  },
  {
    value: "70%",
    // title: "Posting Errors",
    description: "Reduction in Claim Rework Catch and fix issues before submission",
    // icon: <img src={paymentImage10} alt="Posting Errors" />,
    icon: (<IconWrapper><BuildCircleOutlinedIcon /></IconWrapper>),
  },
  {
    value: "50%",
    // title: "Faster Turnaround",
    description: "Faster Coding Turnaround AI-assisted coding accelerates chart review",
    // icon: <img src={paymentImage11} alt="Faster Turnaround" />,
    icon: (<IconWrapper><SpeedOutlinedIcon /></IconWrapper>),
  },
  {
    value: "2-4%",
    // title: "Faster Cash Application",
    description: "Revenue Capture Improvement Optimized coding captures appropriate reimbursement",
    // icon: <img src={paymentImage12} alt="Faster Cash Application" />,
    icon: (<IconWrapper><TrendingUpOutlinedIcon /></IconWrapper>),
  },
];

const MeasurableResultsSection = () => {
  return (
    <SectionContainer>
      <MeasureWrapper>
        <SectionTitle
        pillIcon={paymentImage9}
          pillText="Organizations see ROI within the first 6 months of deployment"
          title="Measurable Results"
          subtitle="Real outcomes from healthcare organizations using the iCAN™ Payment Posting solution"
          textColor="white"
        />

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MetricCard {...stat} color="#78BD43" />
            </Grid>
          ))}
        </Grid>
      </MeasureWrapper>
    </SectionContainer>
  );
};

export default MeasurableResultsSection;
