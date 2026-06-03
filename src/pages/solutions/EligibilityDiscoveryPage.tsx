// import SolutionsHeroSection from "../../components/solutions/eligibilityDiscovery/solutionsHeroSection";
import TransformSection from "../../components/solutions/eligibilityDiscovery/transformSection";
import CoreCapabilitiesSection from "../../components/solutions/eligibilityDiscovery/coreCapabiltySection";
import MeasurableResultsSection from "../../components/solutions/eligibilityDiscovery/measurableRsultsSection";
import HowItWorksSection from "../../components/solutions/eligibilityDiscovery/HowitWorksSection";
// import CallToActionSection from "../../components/home/CTA/CTASection";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";

import avalityLogo from "../../assets/ClearingHouseLogos/availity.svg";
import jpmorganLogo from "../../assets/ClearingHouseLogos/jp morgan.svg";
import InovalonLogo from "../../assets/ClearingHouseLogos/inovalon.webp";
import trizettoLogo from "../../assets/ClearingHouseLogos/Trizetto.svg";
import changeHealthcareLogo from "../../assets/ClearingHouseLogos/change_healthcare_logo.webp";
import optumLogo from "../../assets/PayerPortalLogos/optum.svg";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const EligibilityDiscoveryPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    name: "Eligibility Discovery AI Automation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "Streamline your revenue cycle with our advanced Eligibility Discovery AI automation. Increase efficiency and reduce costs.",
    url: `${baseUrl}/solutions/${"Eligibility Discovery".toLowerCase().replace(/\s+/g, "-")}`,
    provider: {
      "@type": "Organization",
      name: "CognitiveHealth",
    },
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
        title="Eligibility Discovery | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Eligibility Discovery AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Eligibility Discovery, AI, Healthcare, RCM, Automation"
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

export default EligibilityDiscoveryPage;
