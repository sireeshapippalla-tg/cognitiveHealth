// import paymentPostingImage from "../../../assets/solutions/bannerImages/lockboxMAnagement.jpeg";
// import paymentPostingImage from "../../../assets/solutions/editedimgs/lockbox.jpeg";
import paymentPostingImage from "../../../assets/heroBannerImages/Lockbox Management.png";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.styles";
import { ROUTES } from "../../../routes/RoutePaths";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="Lockbox management "
      eyebrow={
    <>
      Lockbox {" "}
      <Highlight>Management</Highlight>
    </>
  }
      description="Transform paper remittances and correspondence into digital workflows with AI-powered lockbox management that eliminates manual data entry and tracking"
      image={paymentPostingImage}
     primaryAction={{
          label: "Request a Demo",
          onClick: () =>
            navigate(ROUTES.REQUEST_DEMO, {
              state: { fromLabel: "Lockbox Management", fromPath: "/solutions#lockboxManagement" },
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
