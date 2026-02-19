// import careLogo from "../../../assets/care.svg";

import kaminLogo from "../../../assets/Kamin Logo.svg";
// import mcLeranLogo from "../../../assets/mcLeran.svg";
// import mercyLogo from "../../../assets/Mercylogo.svg";
import mindPathLogo from "../../../assets/mindpath-logo.svg";
// import qualityLogo from "../../../assets/Quality.svg";
import mercyImg from "../../../assets/Resources/mercyLogo.png";
import yaleImg from "../../../assets/yale.svg";

import SplitSection from "../../ui/SplitSection/SplitSection";
import heroSectionImage from "../../../assets/HomeScreen.svg";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { useNavigate } from "react-router-dom";
import TrustedLogos from "../../trustedLogos/TrustedLogos";

const HeroSection = () => {
  const navigate = useNavigate();
  const logos = [
    {
      src: "https://www.carehospice.com/images/care-logo.gif",
      alt: "Care Hospice",
    },
    {
      src: "https://www.mclaren.org/uploads/images/mclaren-logo-color.svg",
      alt: "McLaren Health",
    },
    { src: yaleImg, alt: "Yale New Haven Health" },
    {
      src: "https://azure-na-images.contentstack.com/v3/assets/blt3667c0ff4b42a45d/bltec3bcf779857babf/6698b9d4da94e2baeab2d9d7/wellstreet_logo.svg",
      alt: "Wellstreet",
    },
    {
      src: "https://cdn.prod.website-files.com/61f01ea80c2c4a11c10e6cc3/6810dedbaa06e55034a38ee3_QHCR_horizontal%20logo%20(1)-p-500.png",
      alt: "Quality Health Care",
    },
    { src: kaminLogo, alt: "Kamin Health" },
    { src: mindPathLogo, alt: "MindPath Health" },
    { src: mercyImg, alt: "Mercy Health" },
  ];
  return (
    <>
      <SplitSection
        eyebrow={
          <>
            Transform Your Revenue Cycle with{" "}
            <Highlight>Autonomous AI Agents</Highlight>
          </>
        }
        description="Deploy a network of specialized AI agents that automate your most
              complex RCM workflows—reducing costs by up to 80% while
              accelerating cash flow and empowering your team to deliver
              exceptional patient experiences."
        image={heroSectionImage}
        primaryAction={{
          label: "Request a Demo",
          onClick: () => navigate("/contact-us"),
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
      ;
    </>
  );
};

export default HeroSection;
