import React from "react";
import {
  StyledCard,
  CardImageWrapper,
  CardImage,
  PlayButtonOverlay,
  PlayButton,
  CategoryChip,
  CardContent,
  CardTitle,
  CardDescription,
  Footer,
  WatchLink,
  DurationBadge,
} from "./VideoCard.styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface VideoCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  duration?: string;
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
    <StyledCard onClick={onPlay}>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        <CategoryChip label={category} />
        <PlayButtonOverlay className="play-button">
          <PlayButton
            onClick={(e) => {
                e.stopPropagation();
              onPlay();
            }}
          >
            <PlayArrowIcon />
</PlayButton>

        </PlayButtonOverlay>
      </CardImageWrapper>

      <CardContent>
        <CardTitle variant="h3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <Footer>
          <WatchLink to={link} className="read-more-link">
            Watch Video
            <ArrowForwardIcon fontSize="small" />
          </WatchLink>
          {duration && (
            <DurationBadge>
              <AccessTimeOutlinedIcon />
              <span>{duration}</span>
            </DurationBadge>
          )}
        </Footer>
      </CardContent>
    </StyledCard>
  );
};

export default VideoCard;
