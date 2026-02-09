import {
  StyledCard,
  ValueText,
  DescriptionText,
} from "./MetricCard.style";

interface MetricCardProps {
  value: string;
  description: string;
}

export const MetricCard = ({ value, description }: MetricCardProps) => (
  <StyledCard elevation={0}>
    <ValueText variant="h3">{value}</ValueText>
    <DescriptionText variant="body1">
      {description}
    </DescriptionText>
  </StyledCard>
);
