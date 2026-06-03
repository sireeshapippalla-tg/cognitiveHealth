// import React from "react";
// import SolutionsHeroSection from "../../components/solutions/contractAnalysis/solutionsHeroSection";
import TransformSection from "../../components/solutions/contractAnalysis/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/contractAnalysis/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/contractAnalysis/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/contractAnalysis/HowitWorksSection";
// import CallToActionSection from "../../components/home/CTA/CTASection";

import waystarLogo from "../../assets/PayerPortalLogos/waystar.svg";
import paySpanLogo from "../../assets/PayerPortalLogos/payspan.webp";
import zelisLogo from "../../assets/PayerPortalLogos/Zelis.svg";
import optumLogo from "../../assets/PayerPortalLogos/optum.svg";
import evernorthLogo from "../../assets/PayerPortalLogos/evernorth.svg";
import ecoLogo from "../../assets/PayerPortalLogos/echo.svg";
import humanaLogo from "../../assets/PayerPortalLogos/Humana.svg";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const ContractAnalysisPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    "name": "Contract Analysis AI Automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Streamline your revenue cycle with our advanced Contract Analysis AI automation. Increase efficiency and reduce costs.",
    "url": `${baseUrl}/solutions/${"Contract Analysis".toLowerCase().replace(/\s+/g, '-')}`,
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
        title="Contract Analysis | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Contract Analysis AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Contract Analysis, AI, Healthcare, RCM, Automation"
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

export default ContractAnalysisPage;
