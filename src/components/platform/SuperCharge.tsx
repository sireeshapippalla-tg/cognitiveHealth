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
      "Unlike generic automation tools, iCAN™ ONE is a unified network of specialized AI agents designed exclusively for healthcare revenue cycle complexity. Each agent masters specific workflows—from pre-bill edits to appeals management—working together to orchestrate your entire revenue cycle.",
  },
  {
    icon: <img src={Innovation} alt="Innovation" />,
    title: "Healthcare Expertise Meets AI Innovation",
    description:
      "Built by RCM veterans and technologists with decades of healthcare operations and IT experience, our platform combines deep domain knowledge with cutting-edge generative AI. We understand your challenges because we've lived them."
  },
  {
    icon: <img src={Scale} alt="Scale" />,
    title: "Proven at Enterprise Scale",
    description:
      "Deployed across health systems and professional provider set-ups processing millions of transactions, iCAN™ ONE handles the complexity of real-world healthcare operations—multiple EMRs, diverse payer requirements, and constantly evolving regulations."
  },
  {
    icon: <img src={Deploy} alt="Deploy" />,
    title: "Deploy in Weeks, Not Months",
    description:
      "Pre-configured workflows and seamless integrations mean you see value fast. Our AI agents connect to any EMR through HL7, FHIR, API, or even UI-based methods—no expensive custom development required.",
  },
];

const SuperChargeSection = () => {
  return (
    <FeatureSection
      title="Super Charge Your Revenue Cycle With <span>AI Agents</span>"
      subtitle="Enterprise-grade AI platform built specifically for healthcare revenue cycle operations."
      background="#f9fafb"
      items={features}
      // linkText="Learn More"
    />
  );
};

export default SuperChargeSection;
