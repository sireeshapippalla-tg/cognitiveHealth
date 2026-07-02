// import paymentPostingImage from "../../../assets/solutions/bannerImages/denialsMAnagement.webp";
// import denialsImage from "../../../assets/solutions/editedimgs/denials.webp";
import denialsImage from "../../../assets/heroBannerImages/denialsHero.webp";
import SplitSection from "../../ui/SplitSection/SplitSection";
import { useNavigate } from "react-router-dom";
import { Highlight } from "../../ui/SplitSection/SplitSection.style";
import { ROUTES } from "../../../routes/RoutePaths";

const SolutionsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <SplitSection
      // eyebrow="Denials Workflow "
      eyebrow={
        <>
          Denials <Highlight>Workflow</Highlight>
        </>
      }
      description="Turn denials into recoveries with AI-powered prevention, root cause analysis, and automated appeal generation."
      image={denialsImage}
      prioritize={true}
      primaryAction={{
        label: "Request a Demo",
        onClick: () =>
          navigate(ROUTES.REQUEST_DEMO, {
            state: {
              fromLabel: "Denial Workflow",
              fromPath: "/solutions#denialWorkflow",
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
