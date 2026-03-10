import { Grid } from "@mui/material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { IconWrapper, MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
// import paymentImage10 from "../../../assets/solutions/paymentImage10.svg";
// import paymentImage11 from "../../../assets/solutions/paymentImage11.svg";
// import paymentImage12 from "../../../assets/solutions/paymentImage12.svg";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";


const stats = [
  {
    value: "$1.5M+",
    // title: "Fully Reconciled Payments",
    description: "Average Annual Underpayment Recovery Per facility from variance detection and appeals",
    // icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
    icon: (<IconWrapper><AttachMoneyOutlinedIcon /></IconWrapper>),
  },
  {
    value: "99.9%",
    // title: "Posting Errors",
    description: "Payment Accuracy Validation Every payment checked against contract terms",
    // icon: <img src={paymentImage10} alt="Posting Errors" />,
    icon: (<IconWrapper><VerifiedOutlinedIcon /></IconWrapper>),
  },
  {
    value: "24 Hours",
    // title: "Faster Turnaround",
    description: "Variance Detection Time From payment receipt to underpayment identification",
    // icon: <img src={paymentImage11} alt="Faster Turnaround" />,
    icon: (<IconWrapper><AccessTimeOutlinedIcon /></IconWrapper>),
  },
  {
    value: "85%",
    // title: "Faster Cash Application",
    description: "Underpayment Appeal Success Rate Contract-based appeals with documented evidence",
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
              <MetricCard {...stat} color="var(--color-green)" />
            </Grid>
          ))}
        </Grid>
      </MeasureWrapper>
    </SectionContainer>
  );
};

export default MeasurableResultsSection;
