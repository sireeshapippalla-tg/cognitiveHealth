import CallToActionSection from "../../components/home/CTA/CTASection";
import EnterpriseReadinessSection from "../../components/platform/EnterpriseReadinessSection/EnterpriseReadinessSection";
import Hero from "../../components/platform/Hero/Hero";
import ProductIntelligence from "../../components/platform/ProductIntelligence/ProductIntelligence";
// import RealResult from "../../components/platform/RealResult";
import SuperChargeSection from "../../components/platform/SuperCharge/SuperCharge";
import TrustDeploymentSection from "../../components/platform/trustDeploymentSection/TrustDeploymentSection";
import { PageWrapper } from "./PlatFormPage.style";
import SEO from "../../components/SEO";

const PlatFormPage = () => {
  return (
    <PageWrapper>
      <SEO
        title="The iCAN Platform | AI for Healthcare"
        description="Discover the iCAN platform - an intelligent automation engine designed for healthcare RCM. Built for scale, security, and performance."
        keywords="iCAN Platform, Healthcare AI, Intelligent Automation, RCM Technology"
      />
      <Hero />
      <SuperChargeSection />
      <ProductIntelligence />
      <EnterpriseReadinessSection />
      <TrustDeploymentSection />
      {/* <RealResult /> */}
      <CallToActionSection />
    </PageWrapper>
  );
};

export default PlatFormPage;
