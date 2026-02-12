import containerImg from "../../assets/aboutUs/Container.svg";
import containerOneImg from "../../assets/aboutUs/Container (1).svg";
import containerTwoImg from "../../assets/aboutUs/Container (2).svg";
import containerThreeImg from "../../assets/aboutUs/Container (3).svg";

import FeatureSection from "../ui/featureSection/FeatureSection";
import { Box } from "@mui/material";
const features = [
  {
    icon: <img src={containerImg} alt="Operational Complexity" />,
    title: "Operational Complexity",
    description:
      "Healthcare revenue cycle operations involve countless manual tasks, exceptions, and edge cases that slow down teams and increase costs.",
  },
  {
    icon: <img src={containerOneImg} alt="Operational Complexity" />,

    title: "Fragmented Systems and Data",
    description:
      "Disconnected systems, inconsistent data formats, and lack of integration create inefficiencies and limit visibility across the revenue cycle.",
  },
  {
    icon: <img src={containerTwoImg} alt="Operational Complexity" />,

    title: "Staffing Shortages",
    description:
      "Healthcare organizations face persistent challenges recruiting and retaining skilled revenue cycle staff, making automation critical.",
  },
  {
    icon: <img src={containerThreeImg} alt="Operational Complexity" />,

    title: "Rising Costs and Slower Cash Flow",
    description:
      "Manual processes, errors, and delays lead to higher operating costs, extended AR days, and reduced cash flow performance.",
  },
];

const WhyWeExistSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 8 }, // left & right padding
        py: { xs: 4, sm: 6, md: 8 }, // top & bottom padding
      }}
    >
      <FeatureSection
        title="Why We Exist"
        subtitle="Healthcare organizations face unprecedented operational challenges that traditional approaches cannot solve. CognitiveHealth exists to address these critical pain points:"
        background="#F9FAFB"
        items={features}
      />
    </Box>
  );
};

export default WhyWeExistSection;
