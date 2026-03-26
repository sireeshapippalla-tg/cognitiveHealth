// import paymentPostingImage from "../../../assets/solutions/bannerImages/denialsMAnagement.jpeg";
// import denialsImage from "../../../assets/solutions/editedimgs/denials.jpeg";
import denialsImage from "../../../assets/heroBannerImages/denialsHero.png";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="Denials Workflow "
      eyebrow={
        <>
          Denials <Highlight>Workflow</Highlight>
        </>
      }
      description="Turn denials into recoveries with AI-powered prevention, root cause analysis, and automated appeal generation."
      image={denialsImage}
      primaryAction={{
        label: "Request a Demo",
        onClick: () => navigate("/contact-us"),
      }}
      secondaryAction={{
        label: "See Platform in Action",
        onClick: () => {
          navigate("/resources#videos");
        },
      }}
    />
  );
};

export default SolutionsHeroSection;
