import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../../components/aboutus/heroSection";
import WhoWeAreSection from "../../components/aboutus/whoWeAre";
import TeamSection from "../../components/aboutus/teamSecion";
import AdvisorySection from "../../components/aboutus/advisorySection";
import CallToActionSection from "../../components/home/CTA/CTASection";
import WhyWeExistSection from "../../components/aboutus/whyExistSection";








const CognitiveHealthAboutPage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <WhoWeAreSection/>
      <WhyWeExistSection />
      <TeamSection />
      <AdvisorySection />
            <CallToActionSection />
      
    </Box>
  );
};

export default CognitiveHealthAboutPage;
