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
    value: "60%",
    // title: "Fully Reconciled Payments",
    description: "Denial Rate Reduction Proactive prevention eliminates denials before submission",
    icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
  },
  {
    value: "85%",
    // title: "Posting Errors",
    description: "Appeal Success Rate AI-generated appeals with evidence-based arguments",
    icon: <img src={paymentImage10} alt="Appeal Success Rate" />,
  },
  {
    value: "3 Days",
    // title: "Faster Turnaround",
    description: "Average Appeal Turnaround From denial receipt to appeal submission",
    icon: <img src={paymentImage11} alt="Faster Turnaround" />,
  },
  {
    value: "2M+",
    // title: "Faster Cash Application",
    description: "Average Annual Recovery Per facility from improved denial management",
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
