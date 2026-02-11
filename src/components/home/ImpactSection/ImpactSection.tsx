import { Grid } from "@mui/material";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import { SectionContainer, Wrapper } from "./ImpactSection.styles";

const stats = [
  {
    value: "93.8%",
    description: "Fully Reconciled Payments - Virtually Zero Posting Errors",
  },
  {
    value: "41.6%",
    description: "Faster Turnaround Time - From 3-5 Days To Under 4 Hours",
  },
  {
    value: "85%",
    description: "Staff Savings - Efforts Re-Directed To Value Added Tasks",
  },
  {
    value: "26%",
    description: "Faster Cash Application - Improved A/R and Cash Flow",
  },
];

const ImpactSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle
          pillText="Functional Outcomes"
          title="Real Impact Across Every Dimension Of Revenue<br/>Cycle Performance"
          maxWidth={800}
        />
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MetricCard value={stat.value} description={stat.description} color="#EB7724" />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </SectionContainer>
  );
};

export default ImpactSection;
