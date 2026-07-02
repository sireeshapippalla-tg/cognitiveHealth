import careLogo from "../../../assets/care.svg";
import kaminLogo from "../../../assets/Kamin Logo.svg";
import mcLeranLogo from "../../../assets/mcLeran.svg";
// import mindPathLogo from "../../../assets/mindpath-logo.svg";
import qualityLogo from "../../../assets/QualityLogo.png";
import welStreetLogo from "../../../assets/welStreet.svg";
import mercyImg from "../../../assets/Resources/mercyLogo.webp";
import yaleImg from "../../../assets/yale.svg";

import heroSectionImage from "../../../assets/heroBannerImages/homePageBanner.webp";
import { useNavigate } from "react-router-dom";
import TrustedLogos from "../../trustedLogos/TrustedLogos";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { Highlight } from "../../ui/SplitSection/SplitSection.style";
import { ROUTES } from "../../../routes/RoutePaths";

const HeroSection = () => {
  const navigate = useNavigate();
  const logos = [
    { src: careLogo, alt: "Care Hospice" },
    { src: mcLeranLogo, alt: "McLaren Health" },
    { src: yaleImg, alt: "Yale New Haven Health" },
    { src: welStreetLogo, alt: "Wellstreet" },
    { src: qualityLogo, alt: "Quality Health Care" },
    { src: kaminLogo, alt: "Kamin Health" },
    // { src: mindPathLogo, alt: "MindPath Health" },
    { src: mercyImg, alt: "Mercy Health" },
  ];
  return (
    <>
      <SplitSection
        eyebrow={
          <>
            Transform Your Revenue Cycle with&nbsp;
            <Highlight>Autonomous AI Agents</Highlight>
          </>
        }
        description="iCAN™ ONE is an Agentic AI layer that sits atop your existing EHR/PM. Deploy a network of specialized AI agents that automate your
                most complex RCM workflows—reducing costs by up to 80% while
                accelerating cash flow and empowering your team to deliver
                exceptional patient experiences."
        image={heroSectionImage}
        width={1920}
        height={960}
        prioritize={true}
        primaryAction={{
          label: "Request a Demo",
          onClick: () =>
            navigate(ROUTES.REQUEST_DEMO, {
              state: { fromLabel: "Home", fromPath: "/" },
            }),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => navigate("/resources#videos"),
        }}
      />

      {/* TRUSTED BY */}
      <TrustedLogos
        title="Trusted by leading health systems and physician groups and specialty providers"
        logos={logos}
        speed={40}
      />
    </>
  );
};

export default HeroSection;
