import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideoPlayerModal from "../../../components/resources/videoPlayerModal/VideoPlayerModal";
import {
  PlayerWrapper,
  ImageWrapper,
  BadgeContainer,
  FeaturedChip,
  ControlCard,
  MediaControls,
  SkipButton,
  PlayButtonPrimary,
  ProgressWrapper,
  TimeText,
  ProgressBar,
  ProgressFill,
  ProgressHandle,
  VideoPlayerWrapper,
  VideoAspectBox,
  VideoOverlay,
  VideoPlayContent,
  VideoPlayButton,
  WatchVideoChip,
  WatchVideoTitle
} from "./FeaturedPlayerSection.style";

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
      <PlayerWrapper>
        <ImageWrapper>
          <img src={latestEpisode.image} alt={latestEpisode.title} style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }} />
          <BadgeContainer>
            <FeaturedChip label="NEW" color="error" />
          </BadgeContainer>
        </ImageWrapper>

        {/* Audio Player */}
        <ControlCard>
          <MediaControls>
            <SkipButton onClick={skipBackward}><SkipPreviousRoundedIcon fontSize="large" /></SkipButton>
            <PlayButtonPrimary onClick={togglePlayAudio} style={{ marginLeft: '24px', marginRight: '24px' }}>
              {isPlayingAudio ? <PauseRoundedIcon style={{ fontSize: 36 }} /> : <PlayArrowRoundedIcon style={{ fontSize: 36, marginLeft: '4px' }} />}
            </PlayButtonPrimary>
            <SkipButton onClick={skipForward}><SkipNextRoundedIcon fontSize="large" /></SkipButton>
          </MediaControls>
          <ProgressWrapper>
            <TimeText variant="caption">{formatTime(currentTime)}</TimeText>
            <ProgressBar onClick={handleSeek}>
              <ProgressFill $width={duration > 0 ? (currentTime / duration) * 100 : 0}>
                <ProgressHandle />
              </ProgressFill>
            </ProgressBar>
            <TimeText variant="caption">{formatTime(duration)}</TimeText>
          </ProgressWrapper>
        </ControlCard>

        {/* Video Player Toggle */}
        <VideoPlayerWrapper>
          <VideoAspectBox $bg={latestEpisode.image}>
            <VideoOverlay />
            
            <VideoPlayContent>
              <VideoPlayButton onClick={togglePlayVideo}>
                  <PlayArrowRoundedIcon style={{ fontSize: 32, marginLeft: '4px' }} />
              </VideoPlayButton>
              <Box>
                <WatchVideoChip 
                  icon={<OndemandVideoIcon style={{ fontSize: '14px', color: '#fff' }} />} 
                  label="Watch Video Version" 
                  size="small" 
                  onClick={togglePlayVideo}
                />
                <WatchVideoTitle variant="subtitle1">Prefer to watch?</WatchVideoTitle>
              </Box>
            </VideoPlayContent>
          </VideoAspectBox>
        </VideoPlayerWrapper>
      </PlayerWrapper>

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
