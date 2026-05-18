import React from "react";
import {
  StyledCard,
  CardImageWrapper,
  CardImage,
  CategoryChip,
  CardContent,
  MetaInfo,
  CardTitle,
  CardDescription,
  ReadMoreLink,
  MetaItem,
} from "./ResourceCard.styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ResourceCardProps {
  image: string;
  category?: string;
  date?: string;
  readTime?: string;
  title: string;
  description: string;
  link: string;
  type: "blog" | "case-study" | "video" | "media";
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  image,
  category,
  date,
  readTime,
  title,
  description,
  link,
  type,
}) => {
  const getLinkText = () => {
    switch (type) {
      case "video":
        return "Watch Video";
      case "case-study":
        return "Read Case Study";
      default:
        return "Read More";
    }
  };

  return (
    <StyledCard
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        {category && <CategoryChip label={category} />}
      </CardImageWrapper>

      <CardContent>
        <MetaInfo>
          {date && (
            <MetaItem>
              <CalendarTodayOutlinedIcon />
              <span>{date}</span>
            </MetaItem>
          )}
          {date && readTime && <span>•</span>}
          {readTime && (
            <MetaItem>
              <AccessTimeOutlinedIcon />
              <span>{readTime}</span>
            </MetaItem>
          )}
        </MetaInfo>

        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <ReadMoreLink to={link} state={{ fromTab: type === "video" ? "videos" : type }}>
          {getLinkText()}
          {getLinkText() &&
            <ArrowForwardIcon sx={{ fontSize: "18px" }} />
          }
        </ReadMoreLink>
      </CardContent>
    </StyledCard>
  );
};

export default ResourceCard;
