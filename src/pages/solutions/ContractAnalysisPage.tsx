// import React from "react";
import SolutionsHeroSection from "../../components/solutions/contractAnalysis/solutionsHeroSection";
import TransformSection from "../../components/solutions/contractAnalysis/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/contractAnalysis/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/contractAnalysis/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/contractAnalysis/HowitWorksSection";
import CallToActionSection from "../../components/home/CTA/CTASection";

import waystarLogo from "../../assets/PayerPortalLogos/waystar.svg";
import paySpanLogo from "../../assets/PayerPortalLogos/payspan.png";
import zelisLogo from "../../assets/PayerPortalLogos/Zelis.svg";
import optumLogo from "../../assets/PayerPortalLogos/optum.svg";
import evernorthLogo from "../../assets/PayerPortalLogos/evernorth.svg";
import ecoLogo from "../../assets/PayerPortalLogos/echo.svg";
import humanaLogo from "../../assets/PayerPortalLogos/Humana.svg";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";

const ContractAnalysisPage = () => {
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
      <SolutionsHeroSection />
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
      <CallToActionSection />
    </>
  );
};

export default ContractAnalysisPage;
