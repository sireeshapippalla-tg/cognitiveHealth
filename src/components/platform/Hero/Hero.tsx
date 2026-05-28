import { useNavigate } from "react-router-dom";
import SplitSection from "../../ui/SplitSection/SplitSection";

// import mainImg from "../../../assets/Main Image.svg";
import mainImg from "../../../assets/heroBannerImages/Platform.webp";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { ROUTES } from "../../../routes/RoutePaths";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <SplitSection
        // eyebrow="iCAN™ ONE"
        eyebrow={
          <>
            iCAN™
            <Highlight> ONE</Highlight>
          </>
        }
        description="The AI Agent Platform for Healthcare RCM"
        // description="Deploy a purpose-built AI agent platform designed to automate..."
        image={mainImg}
        prioritize={true}
        primaryAction={{
          label: "Request a Demo",
          onClick: () =>
            navigate(ROUTES.REQUEST_DEMO, {
              state: { fromLabel: "Platform", fromPath: "/platform" },
            }),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => navigate("/resources#videos"),
        }}
      />
    </>
  );
};

export default Hero;
