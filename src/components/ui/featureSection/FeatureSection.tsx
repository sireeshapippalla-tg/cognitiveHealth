import { Grid } from "@mui/material";
import { type ReactNode } from "react";

import { Section, Inner, Title, Subtitle } from "./FeatureSection.styles";
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
  linkText?: string;
  cardVariant?: "default" | "pink";
  columns?: 2 | 3 | 4;
  align?: "center" | "left";
  borderRadius?:string
}

const FeatureSection = ({
  title,
  subtitle,
  background,
  items,
  linkText,
  cardVariant = "default",
  columns = 2,
  align = "center",
  borderRadius="0px"
}: FeatureSectionProps) => {
  const mdSize = 12 / columns;

  return (
    <Section background={background} borderRadius={borderRadius}>
      <Inner>
        <Title align={align} dangerouslySetInnerHTML={{ __html: title }} />

        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: mdSize }} key={index}>
              {/* Reusing your FeatureCard */}
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                linkText={linkText}
                variant={cardVariant}
              />
            </Grid>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default FeatureSection;
