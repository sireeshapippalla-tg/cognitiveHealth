// import paymentPostingImage from "../../../assets/solutions/bannerImages/eligilibityDiscovery.jpeg";
// import eligibilityDiscoveryImage from "../../../assets/solutions/editedimgs/eligibilityDiscovery.jpeg";
import eligibilityDiscoveryImage from "../../../assets/heroBannerImages/Eligibility Discovery.png";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { ROUTES } from "../../../routes/RoutePaths";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection

      // eyebrow="Eligibility Discovery "
      eyebrow={
        <>
          Eligibility{" "}
          <Highlight>Discovery</Highlight>
        </>
      }
      description="Verify coverage in real-time and eliminate claim denials due to 
                  eligibility issues before patients ever walk through your door."
      image={eligibilityDiscoveryImage}
      primaryAction={{
        label: "Request a Demo",
        onClick: () =>
          navigate(ROUTES.REQUEST_DEMO, {
            state: { fromLabel: "Eligibility Discovery", fromPath: "/solutions#eligibilityDiscovery" },
          }),
      }}
      secondaryAction={{
        label: "See Platform in Action",
        onClick: () => {navigate("/resources#videos")},
      }}
    />
  );
};

export default SolutionsHeroSection;
