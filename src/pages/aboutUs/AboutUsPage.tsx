import React from "react";
import { Box } from "@mui/material";
import WhoWeAreSection from "../../components/aboutus/whoWeAre";
import TeamSection from "../../components/aboutus/teamSecion";
import AdvisorySection from "../../components/aboutus/advisorySection";
import CallToActionSection from "../../components/home/CTA/CTASection";
import WhyWeExistSection from "../../components/aboutus/whyExistSection";
import AboutUsHeroSection from "../../components/aboutus/aboutusHeroSection";
import { motion, useScroll, useSpring } from "framer-motion";

const CognitiveHealthAboutPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#F47A20",
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

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
