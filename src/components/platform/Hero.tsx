import React from "react";
import SplitSection from "../ui/SplitSection/SplitSection";

import mainImg from "../../assets/Main Image.svg";

const Hero = () => {
  return (
    <>
      <SplitSection
        title="iCAN ONE"
        description="Super Charge your revenue cycle with AI Agents"
        // description="Deploy a purpose-built AI agent platform designed to automate..."
        image={mainImg}
        primaryAction={{ label: "Request a Demo" }}
        secondaryAction={{ label: "See Platform in Action" }}
      />
    </>
  );
};

export default Hero;
