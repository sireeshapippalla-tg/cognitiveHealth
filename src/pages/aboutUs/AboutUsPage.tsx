import React from "react";
import { Box } from "@mui/material";
import WhoWeAreSection from "../../components/aboutus/whoWeAre";
import TeamSection from "../../components/aboutus/teamSecion";
import AdvisorySection from "../../components/aboutus/advisorySection";
import CallToActionSection from "../../components/home/CTA/CTASection";
import WhyWeExistSection from "../../components/aboutus/whyExistSection";
import AboutUsHeroSection from "../../components/aboutus/aboutusHeroSection";
import { motion } from "framer-motion";

const CognitiveHealthAboutPage: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutUsHeroSection />
        
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <WhoWeAreSection />
          <WhyWeExistSection />
          <TeamSection />
          <AdvisorySection />
          <CallToActionSection />
        </Box>
      </motion.div>
    </Box>
  );
};

export default CognitiveHealthAboutPage;
