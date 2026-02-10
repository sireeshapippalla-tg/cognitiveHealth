import React from "react";
import SolutionsHeroSection from "../../components/solutions/contractAnalysis/solutionsHeroSection";
import TransformSection from "../../components/solutions/contractAnalysis/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/contractAnalysis/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/contractAnalysis/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/contractAnalysis/HowitWorksSection";
import CallToActionSection from "../../components/home/CTA/CTASection";

const ContractAnalysisPage = () => {
  return (
    <>
      <SolutionsHeroSection />
      <TransformSection />
      <CoreCapabilitiesSection />
      <MeasurableResultsSection />
      <HowItWorksSection />
      <CallToActionSection />
    </>
  );
};

export default ContractAnalysisPage;
