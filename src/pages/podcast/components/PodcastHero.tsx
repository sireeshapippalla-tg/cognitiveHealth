import HeadsetIcon from '@mui/icons-material/Headset';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import {
  HeroBox,
  HeroContainer,
  HeroTextContainer,
  HeroChip,
  HeroTitle,
  HeroSubtitle,
  PlatformRow,
  PlatformWrapper,
  PlatformText
} from "../PodcastPage.style";

const PodcastHero = () => {
  return (
    <HeroBox>
      <HeroContainer maxWidth="lg">
        <HeroTextContainer>
          <HeroChip 
            icon={<HeadsetIcon style={{ fontSize: 16 }} />} 
            label="Official Podcast" 
          />
          <HeroTitle variant="h1">
            CognitiveHealth Insights
          </HeroTitle>
          <HeroSubtitle variant="h6">
            Listen to our experts discuss the latest trends, innovations, and strategies in healthcare revenue cycle management and AI technology.
          </HeroSubtitle>
          <PlatformRow>
            <PlatformWrapper>
              <GraphicEqIcon />
              <PlatformText variant="body2">
                Available on all major platforms
              </PlatformText>
            </PlatformWrapper>
          </PlatformRow>
        </HeroTextContainer>
      </HeroContainer>
    </HeroBox>
  );
};

export default PodcastHero;
