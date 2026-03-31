import { Container } from "@mui/material";
import { type ReactNode } from "react";
import { motion } from "framer-motion";

import {
  Section,
  Inner,
  Title,
  Subtitle,
  HeaderMotion,
  TimelineContainer,
  AnimatedTimelineLine,
  TimelineItems,
  TimelineRow,
  IconWrapper,
  ContentWrapper,
  ContentCard,
  ItemTitle,
  ItemDescription,
} from "./FeatureSection.styles";

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
  columns?: 2 | 3 | 4; // Ignored for timeline layout
  align?: "center" | "left";
  borderRadius?: string;
}

const FeatureSection = ({
  title,
  subtitle,
  background,
  items,
  cardVariant = "default",
  align = "center",
  borderRadius = "0px",
}: FeatureSectionProps) => {
  return (
    <Section background={background} borderRadius={borderRadius}>
      <Inner>
        <Container>
          {/* Header */}

          <HeaderMotion
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title align={align} dangerouslySetInnerHTML={{ __html: title }} />
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </HeaderMotion>

          {/* Timeline Container */}

          <TimelineContainer>
            {/* The Continuous Vertical Line connecting all nodes */}

            <AnimatedTimelineLine
              variant={cardVariant}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Timeline Items */}

            <TimelineItems>
              {items.map((item, index) => (
                <TimelineRow key={index}>
                  {/* Glowing Node / Icon on the Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.4,
                    }}
                  >
                    <IconWrapper variant={cardVariant}>{item.icon}</IconWrapper>
                  </motion.div>

                  {/* Text Content Block */}

                  <ContentWrapper
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContentCard>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemDescription>{item.description}</ItemDescription>
                    </ContentCard>
                  </ContentWrapper>
                </TimelineRow>
              ))}
            </TimelineItems>
          </TimelineContainer>
        </Container>
      </Inner>
    </Section>
  );
};

export default FeatureSection;
