import React from "react";
import WhoWeAreSection from "../../components/aboutus/whoWeAre";
import TeamSection from "../../components/aboutus/teamSecion";
import AdvisorySection from "../../components/aboutus/advisorySection";
import CallToActionSection from "../../components/home/CTA/CTASection";
import WhyWeExistSection from "../../components/aboutus/whyExistSection";
import AboutUsHeroSection from "../../components/aboutus/aboutusHeroSection";
import { motion } from "framer-motion";
import { AboutPageWrapper, ContentContainer } from "./AboutUsPage.styles";
import SEO from "../../components/SEO";

const CognitiveHealthAboutPage: React.FC = () => {
  return (
    <AboutPageWrapper>
      <SEO 
        title="About Us | Our Mission & Team" 
        description="Learn more about CognitiveHealth. Our mission is to transform healthcare operations with AI, led by a team of experts in RCM and technology."
        keywords="CognitiveHealth Team, AI Healthcare Mission, About CognitiveHealth"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutUsHeroSection />
        <ContentContainer>
          <WhoWeAreSection />
          <WhyWeExistSection />
          <TeamSection />
          <AdvisorySection />
          <CallToActionSection />
        </ContentContainer>
      </motion.div>
    </AboutPageWrapper>
  );
};

export default CognitiveHealthAboutPage;
