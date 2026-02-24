import Network from "../../assets/Platform/SuperCharge/Network.svg";
import Innovation from "../../assets/Platform/SuperCharge/Innovation.svg";
import Scale from "../../assets/Platform/SuperCharge/Scale.svg";
import Deploy from "../../assets/Platform/SuperCharge/Deploy.svg";

import FeatureSection from "../ui/featureSection/FeatureSection";

const features = [
  {
    icon: <img src={Network} alt="Network" />,
    title: "Purpose-Built AI Agent Network",
    description:
      "Unlike generic automation tools, iCAN™ ONE is a unified network of specialized AI agents designed exclusively for healthcare revenue cycle workflows, from pre-authorization to final payment posting and reporting.",
  },
  {
    icon: <img src={Innovation} alt="Innovation" />,
    title: "Built by RCM Veterans",
    description:
      "Developed by revenue cycle executives and healthcare IT leaders with decades of operational experience. We understand your challenges because we've lived them."
  },
  {
    icon: <img src={Scale} alt="Scale" />,
    title: "Rapid Time-to-Value",
    description:
      "Pre-configured workflows and seamless integrations mean you see value fast. Our AI agents connect to any EMR through HL7, FHIR, API, or  UI-based methods, no expensive custom development required."
  },
  {
    icon: <img src={Deploy} alt="Deploy" />,
    title: "Continuous Learning AI",
    description:
      "Every claim processed, every denial overturned, every authorization obtained makes your AI agents smarter. The platform continuously learns from your unique workflows and improves over time.",
  },
];

const SuperChargeSection = () => {
  return (
    <FeatureSection
      title="Super Charge Your Revenue Cycle With <span>AI Agents</span>"
      subtitle="A unified network of specialized AI agents designed exclusively for revenue cycle operations."
      background="#f9fafb"
      items={features}
      // linkText="Learn More"
    />
  );
};

export default SuperChargeSection;
