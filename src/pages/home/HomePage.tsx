import CTASection from "../../components/home/CTA/CTASection";
import HeroSection from "../../components/home/Hero/HeroSection";
import PlatformIntroSection from "../../components/home/platformInfo/PlatformIntroSection";
// import OurOfferingSection from "../../components/home/offering/OurOfferingSection";
import ImpactSection from "../../components/home/ImpactSection/ImpactSection";
import TestimonialsSection from "../../components/home/TestimonialsSection/TestimonialsSection";
import HowItWorksSection from "../../components/home/howItWorks/HowItWorksSection";
import SEO from "../../components/SEO";

const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cognitivehealthit.netlify.app/#organization",
        "name": "CognitiveHealth",
        "url": "https://cognitivehealthit.netlify.app/",
        "logo": "https://cognitivehealthit.netlify.app/logo.png",
        "description": "CognitiveHealth is an AI-first healthcare technology company specialized in autonomous revenue cycle management (RCM).",
        "sameAs": [
          "https://www.linkedin.com/company/cognitivehealth/",
          "https://twitter.com/cognitivehealth"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "iCAN™ Agentic AI Platform",
        "operatingSystem": "Web-based",
        "applicationCategory": "BusinessApplication",
        "description": "An intelligent automation engine designed for healthcare RCM, automating payment posting, denials management, and lockbox processes.",
        "offers": {
          "@type": "Offer",
          "serviceType": "Healthcare RCM Automation"
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        description="Experience the future of Revenue Cycle Management with CognitiveHealth's AI platform. Automate payment posting, denials, and lockbox analysis today."
        keywords="RCM Automation, AI Healthcare, Healthcare Revenue Cycle, Medical Billing AI"
        schema={homeSchema}
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
