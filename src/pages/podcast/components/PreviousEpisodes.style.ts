import { styled } from "@mui/system";
import { Box, Typography, Card, CardContent, IconButton, Chip } from "@mui/material";

export const PrevEpisodesWrapper = styled(Box)({
  marginTop: '80px',
});

export const PrevHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '32px',
});

export const ViewAllButton = styled(Typography)({
  color: '#0ea5e9',
  fontWeight: 700,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const EpisodeCard = styled(Card)(({ theme }) => ({
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

export const CardImageWrapper = styled(Box)({
  position: 'relative',
  height: 180,
  overflow: 'hidden',
});

export const ImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)',
});

export const CardChipContainer = styled(Box)({
  position: 'absolute',
  bottom: 16,
  left: 16,
  display: 'flex',
  gap: '8px',
});

export const PlayButtonGroup = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.9)',
  display: 'flex',
  gap: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 0,
});

export const PrevTitle = styled(Typography)({
  fontWeight: 800,
  color: '#0f172a',
});

export const GlassChip = styled(Chip)<{ $fontWeight?: number }>(({ $fontWeight }) => ({
  backgroundColor: 'rgba(0,0,0,0.6) !important',
  color: '#fff !important',
  fontWeight: $fontWeight || 600,
  backdropFilter: 'blur(4px)',
}));

export const PlayAudioButton = styled(IconButton)({
  backgroundColor: 'rgba(255,255,255,0.95)',
  color: '#0ea5e9',
  width: 48,
  height: 48,
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: '#0ea5e9',
    color: '#fff',
    transform: 'scale(1.1)',
  },
});

export const WatchVideoButton = styled(IconButton)({
  backgroundColor: 'rgba(255,255,255,0.95)',
  color: '#0f172a',
  width: 48,
  height: 48,
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: '#0f172a',
    color: '#fff',
    transform: 'scale(1.1)',
  },
});

export const StyledCardContent = styled(CardContent)({
  padding: '24px !important',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const EpisodeDate = styled(Typography)({
  color: '#64748b',
  fontWeight: 600,
  display: 'block',
  marginBottom: '8px',
});

export const EpisodeTitle = styled(Typography)({
  fontWeight: 700,
  color: '#0f172a',
  marginBottom: '8px',
  lineHeight: 1.3,
  height: 'auto',
  flexGrow: 1,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const EpisodeDescription = styled(Typography)({
  lineHeight: 1.6,
  height: 60,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  marginTop: '8px',
});
