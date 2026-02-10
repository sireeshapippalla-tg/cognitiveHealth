import React from "react";
import SplitSection from "../ui/SplitSection/SplitSection";

const HeroSection: React.FC = () => {
  return (
    <>
      <SplitSection
        eyebrow="About CognitiveHealth"
        title="Agentic AI platform instead of Intelligent Process Automation"
        description=" Healthcare technology company focused on transforming revenue
              cycle operations through intelligent automation. We help
              healthcare organizations reduce operational complexity,
              improve financial outcomes, and enable teams to focus on
              delivering exceptional patient care."
        image={"/hero-image.png"}
        primaryAction={{ label: "Request a Demo" }}
        secondaryAction={{ label: "See Platform in Action →" }}
      />
    </>
  );
};

export default HeroSection;
