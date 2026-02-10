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
  description?: string;     // ✅ NEW
  linkText?: string;
  onClick?: () => void;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  linkText = "Learn more",
  onClick,
}: FeatureCardProps) => (
  <Card onClick={onClick}>
    <Header>
      {icon && <IconBox>{icon}</IconBox>}
      <Title variant="h6">{title}</Title>
    </Header>

    {/* ✅ Optional description */}
    {description && <Description>{description}</Description>}

    {/* ✅ Optional link */}
    {linkText && (
      <LearnMoreButton endIcon={<ArrowForwardIcon />}>
        {linkText}
      </LearnMoreButton>
    )}
  </Card>
);
