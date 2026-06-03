// import CallToActionSection from "../../components/home/CTA/CTASection";
import CoreCapabilitiesSection from "../../components/solutions/paymentPosting/coreCapabiltySection";
import HowItWorksSection from "../../components/solutions/paymentPosting/HowitWorksSection";
import MeasurableResultsSection from "../../components/solutions/paymentPosting/measurableRsultsSection";
// import SolutionsHeroSection from "../../components/solutions/paymentPosting/solutionsHeroSection";
import TransformSection from "../../components/solutions/paymentPosting/transformSection";
import TrustedLogos from "../../components/trustedLogos/TrustedLogos";

import nextgenLogo from "../../assets/EMRLogos/Nxtgen.svg";
import amdLogo from "../../assets/EMRLogos/amd.svg";
import insyncLogo from "../../assets/EMRLogos/insync-acacia.svg";
import chirotouchLogo from "../../assets/EMRLogos/chirotouch.svg";
import netsmartLogo from "../../assets/EMRLogos/netsmart.svg";
import ecwLogo from "../../assets/EMRLogos/eclinicalworks.svg";
import epicLogo from "../../assets/EMRLogos/epic.svg";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const PaymentPostingPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "SoftwareApplication", "Service"],
    "name": "Payment Posting AI Automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Streamline your revenue cycle with our advanced Payment Posting AI automation. Increase efficiency and reduce costs.",
    "url": `${baseUrl}/solutions/${"Payment Posting".toLowerCase().replace(/\s+/g, '-')}`,
    "provider": {
      "@type": "Organization",
      "name": "CognitiveHealth"
    }
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
        title="Payment Posting | CognitiveHealth"
        description="Streamline your revenue cycle with our advanced Payment Posting AI automation. Discover how CognitiveHealth can improve your financial performance."
        keywords="Payment Posting, AI, Healthcare, RCM, Automation"
        schema={schema}
      />
      {/* <SolutionsHeroSection /> */}
      <TransformSection />
      <CoreCapabilitiesSection />
      {/* EMR logos */}
      <div style={{ marginBottom: "50px" }}>
        <TrustedLogos
          title="Trusted connectors with 20+ leading EMR systems "
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

export default PaymentPostingPage;
