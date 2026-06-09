import { Box, Container, Typography, Chip } from "@mui/material";
import { styled } from "@mui/system";
import HeadsetIcon from '@mui/icons-material/Headset';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const HeroBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  color: '#fff',
  padding: theme.spacing(12, 0, 16, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-10%',
    width: '60%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(0,0,0,0) 70%)',
    transform: 'rotate(30deg)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-50%',
    right: '-10%',
    width: '60%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)',
    transform: 'rotate(-30deg)',
  }
}));

const PodcastHero = () => {
  return (
    <HeroBox>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          <Chip 
            icon={<HeadsetIcon sx={{ fontSize: 16 }} />} 
            label="Official Podcast" 
            sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', mb: 3, backdropFilter: 'blur(10px)' }} 
          />
          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            CognitiveHealth Insights
          </Typography>
          <Typography variant="h6" sx={{ color: "#cbd5e1", fontWeight: 400, lineHeight: 1.6, mb: 4, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
            Listen to our experts discuss the latest trends, innovations, and strategies in healthcare revenue cycle management and AI technology.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#94a3b8' }}>
              <GraphicEqIcon />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Available on all major platforms</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </HeroBox>
  );
};

export default PodcastHero;
