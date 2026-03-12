// import paymentPostingImage from "../../../assets/solutions/bannerImages/payBill.jpeg";
import prebillImage from "../../../assets/solutions/editedimgs/prebill.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow="PreBill Services"
      padding="10px 80px 10px 80px"
      description="Catch errors before submission with AI-powered claim scrubbing, coding validation, and compliance checking—achieving 95%+ clean claim rates."
      image={prebillImage}
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
