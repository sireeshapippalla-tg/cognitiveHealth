import { podcastData } from "../../../data/podcastData";
import { Box, Grid, Fade } from "@mui/material";
import FeaturedPlayerSection from "./FeaturedPlayerSection";
import FeaturedInfoSection from "./FeaturedInfoSection";
import { GlassCard } from "../PodcastPage.style";

interface FeaturedEpisodeProps {
  featuredPodcastId?: string;
}

const FeaturedEpisode: React.FC<FeaturedEpisodeProps> = ({ featuredPodcastId }) => {
  const latestEpisodeIndex = featuredPodcastId ? podcastData.findIndex(ep => ep.id === featuredPodcastId) : 0;
  const actualIndex = latestEpisodeIndex === -1 ? 0 : latestEpisodeIndex;
  const latestEpisode = podcastData[actualIndex];
  const episodeNumber = podcastData.length - actualIndex;

  return (
    <Fade in={true} timeout={1000}>
      <Box>
        <GlassCard>
          <Grid container>
            {/* Left Column: Visual & Players */}
            <Grid size={{xs:12,md:5}}>
              <FeaturedPlayerSection latestEpisode={latestEpisode} />
            </Grid>

            {/* Right Column: Info */}
            <Grid size={{xs:12,md:7}}>
              <FeaturedInfoSection latestEpisode={latestEpisode} episodeNumber={episodeNumber} />
            </Grid>
          </Grid>
        </GlassCard>
      </Box>
    </Fade>
  );
};

export default FeaturedEpisode;
