import { 
  Box, 
  Typography, 
  Grid,
  Divider,
  Chip,
  Avatar,
  IconButton
} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

interface EpisodeInfo {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category?: string;
}

interface FeaturedInfoSectionProps {
  latestEpisode: EpisodeInfo;
  episodeNumber: number;
}

const FeaturedInfoSection: React.FC<FeaturedInfoSectionProps> = ({ latestEpisode, episodeNumber }) => {
  return (
    <Box sx={{ p: { xs: 3, md: 6 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="LATEST" sx={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontWeight: 700 }} size="small" />
          <Chip label={`EPISODE ${episodeNumber}`} sx={{ backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 700 }} size="small" />
          <Chip label={latestEpisode.date} variant="outlined" sx={{ borderColor: '#e2e8f0', color: '#64748b', fontWeight: 600 }} size="small" />
          <Chip label={latestEpisode.readTime} variant="outlined" sx={{ borderColor: '#e2e8f0', color: '#64748b', fontWeight: 600 }} size="small" />
        </Box>
      </Box>

      <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: '#0f172a', lineHeight: 1.2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
        {latestEpisode.title}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>Summary</Typography>
      <Typography variant="body1" sx={{ color: '#475569', mb: 3, fontSize: '1.05rem', lineHeight: 1.8 }}>
        {latestEpisode.description}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>Notes & Key Takeaways</Typography>
      <Box component="ul" sx={{ color: '#475569', pl: 2, mb: 4, '& li': { mb: 1, lineHeight: 1.7, fontSize: '1.05rem' } }}>
        <li>How generative AI minimizes manual entry errors in medical coding.</li>
        <li>Predictive modeling for reducing claim denial rates by up to 30%.</li>
        <li>Integrating AI solutions without disrupting existing EHR systems.</li>
        <li>Future-proofing healthcare financial operations.</li>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4, flexWrap: 'wrap' }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1 }}>Categories:</Typography>
        {latestEpisode.category && <Chip label={latestEpisode.category} variant="outlined" size="small" sx={{ color: '#475569', borderColor: '#cbd5e1' }} />}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>Hosted By</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" sx={{ width: 48, height: 48, border: '2px solid #fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>Jane Doe</Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>VP of Innovation</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>Special Guest</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" sx={{ width: 48, height: 48, border: '2px solid #fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>John Smith</Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>Chief Revenue Officer</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>Subscribe On:</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              component="a" 
              href="https://www.youtube.com/watch?v=-c8T3O2a1BM" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ backgroundColor: '#ff0000', color: '#fff', '&:hover': { backgroundColor: '#cc0000' } }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedInfoSection;
