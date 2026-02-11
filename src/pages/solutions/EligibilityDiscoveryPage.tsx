import SolutionsHeroSection from "../../components/solutions/eligibilityDiscovery/solutionsHeroSection";
import TransformSection from "../../components/solutions/eligibilityDiscovery/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/eligibilityDiscovery/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/eligibilityDiscovery/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/eligibilityDiscovery/HowitWorksSection";
import CallToActionSection from "../../components/home/CTA/CTASection";

const EligibilityDiscoveryPage = () => {
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

export default EligibilityDiscoveryPage;
