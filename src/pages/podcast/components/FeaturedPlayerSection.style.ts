import { styled, keyframes } from "@mui/system";
import { Box, Typography, IconButton, Chip } from "@mui/material";

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

export const PlayerWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
  borderRadius: '24px 24px 0 0',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
    borderRight: '1px solid #e2e8f0',
    borderRadius: '24px 0 0 24px',
  },
}));

export const ImageWrapper = styled(Box)({
  marginBottom: '32px',
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  animation: `${float} 6s ease-in-out infinite`,
});

export const BadgeContainer = styled(Box)({
  position: 'absolute',
  top: 16,
  right: 16,
});

export const ControlCard = styled(Box)({
  marginBottom: '32px',
  padding: '24px',
  borderRadius: '16px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
});

export const MediaControls = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
});

export const PlayButtonPrimary = styled(IconButton)({
  backgroundColor: '#0ea5e9',
  color: 'white',
  width: 72,
  height: 72,
  boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.5)',
  '&:hover': {
    backgroundColor: '#0284c7',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.2s ease-in-out',
  animation: `${pulse} 2s infinite`,
});

export const ProgressWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const TimeText = styled(Typography)({
  fontWeight: 600,
  color: '#64748b',
  minWidth: 35,
});

export const ProgressBar = styled(Box)({
  flex: 1,
  height: 6,
  backgroundColor: '#f1f5f9',
  marginLeft: '16px',
  marginRight: '16px',
  borderRadius: 3,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
});

export const ProgressFill = styled(Box)<{ $width: number }>((props) => ({
  width: `${props.$width}%`,
  height: '100%',
  backgroundColor: '#0ea5e9',
  borderRadius: 3,
  position: 'relative',
  transition: 'width 0.1s linear',
}));

export const ProgressHandle = styled(Box)({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 10,
  height: 10,
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: '0 0 5px rgba(0,0,0,0.3)',
});

export const VideoPlayerWrapper = styled(Box)({
  backgroundColor: '#0f172a',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
});

export const VideoAspectBox = styled(Box)<{ $bg: string }>((props) => ({
  width: '100%',
  aspectRatio: '16/9',
  backgroundImage: `url(${props.$bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const VideoOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2))',
});

export const VideoPlayContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '24px',
  width: '100%',
  textAlign: 'center',
});

export const VideoPlayButton = styled(IconButton)({
  backgroundColor: 'rgba(255,255,255,0.2)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  width: 64,
  height: 64,
  '&:hover': {
    backgroundColor: '#ff0000',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.3s',
});

export const SkipButton = styled(IconButton)({
  color: '#94a3b8',
  '&:hover': {
    color: '#0f172a',
  },
});

export const FeaturedChip = styled(Chip)({
  fontWeight: 800,
  letterSpacing: '1px',
});

export const WatchVideoChip = styled(Chip)({
  backgroundColor: 'rgba(255,255,255,0.15) !important',
  color: '#fff !important',
  marginBottom: '8px',
  border: '1px solid rgba(255,255,255,0.2)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.25) !important',
  },
  '& .MuiChip-icon': {
    color: '#fff !important',
  },
});

export const WatchVideoTitle = styled(Typography)({
  color: '#fff',
  fontWeight: 600,
});
