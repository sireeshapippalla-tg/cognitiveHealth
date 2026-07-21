import React, { useState, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress, Box } from "@mui/material";
import { useInView } from "framer-motion";

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
  const [iframeLoading, setIframeLoading] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Load iframe only when at least 10% of the card is visible in the viewport
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  return (
    <StyledCard
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={link?.includes("youtube.com") ? undefined : onPlay}
    >
      <CardImageWrapper>
        {link?.includes("youtube.com") ? (
          <>
            {iframeLoading && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0f172a",
                  zIndex: 1,
                }}
              >
                <CircularProgress size={40} thickness={4} sx={{ color: "#0ea5e9" }} />
              </Box>
            )}
            {isInView && (
              <iframe
                src={link}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIframeLoading(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  opacity: iframeLoading ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            )}
          </>
        ) : (
          <>
            <CardImage src={image} alt={title} />
            <PlayIconOverlay onClick={onPlay}>
              <PlayArrowIcon sx={{ fontSize: "36px" }} />
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

        <ActionButton>
          Watch Video
          <ArrowForwardIcon sx={{ fontSize: "18px" }} />
        </ActionButton>
      </CardContent>
    </StyledCard>
  );
};

export default VideoCard;