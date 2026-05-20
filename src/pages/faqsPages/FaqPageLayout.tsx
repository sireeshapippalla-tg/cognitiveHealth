import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
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

      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: `url(${Frame_50}) !important`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            py: { xs: 8, md: 10 },
            mt: "80px",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      fontSize: { xs: "2.3rem", md: "3.3rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    {heroTitle}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      opacity: 0.9,
                      mt: 3,
                      lineHeight: 1.6,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  >
                    {heroSubtitle}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 4,
                      mb: 2,
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      variant="contained"
                      href={heroButtonUrl}
                      sx={{
                        bgcolor: "white",
                        color: "#0b1f38",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        "&:hover": { bgcolor: "#f3f4f6" },
                      }}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="outlined"
                      href={heroButtonUrl}
                      sx={{
                        borderColor: "white",
                        color: "white",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#e5e7eb",
                          bgcolor: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      Contact Sales
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 2 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#ffffff" }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box
                    sx={{
                      width: "auto",
                      maxHeight: "140px",
                      objectFit: "contain",
                      display: "block",
                      mx: "auto",
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}
                  />
                  {section2Content}
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

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
      </Box>
    </>
  );
};
