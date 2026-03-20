// import paymentPostingImage from "../../../assets/solutions/bannerImages/payerContract.jpeg";
import contractAnalysisImage from "../../../assets/solutions/editedimgs/payerContractAnalysis.jpeg"
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="Contract Analysis "
      eyebrow={
        <>
          Contract{" "}
          <Highlight>Analysis</Highlight>
        </>
      }
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
