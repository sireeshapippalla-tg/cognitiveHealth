import { useState } from "react";
import { Grid, Fade } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { podcastData } from "../../../data/podcastData";
import {
  PrevEpisodesWrapper,
  PrevHeader,
  PrevTitle,
  ViewAllButton,
  EpisodeCard,
  CardImageWrapper,
  ImageOverlay,
  CardChipContainer,
  GlassChip,
  PlayButtonGroup,
  PlayAudioButton,
  WatchVideoButton,
  StyledCardContent,
  EpisodeDate,
  EpisodeTitle,
  EpisodeDescription
} from "./PreviousEpisodes.style";

interface PreviousEpisodesProps {
  featuredPodcastId?: string;
  onSelectEpisode?: (id: string) => void;
}

const PreviousEpisodes: React.FC<PreviousEpisodesProps> = ({ featuredPodcastId, onSelectEpisode }) => {
  const [showAll, setShowAll] = useState(false);
  
  // Filter out the currently featured episode
  const previousEpisodes = podcastData.filter(ep => ep.id !== featuredPodcastId);
  const displayedEpisodes = showAll ? previousEpisodes : previousEpisodes.slice(0, 3);

  return (
    <PrevEpisodesWrapper>
      <PrevHeader>
        <PrevTitle variant="h4">
          Latest Episodes
        </PrevTitle>
        {previousEpisodes.length > 3 && (
          <ViewAllButton 
            variant="button" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </ViewAllButton>
        )}
      </PrevHeader>
      
      <Grid container spacing={3}>
        {displayedEpisodes.map((episode, idx) => (
          <Grid size={{xs:12,md:4}} key={episode.id}>
            <Fade in={true} timeout={1000 + (idx * 200)}>
              <EpisodeCard>
                <CardImageWrapper>
                  <img src={episode.image} alt={episode.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', }} className="episode-img" />
                  <ImageOverlay />
                  <CardChipContainer>
                     <GlassChip label={`EP ${podcastData.length - podcastData.findIndex(e => e.id === episode.id)}`} size="small" $fontWeight={700} $bg="rgba(235, 123, 51, 0.95)" />
                     <GlassChip label={episode.readTime} size="small" $fontWeight={600} $bg="rgba(29, 78, 216, 0.8)" />
                  </CardChipContainer>
                  <PlayButtonGroup className="play-btn-group">
                    <PlayAudioButton 
                      onClick={() => onSelectEpisode && onSelectEpisode(episode.id)}
                      title="Listen Audio"
                    >
                      <PlayArrowRoundedIcon style={{ fontSize: 28 }} />
                    </PlayAudioButton>
                    <WatchVideoButton 
                      onClick={() => onSelectEpisode && onSelectEpisode(episode.id)}
                      title="Watch Video"
                    >
                      <OndemandVideoIcon style={{ fontSize: 24 }} />
                    </WatchVideoButton>
                  </PlayButtonGroup>
                </CardImageWrapper>
                <StyledCardContent>
                  <EpisodeDate variant="caption">
                    {episode.date}
                  </EpisodeDate>
                  <EpisodeTitle variant="h6">
                    {episode.title}
                  </EpisodeTitle>
                  <EpisodeDescription variant="body2" color="text.secondary">
                    {episode.description}
                  </EpisodeDescription>
                </StyledCardContent>
              </EpisodeCard>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </PrevEpisodesWrapper>
  );
};

export default PreviousEpisodes;
