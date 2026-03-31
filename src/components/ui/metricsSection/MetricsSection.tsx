import StatCard from "../statCard/StatCard";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import {
  Glow,
  GridItem,
  GridWrapper,
  HeaderWrapper,
  Section,
  StyledContainer,
} from "./MetricsSection.styles";

interface StatItem {
  value: string;
  title: string;
  description: string;
}

interface MetricsSectionProps {
  title: string;
  subtitle: string;
  pillText?: string;
  pillIcon?: string;
  stats: StatItem[];
}

const MetricsSection = ({
  title,
  subtitle,
  pillText,
  pillIcon,
  stats,
}: MetricsSectionProps) => {
  return (

    <Section>
      
      <Glow
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <StyledContainer maxWidth="lg">
        {/* 🔥 HEADER */}
        <HeaderWrapper>
          <SectionTitle
            pillText={pillText}
            pillIcon={pillIcon}
            title={title}
            subtitle={subtitle}
            align="center"
            maxWidth={700}
            textColor="white"
          />
        </HeaderWrapper>

        {/*  GRID */}
        <GridWrapper container spacing={6}>
          {stats.map((stat, index) => (
            <GridItem size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <StatCard
                value={stat.value}
                title={stat.title}
                description={stat.description}
                index={index}
              />
            </GridItem>
          ))}
        </GridWrapper>
      </StyledContainer>
    </Section>
  
  );
};

export default MetricsSection;
