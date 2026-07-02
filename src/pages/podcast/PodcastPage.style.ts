import { styled, keyframes } from "@mui/system";
import { Box, Typography, Card, Container, Chip } from "@mui/material";

// Animations
export const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(14, 165, 233, 0); }
  100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
`;

export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// PodcastPage.tsx
export const PodcastPageWrapper = styled(Box)({
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  paddingBottom: "80px",
});

// PodcastHero.tsx
export const HeroBox = styled(Box)(({ theme }) => ({
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

export const HeroTextContainer = styled(Box)({
  textAlign: 'center',
  maxWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.02em',
  background: 'linear-gradient(to right, #fff, #94a3b8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: "#cbd5e1",
  fontWeight: 400,
  lineHeight: 1.6,
  marginBottom: theme.spacing(4),
  fontSize: '1.1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));

export const MajorPlatformsText = styled(Typography)({
  fontWeight: 600,
});

// FeaturedEpisode.tsx
export const GlassCard = styled(Card)(({ theme }) => ({
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

// PodcastHero.tsx
export const HeroContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
});

export const HeroChip = styled(Chip)({
  backgroundColor: 'rgba(255,255,255,0.1) !important',
  color: '#fff !important',
  marginBottom: '24px',
  backdropFilter: 'blur(10px)',
  '& .MuiChip-icon': {
    color: '#fff !important',
  },
});

export const PlatformRow = styled(Box)({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
});

export const PlatformWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#94a3b8',
});

export const PlatformText = styled(Typography)({
  fontWeight: 600,
});
