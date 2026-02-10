import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import FeatureSection from "../ui/featureSection/FeatureSection";

const features = [
  {
    icon: <SmartToyOutlinedIcon />,
    title: "Purpose-Built AI Agent Network",
    description:
      "Unlike generic automation tools, iCAN™ is a network of specialized AI agents designed exclusively for healthcare revenue cycle complexity.",
  },
  {
    icon: <MedicalServicesOutlinedIcon />,
    title: "Healthcare Expertise Meets AI Innovation",
    description:
      "Built by RCM veterans and technologists with decades of healthcare operations and IT experience.",
  },
  {
    icon: <BusinessOutlinedIcon />,
    title: "Proven at Enterprise Scale",
    description:
      "Deploy across health systems, clinics, and payers with support for complex organizational structures.",
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
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
      linkText="Lear More"
    />
  );
};

export default SuperChargeSection;
