import CallToActionSection from "../../components/home/CTA/CTASection";
import EnterpriseReadinessSection from "../../components/platform/EnterpriseReadinessSection";
import Hero from "../../components/platform/Hero";
import ProductIntelligence from "../../components/platform/ProductIntelligence";
import RealResult from "../../components/platform/RealResult";
import SuperChargeSection from "../../components/platform/SuperCharge";
const PlatFormPage = () => {
  return (
    <>
      <Hero />
      <SuperChargeSection />
      <ProductIntelligence />
      <EnterpriseReadinessSection />
      <RealResult />
      <CallToActionSection />
    </>
  );
};

export default PlatFormPage;
