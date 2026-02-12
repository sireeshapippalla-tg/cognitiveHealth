import React from "react";
import SplitSection from "../ui/SplitSection/SplitSection";
import { Highlight } from "../ui/SplitSection/SplitSection.styles";
import heroSectionImage from "../../assets/HomeScreen.svg";

const AboutUsHeroSection: React.FC = () => {
  return (
    <>
      <SplitSection
        eyebrow={
          <>
            About <Highlight>CognitiveHealth</Highlight>
          </>
        }
        title="Agentic AI platform instead of Intelligent Process Automation"
        description="Healthcare technology company focused on transforming revenue cycle operations through intelligent automation. We help healthcare organizations reduce operational complexity, improve financial outcomes, and enable teams to focus on delivering exceptional patient care."
        image={heroSectionImage}
        primaryAction={{ label: "Request a Demo" }}
        secondaryAction={{ label: "See Platform in Action " }}
      />
    </>
  );
};

export default AboutUsHeroSection;
