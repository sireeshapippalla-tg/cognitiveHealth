// import React from 'react'
// import SolutionsHeroSection from '../../components/solutions/preBillServices/solutionsHeroSection'
import TransformSection from "../../components/solutions/preBillServices/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/preBillServices/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/preBillServices/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/preBillServices/HowitWorksSection";
// import CallToActionSection from '../../components/home/CTA/CTASection'

import nextgenLogo from "../../assets/EMRLogos/Nxtgen.svg";
import amdLogo from "../../assets/EMRLogos/amd.svg";
import insyncLogo from "../../assets/EMRLogos/insync-acacia.svg";
import chirotouchLogo from "../../assets/EMRLogos/chirotouch.svg";
import netsmartLogo from "../../assets/EMRLogos/netsmart.svg";
import ecwLogo from "../../assets/EMRLogos/eclinicalworks.svg";
import epicLogo from "../../assets/EMRLogos/epic.svg";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const PreBillServicesPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    name: "Pre Bill Services AI Automation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "Streamline your revenue cycle with our advanced Pre Bill Services AI automation. Increase efficiency and reduce costs.",
    url: `${baseUrl}/solutions/${"Pre Bill Services".toLowerCase().replace(/\s+/g, "-")}`,
    provider: {
      "@type": "Organization",
      name: "CognitiveHealth",
    },
  };

  const logos = [
    {
      src: nextgenLogo,
      alt: "Next Gen EMR",
    },
    {
      src: amdLogo,
      alt: "AMD",
    },
    {
      src: insyncLogo,
      alt: "Insync/Acacia",
    },
    {
      src: chirotouchLogo,
      alt: "ChiroTouch",
    },
    {
      src: netsmartLogo,
      alt: "Netsmart Homecare",
    },
    {
      src: ecwLogo,
      alt: "ECW(eClinicalWorks)",
    },
    {
      src: epicLogo,
      alt: "Epic",
    },
  ];
  return (
    <>
      <SEO
        title="Pre Bill Services | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Pre Bill Services AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Pre Bill Services, AI, Healthcare, RCM, Automation"
        schema={schema}
      />
      {/* <SolutionsHeroSection /> */}
      <TransformSection />
      <CoreCapabilitiesSection />
      {/* EMR logos */}
      <div style={{ marginBottom: "50px" }}>
        <TrustedLogos
          title="EMR systems already Cognitive AI Agents works on"
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

export default PreBillServicesPage;
