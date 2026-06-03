// import React from 'react'
// import SolutionsHeroSection from "../../components/solutions/lockboxAnalysis/solutionsHeroSection";
import TransformSection from "../../components/solutions/lockboxAnalysis/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/lockboxAnalysis/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/lockboxAnalysis/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/lockboxAnalysis/HowitWorksSection";
// import CallToActionSection from "../../components/home/CTA/CTASection";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";

import waystarLogo from "../../assets/PayerPortalLogos/waystar.svg";
import paySpanLogo from "../../assets/PayerPortalLogos/payspan.webp";
import zelisLogo from "../../assets/PayerPortalLogos/Zelis.svg";
import optumLogo from "../../assets/PayerPortalLogos/optum.svg";
import evernorthLogo from "../../assets/PayerPortalLogos/evernorth.svg";
import ecoLogo from "../../assets/PayerPortalLogos/echo.svg";
import humanaLogo from "../../assets/PayerPortalLogos/Humana.svg";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const LockBoxAnalysisPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    "name": "Lock Box Analysis AI Automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Streamline your revenue cycle with our advanced Lock Box Analysis AI automation. Increase efficiency and reduce costs.",
    "url": `${baseUrl}/solutions/${"Lock Box Analysis".toLowerCase().replace(/\s+/g, '-')}`,
    "provider": {
      "@type": "Organization",
      "name": "CognitiveHealth"
    }
  };

  const logos = [
    {
      src: waystarLogo,
      alt: "Waystar",
    },
    {
      src: paySpanLogo,
      alt: "PaySpan",
    },
    {
      src: zelisLogo,
      alt: "ZELIS",
    },
    {
      src: optumLogo,
      alt: "OPTUM",
    },
    {
      src: evernorthLogo,
      alt: "EVERNORTH",
    },
    {
      src: ecoLogo,
      alt: "ECO",
    },
    {
      src: humanaLogo,
      alt: "HUMANA",
    },
  ];
  return (
    <>
      <SEO
        title="Lock Box Analysis | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Lock Box Analysis AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Lock Box Analysis, AI, Healthcare, RCM, Automation"
        schema={schema}
      />
      {/* <SolutionsHeroSection /> */}
      <TransformSection />
      <CoreCapabilitiesSection />
      {/* Payer Portal logos */}
      <div style={{ marginBottom: "50px" }}>
        <TrustedLogos
          title="Payer Portals already Cognitive AI Agents works on"
          logos={logos}
          speed={40}
        />
      </div>
      <MeasurableResultsSection />
      <HowItWorksSection />
      {/* <CallToActionSection /> */}
    </>
  );
};

export default LockBoxAnalysisPage;
