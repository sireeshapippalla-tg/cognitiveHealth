// import paymentPostingImage from "../../../assets/solutions/bannerImages/denialsMAnagement.jpeg";
import denialsImage from "../../../assets/solutions/editedimgs/denials.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow="Denials Workflow "
      padding="10px 80px 10px 80px"
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
