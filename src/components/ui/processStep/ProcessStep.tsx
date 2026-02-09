import {
  StepWrapper,
  IconBox,
  StepTitle,
  StepDescription,
} from "./ProcessStep.style";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <StepWrapper>
    <IconBox>{icon}</IconBox>
    <StepTitle>{title}</StepTitle>
    <StepDescription>{description}</StepDescription>
  </StepWrapper>
);
