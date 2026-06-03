// import SolutionsHeroSection from "../../components/solutions/denialWorkFlow/solutionsHeroSection";
import TransformSection from "../../components/solutions/denialWorkFlow/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/denialWorkFlow/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/denialWorkFlow/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/denialWorkFlow/HowitWorksSection";
// import CallToActionSection from "../../components/home/CTA/CTASection";

import avalityLogo from "../../assets/ClearingHouseLogos/availity.svg";
import jpmorganLogo from "../../assets/ClearingHouseLogos/jp morgan.svg";
import InovalonLogo from "../../assets/ClearingHouseLogos/inovalon.webp";
import trizettoLogo from "../../assets/ClearingHouseLogos/Trizetto.svg";
import changeHealthcareLogo from "../../assets/ClearingHouseLogos/change_healthcare_logo.webp";
import optumLogo from "../../assets/PayerPortalLogos/optum.svg";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const DenialWorkFlowPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    "name": "Denial Work Flow AI Automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Streamline your revenue cycle with our advanced Denial Work Flow AI automation. Increase efficiency and reduce costs.",
    "url": `${baseUrl}/solutions/${"Denial Work Flow".toLowerCase().replace(/\s+/g, '-')}`,
    "provider": {
      "@type": "Organization",
      "name": "CognitiveHealth"
    }
  };

  const logos = [
    {
      src: avalityLogo,
      alt: "AVAILITY",
    },
    {
      src: jpmorganLogo,
      alt: "J.P.MORGAN",
    },
    {
      src: InovalonLogo,
      alt: "Inovalon",
    },
    {
      src: trizettoLogo,
      alt: "Trizetto",
    },
    {
      src: changeHealthcareLogo,
      alt: "Change Healthcare",
    },
    {
      src: optumLogo,
      alt: "Optum",
    },
  ];
  return (
    <>
      <SEO
        title="Denial Work Flow | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Denial Work Flow AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Denial Work Flow, AI, Healthcare, RCM, Automation"
        schema={schema}
      />
      {/* <SolutionsHeroSection /> */}
      <TransformSection />
      <CoreCapabilitiesSection />
      {/* Clearing house */}
      <div style={{ marginBottom: "50px" }}>
        <TrustedLogos
          title="Clearing houses already Cognitive AI Agents works on"
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

export default DenialWorkFlowPage;
