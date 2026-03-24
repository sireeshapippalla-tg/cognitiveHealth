import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  StyledCard,
  CardImageWrapper,
  CardImage,
  CategoryChip,
  CardContent,
  CardTitle,
  CardDescription,
  ActionButton,
  DurationBadge,
  PlayIconOverlay,
} from "./VideoCard.styles";

interface VideoCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  duration: string;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  image,
  category,
  title,
  description,
  duration,
  onPlay,
}) => {
  return (
    <StyledCard
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onPlay}
    >
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        {category && <CategoryChip label={category} />}
        <PlayIconOverlay>
          <PlayArrowIcon sx={{ fontSize: "36px" }} />
        </PlayIconOverlay>
        {duration &&
          <DurationBadge>{duration}</DurationBadge>
        }
      </CardImageWrapper>

      <CardContent>
        <CardTitle variant="h5">{title}</CardTitle>
        <CardDescription variant="body2">{description}</CardDescription>

        <ActionButton>
          Watch Video
          <ArrowForwardIcon sx={{ fontSize: "18px" }} />
        </ActionButton>
      </CardContent>
    </StyledCard>
  );
};

export default VideoCard;
