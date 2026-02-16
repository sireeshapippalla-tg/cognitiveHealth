// import careLogo from "../../../assets/care.svg";

import kaminLogo from "../../../assets/Kamin Logo.svg";
// import mcLeranLogo from "../../../assets/mcLeran.svg";
// import mercyLogo from "../../../assets/Mercylogo.svg";
import mindPathLogo from "../../../assets/mindpath-logo.svg";
// import qualityLogo from "../../../assets/Quality.svg";
import mercyImg from "../../../assets/Resources/mercyLogo.png";
import yaleImg from "../../../assets/yale.svg";

import {
  TrustSection,
  TrustTitle,
  LogoGrid,
  LogoImage,
} from "./HeroSection.style";
import SplitSection from "../../ui/SplitSection/SplitSection";
import heroSectionImage from "../../../assets/HomeScreen.svg";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
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
          onClick: () => {},
        }}
      />
      {/* TRUSTED BY */}
      <TrustSection mb={4} p={4} id="customers">
        <TrustTitle>
          Trusted by leading health systems and physician groups and specialty
          providers
          <span style={{ fontWeight: 600 }}>Learn more →</span>
        </TrustTitle>

        <LogoGrid>
          <LogoImage
            src={"https://www.carehospice.com/images/care-logo.gif"}
            alt="Care Hospice"
          />
          <LogoImage
            src={
              "https://www.mclaren.org/uploads/images/mclaren-logo-color.svg"
            }
            alt="McLaren Health"
          />

          <LogoImage src={yaleImg} alt="yaleNewHAvenHEalth" style={{width:"140px"}} />
          <LogoImage
            src={
              "https://azure-na-images.contentstack.com/v3/assets/blt3667c0ff4b42a45d/bltec3bcf779857babf/6698b9d4da94e2baeab2d9d7/wellstreet_logo.svg"
            }
            alt="wellstreet"
          />
          <LogoImage src={kaminLogo} alt="Kamin Health" />
          <LogoImage src={mindPathLogo} alt="MindPath Health" />
          <LogoImage src={mercyImg} alt="Mercy Health" />
          {/* <LogoImage src={qualityLogo} alt="Quality Care" /> */}
        </LogoGrid>
      </TrustSection>
    </>
  );
};

export default HeroSection;
