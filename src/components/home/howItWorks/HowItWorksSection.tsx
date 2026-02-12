import AssignmentIcon from "@mui/icons-material/Assignment";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AppButton from "../../ui/appButton/AppButton";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import {
  StepsCard,
  StepsRow,
  ArrowBox,
  ButtonsRow,
  Wrapper,
  SectionContainer
} from "./HowItWorksSection.style";


const steps = [
  {
    title: "Take The Assessment",
    description: "Link to a questionnaire",
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
  return (
    <SectionContainer sx={{ backgroundColor: "#f9fafb" }}>
      <Wrapper>
        <SectionTitle title="How It Works" />

        <StepsCard>
          <StepsRow>
            {steps.map((step, index) => (
              <>
                <ProcessStep
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />

                {index !== steps.length - 1 && (
                  <ArrowBox>
                    <ArrowForwardIcon />
                  </ArrowBox>
                )}
              </>
            ))}
          </StepsRow>
        </StepsCard>

        <ButtonsRow>
          <AppButton variantType="primary" endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}>Request a Demo</AppButton>
          <AppButton variantType="outline" showBorder={true} endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}>See Platform in Action</AppButton>
        </ButtonsRow>
      </Wrapper>
    </SectionContainer>
  );
};

export default HowItWorksSection;
