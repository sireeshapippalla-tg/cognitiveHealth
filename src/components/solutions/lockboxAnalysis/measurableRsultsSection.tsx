import { Grid } from "@mui/material";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import {
  IconWrapper,
  MeasureWrapper,
  SectionContainer,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import paymentImage9 from "../../../assets/solutions/paymentImage9.png";
// import paymentImage10 from "../../../assets/solutions/paymentImage10.svg";
// import paymentImage11 from "../../../assets/solutions/paymentImage11.svg";
// import paymentImage12 from "../../../assets/solutions/paymentImage12.svg";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentsIcon from "@mui/icons-material/Payments";

const stats = [
  {
    value: "95%",
    // title: "Fully Reconciled Payments",
    description:
      "Straight-Through Processing Rate Majority of lockbox items require no human intervention",
    // icon: <img src={paymentImage10} alt="Fully Reconciled Payments" />,
    icon: (  <IconWrapper><AutoAwesomeIcon sx={{ fontSize: 30 }} /></IconWrapper>),
  },
  {
    value: "Same Business Day",
    // title: "Posting Errors",
    description:
      "Average Mail-to-Data Time From mailbox receipt to posting-ready data",
    // icon: <img src={paymentImage10} alt="Posting Errors" />,
    icon: (
      <IconWrapper>
        <AccessTimeIcon sx={{ fontSize: 30 }} />
      </IconWrapper>
    ),
  },
  {
    value: "70%",
    // title: "Faster Turnaround",
    description:
      "Reduction in Manual Data Entry Eliminate typing from paper EOBs",
    // icon: <img src={paymentImage11} alt="Faster Turnaround" />,
    icon: (
      <IconWrapper>
        <PsychologyIcon sx={{ fontSize: 30 }} />
      </IconWrapper>
    ),
  },
  {
    value: "2 Days",
    // title: "Faster Cash Application",
    description: "Faster Cash Application Accelerated recognition of payments",
    // icon: <img src={paymentImage12} alt="Faster Cash Application" />,
    icon: (
      <IconWrapper>
        <PaymentsIcon sx={{ fontSize: 30 }} />
      </IconWrapper>
    ),
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
