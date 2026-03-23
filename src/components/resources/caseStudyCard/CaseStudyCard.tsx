import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  StyledCard,
  CardImageWrapper,
  CardImage,
  CategoryChip,
  MetricBadge,
  MetricValue,
  MetricLabel,
  CardContent,
  CardTitle,
  CardDescription,
  ReadMoreLink,
} from "./CaseStudyCard.styles";

interface CaseStudyCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  metricValue?: string;
  metricLabel?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  category,
  title,
  description,
  link,
  metricValue,
  metricLabel,
}) => {
  return (
    <StyledCard
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        {category && <CategoryChip label={category} />}
        {metricValue && (
          <MetricBadge>
            <MetricValue>{metricValue}</MetricValue>
            <MetricLabel>{metricLabel}</MetricLabel>
          </MetricBadge>
        )}
      </CardImageWrapper>

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <ReadMoreLink to={link}>
          Read Case Study
          <ArrowForwardIcon sx={{ fontSize: "18px" }} />
        </ReadMoreLink>
      </CardContent>
    </StyledCard>
  );
};

export default CaseStudyCard;
