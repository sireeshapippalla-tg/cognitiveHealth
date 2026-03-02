import CallToActionSection from "../../components/home/CTA/CTASection";
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

const PaymentPostingPage = () => {
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
      <CallToActionSection />
    </>
  );
};

export default PaymentPostingPage;
