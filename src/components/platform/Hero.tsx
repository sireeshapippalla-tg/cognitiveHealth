import { useNavigate } from "react-router-dom";
import SplitSection from "../ui/SplitSection/SplitSection";

import mainImg from "../../assets/Main Image.svg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <SplitSection
        eyebrow="iCAN ONE"
        description="Super Charge your revenue cycle with AI Agents"
        // description="Deploy a purpose-built AI agent platform designed to automate..."
        image={mainImg}
        primaryAction={{
          label: "Request a Demo",
          onClick: () => navigate("/contact-us"),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => {},
        }}
      />
    </>
  );
};

export default Hero;
