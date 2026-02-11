
import CallToActionSection from "../../components/home/CTA/CTASection";
import CoreCapabilitiesSection from "../../components/solutions/paymentPosting/coreCapabiltySection";
import HowItWorksSection from "../../components/solutions/paymentPosting/HowitWorksSection";
import MeasurableResultsSection from "../../components/solutions/paymentPosting/measurableRsultsSection";
import SolutionsHeroSection from "../../components/solutions/paymentPosting/solutionsHeroSection";
import TransformSection from "../../components/solutions/paymentPosting/transformSection";

const PaymentPostingPage = () => {
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

export default PaymentPostingPage;
