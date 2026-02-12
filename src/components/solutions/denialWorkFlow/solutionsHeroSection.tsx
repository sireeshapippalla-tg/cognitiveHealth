import paymentPostingImage from "../../../assets/paymentpostingImage.svg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      title="Denials Workflow "
      description="Super Charge your revenue cycle with AI Agents"
      image={paymentPostingImage}
   primaryAction={{
          label: "Request a Demo",
          onClick: () => navigate("/contact-us"),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => {},
        }}
    />
  );
};

export default SolutionsHeroSection;
