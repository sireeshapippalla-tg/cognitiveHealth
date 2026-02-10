import React from "react";
import { Box } from "@mui/material";
import WhoWeAreSection from "../../components/aboutus/whoWeAre";
import TeamSection from "../../components/aboutus/teamSecion";
import AdvisorySection from "../../components/aboutus/advisorySection";
import CallToActionSection from "../../components/home/CTA/CTASection";
import WhyWeExistSection from "../../components/aboutus/whyExistSection";
import AboutUsHeroSection from "../../components/aboutus/aboutusHeroSection";

const CognitiveHealthAboutPage: React.FC = () => {
  return (
    <Box>
      <AboutUsHeroSection />
      <WhoWeAreSection />
      <WhyWeExistSection />
      <TeamSection />
      <AdvisorySection />
      <CallToActionSection />
    </Box>
  );
};

export default CognitiveHealthAboutPage;
