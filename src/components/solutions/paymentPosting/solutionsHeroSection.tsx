import paymentPostingImage from "../../../assets/heroBannerImages/Payment Posting.webp";
// import paymentPostingImage from "../../../assets/solutions/editedimgs/paymentPosting.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { ROUTES } from "../../../routes/RoutePaths";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow={
        <>
          Payment Posting & <Highlight>Advanced Reconciliation</Highlight>
        </>
      }
      description="Eliminate manual payment processing with AI-powered automation that achieves 93.8% clean reconciliation rates while accelerating cash flow."
      image={paymentPostingImage}
      prioritize={true}
      primaryAction={{
        label: "Request a Demo",
        onClick: () =>
          navigate(ROUTES.REQUEST_DEMO, {
            state: { fromLabel: "Payment Posting", fromPath: "/solutions#paymentPosting" },
          }),
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
