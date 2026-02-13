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
  // WatchLink,
  DurationBadge,
} from "./VideoCard.styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

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
  // link,
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
          <Box
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            className="read-more-link"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#E88D3E",
              cursor: "pointer",
            }}
          >
            Watch Video
            <ArrowForwardIcon fontSize="small" />
          </Box>

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
