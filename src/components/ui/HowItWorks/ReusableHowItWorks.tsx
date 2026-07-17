import React from "react";
import { motion } from "framer-motion";
import { Container, useTheme, useMediaQuery } from "@mui/material";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import {
  CTAButton,
  CTAWrapper,
  Header,
  MotionStep,
  Section,
  StepContents,
  StepContentWrapper,
  StepDescription,
  StepIcon,
  StepRow,
  StepTitle,
  Subtitle,
  TimelineWrapper,
  Title,
  VerticalLine,
} from "./HowItWorks.style";

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ReusableHowItWorksProps {
  title?: string;
  subtitle?: string;
  pillIcon?: string;
  pillText?: string;
  steps: HowItWorksStep[];
  ctaText?: string;
  onCtaClick?: () => void;
  themeColor?: string;
  backgroundColor?: string;
}

export const ReusableHowItWorks: React.FC<ReusableHowItWorksProps> = ({
  title = "How It Works",
  subtitle,
  pillIcon,
  pillText,
  steps,
  ctaText,
  onCtaClick,
  themeColor = "#eb7b33",
  // backgroundColor = "#f9fafb",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section>
      <Container maxWidth="lg">
        {/* Title Section */}

        <Header>
          {pillText ? (
            <SectionTitle
              pillIcon={pillIcon}
              pillText={pillText}
              title={title}
              subtitle={subtitle}
              align="center"
              maxWidth={700}
            />
          ) : (
            <>
              <Title>{title}</Title>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </>
          )}
        </Header>
        {/* </Box> */}

        {/* Timeline */}

        <TimelineWrapper>
          <VerticalLine />
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <StepRow key={index} isLeft={isLeft}>
                <MotionStep
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : isLeft ? -50 : 50,
                    y: isMobile ? 30 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <StepContentWrapper isLeft={isLeft}>
                    <StepContents isLeft={isLeft}>
                      <StepIcon isLeft={isLeft} themeColor={themeColor}>
                        {step.icon}
                      </StepIcon>

                      <StepTitle>{step.title}</StepTitle>

                      <StepDescription isLeft={isLeft}>
                        {step.description}
                      </StepDescription>
                    </StepContents>
                  </StepContentWrapper>
                </MotionStep>
              </StepRow>
            );
          })}
        </TimelineWrapper>

        {ctaText && onCtaClick && (
          <CTAWrapper>
            <motion.div whileHover={{ scale: 1.05 }}>
              <CTAButton themeColor={themeColor} onClick={onCtaClick}>
                {ctaText}
              </CTAButton>
            </motion.div>
          </CTAWrapper>
        )}
      </Container>
    </Section>
  );
};
