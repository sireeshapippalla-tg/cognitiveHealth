import CTASection from "../../components/home/CTA/CTASection";
import HeroSection from "../../components/home/Hero/HeroSection";
import PlatformIntroSection from "../../components/home/platformInfo/PlatformIntroSection";
// import OurOfferingSection from "../../components/home/offering/OurOfferingSection";
import ImpactSection from "../../components/home/ImpactSection/ImpactSection";
import TestimonialsSection from "../../components/home/TestimonialsSection/TestimonialsSection";
import HowItWorksSection from "../../components/home/howItWorks/HowItWorksSection";

const HomePage = () => {
  return (
    <>
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
