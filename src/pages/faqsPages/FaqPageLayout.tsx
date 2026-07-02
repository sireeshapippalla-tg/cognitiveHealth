import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import CTASection from "../../components/home/CTA/CTASection";

import Frame_50 from "../../assets/seo/Frame-50.webp";

import { IcanAutomateSection } from "./sections/IcanAutomateSection";
import { IcanInsightSection } from "./sections/IcanInsightSection";
import { IcanPredictSection } from "./sections/IcanPredictSection";
import { IcanManageSection } from "./sections/IcanManageSection";
import { BenefitsFeaturesSection } from "./sections/BenefitsFeaturesSection";
import { PaymentPostingSection } from "./sections/PaymentPostingSection";
import { RevenueCycleManagementSection } from "./sections/RevenueCycleManagementSection";
import { ScheduleDemoSection } from "./sections/ScheduleDemoSection";

import {
  LayoutWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  GetStartedButton,
  ContactSalesButton,
  Section2Wrapper,
  PlaceholderBox,
} from "./FaqPageLayout.style";

export interface ReusableFaqPageProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  schema: Record<string, unknown>;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonUrl: string;
  section2Content: React.ReactNode;
  scheduleDemoContent?: React.ReactNode;
}

export const FaqPageLayout: React.FC<ReusableFaqPageProps> = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  schema,
  heroTitle,
  heroSubtitle,
  heroButtonUrl,
  section2Content,
  scheduleDemoContent,
}) => {
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        schema={schema}
      />

      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection $bgImage={Frame_50}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <HeroTitle
                    variant="h2"
                    component="h1"
                    fontWeight={700}
                    gutterBottom
                  >
                    {heroTitle}
                  </HeroTitle>
                  <HeroSubtitle
                    variant="h5"
                  >
                    {heroSubtitle}
                  </HeroSubtitle>
                  <ButtonGroup>
                    <GetStartedButton
                      variant="contained"
                      href={heroButtonUrl}
                    >
                      Get Started
                    </GetStartedButton>
                    <ContactSalesButton
                      variant="outlined"
                      href={heroButtonUrl}
                    >
                      Contact Sales
                    </ContactSalesButton>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </HeroSection>

        {/* Section 2 */}
        <Section2Wrapper>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <PlaceholderBox />
                  {section2Content}
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Section2Wrapper>

        {/* Section 3 & 4: iCAN Automate™ */}
        <IcanAutomateSection />

        {/* Section 5 & 6: iCAN Insight™ */}
        <IcanInsightSection />

        {/* Section 7 & 8: iCAN Predict™ */}
        <IcanPredictSection />

        {/* Section 9 & 10: iCAN Manage™ */}
        <IcanManageSection />

        {/* Section 11 & 12: Benefits & Features */}
        <BenefitsFeaturesSection />

        {/* Section 13 & 14: Payment Posting and Reconciliation */}
        <PaymentPostingSection />

        {/* Section 15 & 16: Revenue Cycle Management */}
        <RevenueCycleManagementSection />

        {/* Section 17: Schedule Demo */}
        <ScheduleDemoSection
          heroButtonUrl={heroButtonUrl}
          scheduleDemoContent={scheduleDemoContent}
        />

        <CTASection />
      </LayoutWrapper>
    </>
  );
};

