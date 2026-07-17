import React from "react";
import SplitSection from "../ui/SplitSection/SplitSection";
import heroSectionImage from "../../assets/heroBannerImages/aboutusBannerImg.webp";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../ui/SplitSection/SplitSection.style";
import { ROUTES } from "../../routes/RoutePaths";

const AboutUsHeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow={
        <>
          <Highlight>CognitiveHealth</Highlight> Agentic AI platform
        </>
      }
      description="Healthcare technology company focused on transforming revenue cycle operations through intelligent automation. We help healthcare organizations reduce operational complexity, improve financial outcomes, and enable teams to focus on delivering exceptional patient care."
      image={heroSectionImage}
      prioritize={true}
      primaryAction={{
        label: "Request a Demo",
        onClick: () =>
          navigate(ROUTES.REQUEST_DEMO, {
            state: { fromLabel: "About Us", fromPath: "/about-us" },
          }),
      }}
      secondaryAction={{
        label: "See Platform in Action",
        onClick: () => {
          navigate("/resources/videos");
        },
      }}
    />
  );
};

export default AboutUsHeroSection;
