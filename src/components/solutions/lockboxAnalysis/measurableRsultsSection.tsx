import { Grid } from "@mui/material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from '../../../assets/solutions/paymentImage9.png';
import paymentImage10 from '../../../assets/solutions/paymentImage10.svg';
import paymentImage11 from '../../../assets/solutions/paymentImage11.svg';
import paymentImage12 from '../../../assets/solutions/paymentImage12.svg';

const stats = [
  {
    value: "95%",
    // title: "Fully Reconciled Payments",
    description: "Straight-Through Processing Rate Majority of lockbox items require no human intervention",
    icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
  },
  {
    value: "Same Business Day",
    // title: "Posting Errors",
    description: "Average Mail-to-Data Time From mailbox receipt to posting-ready data",
    icon: <img src={paymentImage10} alt="Posting Errors" />,
  },
  {
    value: "70%",
    // title: "Faster Turnaround",
    description: "Reduction in Manual Data Entry Eliminate typing from paper EOBs",
    icon: <img src={paymentImage11} alt="Faster Turnaround" />,
  },
  {
    value: "2 Days",
    // title: "Faster Cash Application",
    description: "Faster Cash Application Accelerated recognition of payments",
    icon: <img src={paymentImage12} alt="Faster Cash Application" />,
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
