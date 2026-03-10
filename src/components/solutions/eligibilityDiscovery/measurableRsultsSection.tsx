import { Grid } from "@mui/material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { IconWrapper, MeasureWrapper, SectionContainer } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from '../../../assets/solutions/paymentImage9.png';
// import paymentImage10 from '../../../assets/solutions/paymentImage10.svg';
// import paymentImage11 from '../../../assets/solutions/paymentImage11.svg';
// import paymentImage12 from '../../../assets/solutions/paymentImage12.svg';

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";


const stats = [
  {
    value: "98%",
    // title: "Fully Reconciled Payments",
    description: "Pre-Service Verification Rate Virtually all appointments verified before patient arrival",
    // icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
    icon:(<IconWrapper><VerifiedUserOutlinedIcon /></IconWrapper>),
  },
  {
    value: "75%",
    // title: "Posting Errors",
    description: "Reduction in Eligibility Denials Catch coverage issues before service delivery",
    // icon: <img src={paymentImage10} alt="Posting Errors" />,
    icon: (<IconWrapper><ShieldOutlinedIcon /></IconWrapper>),
  },
  {
    value: "30 Seconds",
    // title: "Faster Turnaround",
    description: "Average Verification Time From patient check-in to confirmed eligibility",
    // icon: <img src={paymentImage11} alt="Faster Turnaround" />,
    icon: (<IconWrapper><AccessTimeOutlinedIcon /></IconWrapper>),
  },
  {
    value: "40%",
    // title: "Faster Cash Application",
    description: "Decrease in Bad Debt Better coverage verification = fewer uncompensated services",
    // icon: <img src={paymentImage12} alt="Faster Cash Application" />,
    icon: (<IconWrapper><SavingsOutlinedIcon /></IconWrapper>),
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
