import CallToActionSection from "../../components/home/CTA/CTASection";
import EnterpriseReadinessSection from "../../components/platform/EnterpriseReadinessSection/EnterpriseReadinessSection";
import Hero from "../../components/platform/Hero/Hero";
import ProductIntelligence from "../../components/platform/ProductIntelligence/ProductIntelligence";
// import RealResult from "../../components/platform/RealResult";
import SuperChargeSection from "../../components/platform/SuperCharge/SuperCharge";
import TrustDeploymentSection from "../../components/platform/trustDeploymentSection/TrustDeploymentSection";
import { PageWrapper } from "./PlatFormPage.style";

const PlatFormPage = () => {
  return (
    <PageWrapper>
      <Hero />
      <SuperChargeSection />
      <ProductIntelligence />
      <EnterpriseReadinessSection />
      <TrustDeploymentSection/>
      {/* <RealResult /> */}
      <CallToActionSection />
    </PageWrapper>
  );
};

export default PlatFormPage;
