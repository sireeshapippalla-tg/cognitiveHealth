import React from "react";
import {
  StyledCard,
  CardImageWrapper,
  CardImage,
  MetricOverlay,
  MetricValue,
  MetricLabel,
  CardContent,
  CategoryChip,
  CardTitle,
  CardDescription,
  ReadMoreLink,
} from "./CaseStudyCard.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "../../../assets/Resources/BusinessIcon.svg" // Example icon for category

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
    <StyledCard>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        {metricValue && metricLabel && (
          <MetricOverlay>
            <MetricValue>{metricValue}</MetricValue>
            <MetricLabel>{metricLabel}</MetricLabel>
          </MetricOverlay>
        )}
      </CardImageWrapper>

      <CardContent>
        <CategoryChip 
            icon={<img src={BusinessIcon} alt="icon" width={14} height={14} />} 
            label={category} 
            size="small" 
        />
        
        <CardTitle variant="h3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <ReadMoreLink to={link} className="read-more-link">
          Read Case Study
          <ArrowForwardIcon fontSize="small" />
        </ReadMoreLink>
      </CardContent>
    </StyledCard>
  );
};

export default CaseStudyCard;
