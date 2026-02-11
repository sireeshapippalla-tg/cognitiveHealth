import { type ReactNode } from 'react'


import {
  CardRoot,
  IconWrapper,
  CardTitle,
  CardDescription,
} from "./ReUsableCard.styles";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ReusableCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <CardRoot>
      <IconWrapper>{icon}</IconWrapper>

      <CardTitle>{title}</CardTitle>

      <CardDescription>{description}</CardDescription>
    </CardRoot>
  );
};

export default ReusableCard;
