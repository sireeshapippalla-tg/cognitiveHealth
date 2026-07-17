import React from "react";
import { Link } from "react-router-dom";
import { Box, Chip } from "@mui/material";
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
} from "./ResourceCard.style";
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
  type: "blog" | "case-study" | "video" | "media" | "podcast";
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
      case "podcast":
        return "Listen Podcast";
      default:
        return "Read More";
    }
  };

  const showImage = type !== "blog" && type !== "media";

  return (
    <StyledCard
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {showImage ? (
        <Link
          to={link}
          state={{ fromTab: type === "video" ? "videos" : type }}
          style={{ display: "block", overflow: "hidden" }}
        >
          <CardImageWrapper>
            <CardImage src={image} alt={title} />
            {category && <CategoryChip label={category} />}
          </CardImageWrapper>
        </Link>
      ) : null}

      <CardContent>
        {!showImage && category && (
          <Box sx={{ mb: 1 }}>
            <Chip
              label={category}
              size="small"
              sx={{
                backgroundColor: "rgba(235, 123, 51, 0.1)",
                color: "#eb7b33",
                fontWeight: 700,
                fontSize: "12px",
              }}
            />
          </Box>
        )}
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

        <ReadMoreLink
          to={link}
          state={{ fromTab: type === "video" ? "videos" : type }}
        >
          {getLinkText()}
          {getLinkText() && <ArrowForwardIcon />}
        </ReadMoreLink>
      </CardContent>
    </StyledCard>
  );
};

export default ResourceCard;
