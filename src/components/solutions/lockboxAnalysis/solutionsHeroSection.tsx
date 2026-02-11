import paymentPostingImage from "../../../assets/paymentpostingImage.svg";
import SplitSection from "../../ui/SplitSection/SplitSection";

const SolutionsHeroSection = () => {
  return (
    <SplitSection
      title="Lockbox management "
      description="Super Charge your revenue cycle with AI Agents"
      image={paymentPostingImage}
      primaryAction={{ label: "Request a Demo" }}
      secondaryAction={{ label: "See Platform in Action " }}
    />
  );
};

export default SolutionsHeroSection;
