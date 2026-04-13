import CTASection from "../../components/home/CTA/CTASection";
import HeroSection from "../../components/home/Hero/HeroSection";
import PlatformIntroSection from "../../components/home/platformInfo/PlatformIntroSection";
// import OurOfferingSection from "../../components/home/offering/OurOfferingSection";
import ImpactSection from "../../components/home/ImpactSection/ImpactSection";
import TestimonialsSection from "../../components/home/TestimonialsSection/TestimonialsSection";
import HowItWorksSection from "../../components/home/howItWorks/HowItWorksSection";
import SEO from "../../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO 
        description="Experience the future of Revenue Cycle Management with CognitiveHealth's AI platform. Automate payment posting, denials, and lockbox analysis today."
        keywords="RCM Automation, AI Healthcare, Healthcare Revenue Cycle, Medical Billing AI"
      />
      <HeroSection />
      <PlatformIntroSection />
      {/* <OurOfferingSection /> */}
      <ImpactSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
};

export default HomePage;
