// import paymentPostingImage from "../../../assets/solutions/bannerImages/paymentPosting.jpeg";
import paymentPostingImage from "../../../assets/solutions/editedimgs/paymentPosting.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection

        eyebrow={
    <>
      Payment Posting &{" "}
      <Highlight>Advanced Reconciliation</Highlight>
    </>
  }
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
