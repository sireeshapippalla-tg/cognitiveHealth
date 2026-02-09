import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Card,
  Header,
  IconBox,
  Title,
  LearnMoreButton,
} from "./FeatureCard.style";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  linkText?: string;
  onClick?: () => void;
}

export const FeatureCard = ({
  icon,
  title,
  linkText = "Learn more",
  onClick,
}: FeatureCardProps) => (
  <Card onClick={onClick}>
    <Header>
      {icon && <IconBox>{icon}</IconBox>}
      <Title variant="h6">{title}</Title>
    </Header>

    <LearnMoreButton endIcon={<ArrowForwardIcon />}>
      {linkText}
    </LearnMoreButton>
  </Card>
);
