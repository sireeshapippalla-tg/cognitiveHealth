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
} from "./VideoCard.style";

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
  link,
  duration,
  onPlay,
}) => {
  return (
    <StyledCard
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CardImageWrapper onClick={onPlay}>
        {/* Always show image */}
        {link?.includes("youtube.com") ? (
          <iframe
            src={link}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <CardImage src={image} alt={title} />

            {/* Play Button */}
            <PlayIconOverlay onClick={onPlay}>
              <PlayArrowIcon />
            </PlayIconOverlay>
          </>
        )}
        {category && <CategoryChip label={category} />}

        {/* Duration */}
        {duration && <DurationBadge>{duration}</DurationBadge>}
      </CardImageWrapper>

      <CardContent>
        <CardTitle variant="h5">{title}</CardTitle>

        <CardDescription variant="body2">{description}</CardDescription>

        <ActionButton onClick={onPlay}>
          Watch Video
          <ArrowForwardIcon />
        </ActionButton>
      </CardContent>
    </StyledCard>
  );
};

export default VideoCard;
