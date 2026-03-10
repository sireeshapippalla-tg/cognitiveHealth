import paymentPostingImage from "../../../assets/solutions/bannerImages/lockboxMAnagement.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      eyebrow="Lockbox management "
      description="Transform paper remittances and correspondence into digital workflows with AI-powered lockbox management that eliminates manual data entry and tracking"
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
