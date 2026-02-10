import { Grid } from "@mui/material";
import { type ReactNode } from "react";

import {
  Section,
  Inner,
  Title,
  Subtitle,
} from "./FeatureSection.styles";
import { FeatureCard } from "../featureCard/FeatureCard";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  background?: string;
  items: FeatureItem[];
}

const FeatureSection = ({
  title,
  subtitle,
  background,
  items,
}: FeatureSectionProps) => {
  return (
    <Section background={background}>
      <Inner>
        <Title dangerouslySetInnerHTML={{ __html: title }} />

        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{xs:12, sm:6}}  key={index}>
              {/* Reusing your FeatureCard */}
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default FeatureSection;
