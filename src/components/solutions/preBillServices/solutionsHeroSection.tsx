// import paymentPostingImage from "../../../assets/solutions/bannerImages/payBill.webp";
// import prebillImage from "../../../assets/solutions/editedimgs/prebill.webp";
import prebillImage from "../../../assets/heroBannerImages/PreBill Services.webp";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { ROUTES } from "../../../routes/RoutePaths";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="PreBill Services"
      eyebrow={
        <>
          PreBill <Highlight>Services</Highlight>
        </>
      }
      description="Catch errors before submission with AI-powered claim scrubbing, coding validation, and compliance checking—achieving 95%+ clean claim rates."
      image={prebillImage}
      prioritize={true}
      primaryAction={{
        label: "Request a Demo",
        onClick: () =>
          navigate(ROUTES.REQUEST_DEMO, {
            state: {
              fromLabel: "Pre-Bill Services",
              fromPath: "/solutions#preBillReview",
            },
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
