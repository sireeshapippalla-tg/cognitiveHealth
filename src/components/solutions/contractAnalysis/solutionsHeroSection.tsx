// import paymentPostingImage from "../../../assets/solutions/bannerImages/payerContract.jpeg";
import contractAnalysisImage from "../../../assets/solutions/bannerImages/payer_contract_analysis_fixed2.png";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow="Contract Analysis "
      description="Ensure you're paid correctly every time with AI-powered contract 
            modeling, variance detection, and automated underpayment recovery."
      image={contractAnalysisImage}
      primaryAction={{
          label: "Request a Demo",
          onClick: () => navigate("/contact-us"),
        }}
        secondaryAction={{
          label: "See Platform in Action",
          onClick: () => {navigate("/resources#videos")},
        }}
    />
  );
};

export default SolutionsHeroSection;
