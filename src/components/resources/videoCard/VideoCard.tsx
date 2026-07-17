import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, CircularProgress } from "@mui/material";

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
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <StyledCard
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CardImageWrapper onClick={onPlay}>
        {link?.includes("youtube.com") ? (
          <>
            {!iframeLoaded && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            )}
            <iframe
              src={link}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIframeLoaded(true)}
              style={{
                opacity: iframeLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out"
              }}
            />
          </>
        ) : (
          <>
            <CardImage src={image} alt={title} />
            <PlayIconOverlay onClick={onPlay}>
              <PlayArrowIcon />
            </PlayIconOverlay>
          </>
        )}
        {category && <CategoryChip label={category} />}
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
