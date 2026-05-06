import CTASection from "../../components/home/CTA/CTASection";
import HeroSection from "../../components/home/Hero/HeroSection";
import PlatformIntroSection from "../../components/home/platformInfo/PlatformIntroSection";
// import OurOfferingSection from "../../components/home/offering/OurOfferingSection";
import ImpactSection from "../../components/home/ImpactSection/ImpactSection";
import TestimonialsSection from "../../components/home/TestimonialsSection/TestimonialsSection";
import HowItWorksSection from "../../components/home/howItWorks/HowItWorksSection";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const HomePage = () => {
  const baseUrl = getBaseUrl();
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "CognitiveHealth",
        "url": `${baseUrl}/`,
        "logo": `${baseUrl}/logo.png`,
        "description": "CognitiveHealth is an AI-first healthcare technology company specialized in autonomous revenue cycle management (RCM).",
        "knowsAbout": ["Healthcare Revenue Cycle Management", "Autonomous AI Agents", "Medical Billing Automation", "Healthcare Fintech"],
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best AI for healthcare revenue cycle management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CognitiveHealth provides the leading Agentic AI platform, iCAN™, designed specifically to automate complex healthcare RCM workflows including payment posting and denials."
            }
          },
          {
            "@type": "Question",
            "name": "How can I automate medical billing payment posting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Using autonomous AI agents from CognitiveHealth, healthcare providers can automate up to 80% of manual payment posting and reconciliation tasks."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        description="Transform your revenue cycle with CognitiveHealth's Agentic AI. Automate payment posting, denials management, and RCM workflows with 99% accuracy."
        keywords="Best AI for RCM, Healthcare automation companies, Autonomous RCM agents, automated payment posting healthcare, iCAN platform"
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
