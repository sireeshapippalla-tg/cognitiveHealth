import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import FeatureSection from "../ui/featureSection/FeatureSection";

const features = [
  {
    icon: <SmartToyOutlinedIcon />,
    title: "Operational Complexity",
    description:
      "Healthcare revenue cycle operations involve countless manual tasks, exceptions, and edge cases that slow down teams and increase costs.",
  },
  {
    icon: <MedicalServicesOutlinedIcon />,
    title: "Fragmented Systems and Data",
    description:
      "Disconnected systems, inconsistent data formats, and lack of integration create inefficiencies and limit visibility across the revenue cycle.",
  },
  {
    icon: <BusinessOutlinedIcon />,
    title: "Staffing Shortages",
    description:
      "Healthcare organizations face persistent challenges recruiting and retaining skilled revenue cycle staff, making automation critical.",
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: "Rising Costs and Slower Cash Flow",
    description:
      "Manual processes, errors, and delays lead to higher operating costs, extended AR days, and reduced cash flow performance.",
  },
];

const WhyWeExistSection = () => {
  return (
    <FeatureSection
      title="Why We Exist"
      subtitle="Healthcare organizations face unprecedented operational challenges that traditional approaches cannot solve. CognitiveHealth exists to address these critical pain points."
      background="#f3f4f6"   // light grey like screenshot
      items={features}
    />
  );
};

export default WhyWeExistSection;
