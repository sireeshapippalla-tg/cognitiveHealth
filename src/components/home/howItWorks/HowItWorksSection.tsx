// import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
import {
  ReusableHowItWorks,
  type HowItWorksStep,
} from "../../ui/HowItWorks/ReusableHowItWorks";

const steps: HowItWorksStep[] = [
  {
    title: "Take The Assessment",
    description: "Calculate Your RCM Savings Potential",
    icon: <AssignmentIcon fontSize="small" />,
  },
  {
    title: "Get Your CognitiveHealth Insights",
    description: "Receive personalized analysis",
    icon: <LightbulbOutlinedIcon fontSize="small" />,
  },
  {
    title: "Follow Your Personalized Plan",
    description: "Implement tailored solutions",
    icon: <MapOutlinedIcon fontSize="small" />,
  },
];

const HowItWorksSection = () => {
  const navigate = useNavigate();

  return (
    <ReusableHowItWorks
      title="How It Works"
      steps={steps}
      ctaText="Take Assessment →"
      onCtaClick={() => navigate("/assessment")}
      themeColor="#c2410c"
      backgroundColor="#f9fafb"
    />
  );
};

export default HowItWorksSection;
