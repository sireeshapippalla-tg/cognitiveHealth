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
      "Unlike generic automation tools, iCAN™ is a network of specialized AI agents designed exclusively for healthcare revenue cycle complexity.",
  },
  {
    icon: <img src={Innovation} alt="Innovation" />,
    title: "Healthcare Expertise Meets AI Innovation",
    description:
      "Built by RCM veterans and technologists with decades of healthcare operations and IT experience.",
  },
  {
    icon: <img src={Scale} alt="Scale" />,
    title: "Proven at Enterprise Scale",
    description:
      "Deploy across health systems, clinics, and payers with support for complex organizational structures.",
  },
  {
    icon: <img src={Deploy} alt="Deploy" />,
    title: "Deploy in Weeks, Not Months",
    description:
      "Pre-configured workflows and models enable rapid deployment without expensive custom development.",
  },
];

const SuperChargeSection = () => {
  return (
    <FeatureSection
      title="Super Charge Your Revenue Cycle With <span>AI Agents</span>"
      subtitle="Enterprise-grade AI platform built specifically for healthcare revenue cycle operations."
      background="#f9fafb"
      items={features}
      linkText="Learn More"
    />
  );
};

export default SuperChargeSection;
