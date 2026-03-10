import type { ReactNode } from "react";
import {
  StyledCard,
  ValueText,
  DescriptionText,
  IconWrapper,
  TitleText,
} from "./MetricCard.style";


interface MetricCardProps {
  value: string;
  title?: string;
  description: string;
  icon?: ReactNode;
  color?: string; // hex or theme color
}



export const MetricCard = ({
  value,
  title,
  description,
  icon,
  color = "var(--color-green)", // default green
}: MetricCardProps) => (
  <StyledCard elevation={0}>
    {/* Icon */}
    {icon && <IconWrapper sx={{ color }}>{icon}</IconWrapper>}

    {/* Value */}
    <ValueText  sx={{ color }}>
      {value}
    </ValueText>

    {/* Title (optional) */}
    {title && <TitleText  >{title}</TitleText>}

    {/* Description */}
    <DescriptionText >{description}</DescriptionText>
  </StyledCard>
);
