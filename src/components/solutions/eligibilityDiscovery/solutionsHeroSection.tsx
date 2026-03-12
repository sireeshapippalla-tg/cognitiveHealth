// import paymentPostingImage from "../../../assets/solutions/bannerImages/eligilibityDiscovery.jpeg";
import eligibilityDiscoveryImage from "../../../assets/solutions/editedimgs/eligibilityDiscovery.jpeg";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
    padding="10px 80px 10px 80px"
      eyebrow="Eligibility Discovery "
      description="Verify coverage in real-time and eliminate claim denials due to 
                  eligibility issues before patients ever walk through your door."
      image={eligibilityDiscoveryImage}
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
