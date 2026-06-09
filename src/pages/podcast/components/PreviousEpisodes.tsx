import { useState } from "react";
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  IconButton, 
  Grid,
  Chip,
  Fade
} from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { podcastData } from "../../../data/podcastData";

interface PreviousEpisodesProps {
  featuredPodcastId?: string;
  onSelectEpisode?: (id: string) => void;
}

const EpisodeCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: '1px solid #e2e8f0',
  background: '#ffffff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.01)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    borderColor: 'transparent',
    '& .play-btn-group': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '& .episode-img': {
      transform: 'scale(1.05)',
    }
  }
}));


const PreviousEpisodes: React.FC<PreviousEpisodesProps> = ({ featuredPodcastId, onSelectEpisode }) => {
  const [showAll, setShowAll] = useState(false);
  
  // Filter out the currently featured episode
  const previousEpisodes = podcastData.filter(ep => ep.id !== featuredPodcastId);
  const displayedEpisodes = showAll ? previousEpisodes : previousEpisodes.slice(0, 3);

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
          Latest Episodes
        </Typography>
        {previousEpisodes.length > 3 && (
          <Typography 
            variant="button" 
            onClick={() => setShowAll(!showAll)}
            sx={{ color: '#0ea5e9', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          >
            {showAll ? "Show Less" : "View All"}
          </Typography>
        )}
      </Box>
      
      <Grid container spacing={3}>
        {displayedEpisodes.map((episode, idx) => (
          <Grid size={{xs:12,md:4}} key={episode.id}>
            <Fade in={true} timeout={1000 + (idx * 200)}>
              <EpisodeCard>
                <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                  <img src={episode.image} alt={episode.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', }} className="episode-img" />
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }} />
                  <Box sx={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 1 }}>
                     <Chip label={`EP ${podcastData.length - podcastData.findIndex(e => e.id === episode.id)}`} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontWeight: 700, backdropFilter: 'blur(4px)' }} />
                     <Chip label={episode.readTime} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontWeight: 600, backdropFilter: 'blur(4px)' }} />
                  </Box>
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.9)', display: 'flex', gap: 2, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', opacity: 0 }} className="play-btn-group">
                    <IconButton 
                      onClick={() => onSelectEpisode && onSelectEpisode(episode.id)}
                      title="Listen Audio"
                      sx={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0ea5e9', width: 48, height: 48, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', '&:hover': { backgroundColor: '#0ea5e9', color: '#fff', transform: 'scale(1.1)' } }}
                    >
                      <PlayArrowRoundedIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton 
                      onClick={() => onSelectEpisode && onSelectEpisode(episode.id)}
                      title="Watch Video"
                      sx={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#0f172a', width: 48, height: 48, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', '&:hover': { backgroundColor: '#0f172a', color: '#fff', transform: 'scale(1.1)' } }}
                    >
                      <OndemandVideoIcon sx={{ fontSize: 24 }} />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, display: 'block', mb: 1 }}>
                    {episode.date}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, lineHeight: 1.3, height: 'auto', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {episode.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, height: 60, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', mt: 1 }}>
                    {episode.description}
                  </Typography>
                </CardContent>
              </EpisodeCard>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreviousEpisodes;
