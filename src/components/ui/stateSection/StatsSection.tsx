import { Grid } from "@mui/material";
import {
  Inner,
  Section,
  StatCard,
  StatDescription,
  StatTitle,
  StatValue,
  Subtitle,
  Title,
} from "./StatsSection.styles";

interface StatItem {
  value: string;
  title: string;
  description: string;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  items: StatItem[];
}

/* ================= COMPONENT ================= */

const StatsSection = ({ title, subtitle, items }: StatsSectionProps) => {
  return (
    <Section>
      <Inner>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <StatCard>
                <StatValue>{item.value}</StatValue>
                <StatTitle>{item.title}</StatTitle>
                <StatDescription>{item.description}</StatDescription>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default StatsSection;
