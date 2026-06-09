import { podcastData } from "../../../data/podcastData";
import { Box, Card, Grid, Fade } from "@mui/material";
import { styled } from "@mui/system";
import FeaturedPlayerSection from "./FeaturedPlayerSection";
import FeaturedInfoSection from "./FeaturedInfoSection";

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  overflow: 'visible',
  position: 'relative',
  marginTop: theme.spacing(-10),
  zIndex: 10,
}));

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
