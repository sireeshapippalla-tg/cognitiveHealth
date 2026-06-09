import { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoPlayerModal from "../../../components/resources/videoPlayerModal/VideoPlayerModal";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(14, 165, 233, 0); }
  100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PlayButtonPrimary = styled(IconButton)(() => ({
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
}));

interface EpisodePlayerInfo {
  title: string;
  image: string;
}

interface FeaturedPlayerSectionProps {
  latestEpisode: EpisodePlayerInfo;
}

const FeaturedPlayerSection: React.FC<FeaturedPlayerSectionProps> = ({ latestEpisode }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const skipForward = () => {
    if (audioRef.current) audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
  };

  const skipBackward = () => {
    if (audioRef.current) audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = Math.max(0, Math.min(1, x / bounds.width));
    audioRef.current.currentTime = percentage * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const togglePlayAudio = () => {
    if (!isPlayingAudio) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlayingAudio(!isPlayingAudio);
    if (isPlayingVideo) setIsPlayingVideo(false);
  };

  const togglePlayVideo = () => {
    setIsPlayingVideo(!isPlayingVideo);
    if (isPlayingAudio) setIsPlayingAudio(false);
  };

  return (
    <>
      <Box sx={{ p: { xs: 3, md: 5 }, background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)', borderRight: { md: '1px solid #e2e8f0' }, borderRadius: { xs: '24px 24px 0 0', md: '24px 0 0 24px' }, height: '100%' }}>
        <Box sx={{ mb: 4, position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', animation: `${float} 6s ease-in-out infinite` }}>
          <img src={latestEpisode.image} alt={latestEpisode.title} style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
            <Chip label="NEW" color="error" sx={{ fontWeight: 800, letterSpacing: 1 }} />
          </Box>
        </Box>

        {/* Audio Player */}
        <Box sx={{ mb: 4, p: 3, borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <IconButton onClick={skipBackward} sx={{ color: '#94a3b8', '&:hover': { color: '#0f172a' } }}><SkipPreviousRoundedIcon fontSize="large" /></IconButton>
            <PlayButtonPrimary onClick={togglePlayAudio} sx={{ mx: 3 }}>
              {isPlayingAudio ? <PauseRoundedIcon sx={{ fontSize: 36 }} /> : <PlayArrowRoundedIcon sx={{ fontSize: 36, ml: 0.5 }} />}
            </PlayButtonPrimary>
            <IconButton onClick={skipForward} sx={{ color: '#94a3b8', '&:hover': { color: '#0f172a' } }}><SkipNextRoundedIcon fontSize="large" /></IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b', minWidth: 35 }}>{formatTime(currentTime)}</Typography>
            <Box onClick={handleSeek} sx={{ flex: 1, height: 6, backgroundColor: '#f1f5f9', mx: 2, borderRadius: 3, cursor: 'pointer', overflow: 'hidden', position: 'relative' }}>
              <Box sx={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, height: '100%', backgroundColor: '#0ea5e9', borderRadius: 3, position: 'relative', transition: 'width 0.1s linear' }}>
                <Box sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 10, height: 10, backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }} />
              </Box>
            </Box>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b', minWidth: 35 }}>{formatTime(duration)}</Typography>
          </Box>
        </Box>

        {/* Video Player Toggle */}
        <Box sx={{ backgroundColor: '#0f172a', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
          <Box sx={{ width: '100%', aspectRatio: '16/9', backgroundImage: `url(${latestEpisode.image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2))' }} />
            
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, width: '100%', textAlign: 'center' }}>
              <IconButton onClick={togglePlayVideo} sx={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#fff', width: 64, height: 64, '&:hover': { backgroundColor: '#ff0000', transform: 'scale(1.1)' }, transition: 'all 0.3s' }}>
                  <PlayArrowRoundedIcon sx={{ fontSize: 32, ml: 0.5 }} />
              </IconButton>
              <Box>
                <Chip 
                  icon={<OndemandVideoIcon sx={{ fontSize: '14px !important', color: '#fff !important' }} />} 
                  label="Watch Video Version" 
                  size="small" 
                  onClick={togglePlayVideo}
                  sx={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', mb: 1, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' } }} 
                />
                <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>Prefer to watch?</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Hidden Audio Player */}
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlayingAudio(false)}
      />

      <VideoPlayerModal
        open={isPlayingVideo}
        videoUrl="https://www.youtube.com/watch?v=-c8T3O2a1BM"
        onClose={() => setIsPlayingVideo(false)}
      />
    </>
  );
};

export default FeaturedPlayerSection;
