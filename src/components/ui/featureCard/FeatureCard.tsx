import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Card,
  Header,
  IconBox,
  Title,
  Description,
  LearnMoreButton,
} from "./FeatureCard.style";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  linkText?: string;
  onClick?: () => void;
  variant?: "default" | "pink"; 
}

export const FeatureCard = ({
  icon,
  title,
  description,
  linkText,
  onClick,
  variant = "default",
}: FeatureCardProps) => (
  <Card variant={variant} onClick={onClick}>
    <Header>
      {icon && <IconBox>{icon}</IconBox>}
      <Title>{title}</Title>
    </Header>

    {description && <Description>{description}</Description>}

    {linkText && (
      <LearnMoreButton endIcon={<ArrowForwardIcon />}>
        {linkText}
      </LearnMoreButton>
    )}
  </Card>
);
