import paymentPostingImage from "../../../assets/solutions/bannerImages/paymentPosting.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow="Payment Posting & Advanced Reconciliation"
      description="Eliminate manual payment processing with AI-powered automation that achieves 93.8% clean reconciliation rates while accelerating cash flow."
      image={paymentPostingImage}
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
