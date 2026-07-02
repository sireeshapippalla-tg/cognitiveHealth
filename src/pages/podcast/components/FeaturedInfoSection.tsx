import { 
  Grid,
  Divider
} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  InfoWrapper,
  InfoHeader,
  ChipContainer,
  LatestChip,
  InfoEpisodeChip,
  DateChip,
  InfoTitle,
  InfoSectionHeading,
  InfoParagraph,
  TakeawaysList,
  CategoryRow,
  CategoryHeading,
  CategoryChip,
  AuthorSection,
  AuthorSubSection,
  AuthorTitleText,
  AuthorWrapper,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorTitle,
  SubscribeButton
} from "./FeaturedInfoSection.style";

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
    <InfoWrapper>
      <InfoHeader>
        <ChipContainer>
          <LatestChip label="LATEST" size="small" />
          <InfoEpisodeChip label={`EPISODE ${episodeNumber}`} size="small" />
          <DateChip label={latestEpisode.date} variant="outlined" size="small" />
          <DateChip label={latestEpisode.readTime} variant="outlined" size="small" />
        </ChipContainer>
      </InfoHeader>

      <InfoTitle variant="h3">
        {latestEpisode.title}
      </InfoTitle>

      <InfoSectionHeading variant="h6">Summary</InfoSectionHeading>
      <InfoParagraph variant="body1">
        {latestEpisode.description}
      </InfoParagraph>

      <InfoSectionHeading variant="h6">Notes & Key Takeaways</InfoSectionHeading>
      <TakeawaysList>
        <li>How generative AI minimizes manual entry errors in medical coding.</li>
        <li>Predictive modeling for reducing claim denial rates by up to 30%.</li>
        <li>Integrating AI solutions without disrupting existing EHR systems.</li>
        <li>Future-proofing healthcare financial operations.</li>
      </TakeawaysList>

      <CategoryRow>
        <CategoryHeading variant="subtitle2">Categories:</CategoryHeading>
        {latestEpisode.category && (
          <CategoryChip 
            label={latestEpisode.category} 
            variant="outlined" 
            size="small" 
          />
        )}
      </CategoryRow>

      <Divider style={{ marginBottom: '32px' }} />

      <Grid container spacing={4} style={{ marginBottom: '32px' }}>
        <Grid size={{xs:12, sm:6}}>
          <AuthorSection>
            <AuthorTitleText variant="subtitle2">Hosted By</AuthorTitleText>
            <AuthorWrapper>
              <AuthorAvatar src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" />
              <AuthorDetails>
                <AuthorName variant="subtitle1">Jane Doe</AuthorName>
                <AuthorTitle variant="caption">VP of Innovation</AuthorTitle>
              </AuthorDetails>
            </AuthorWrapper>
          </AuthorSection>
          <AuthorSubSection>
            <AuthorTitleText variant="subtitle2">Special Guest</AuthorTitleText>
            <AuthorWrapper>
              <AuthorAvatar src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" />
              <AuthorDetails>
                <AuthorName variant="subtitle1">John Smith</AuthorName>
                <AuthorTitle variant="caption">Chief Revenue Officer</AuthorTitle>
              </AuthorDetails>
            </AuthorWrapper>
          </AuthorSubSection>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <AuthorTitleText variant="subtitle2">Subscribe On:</AuthorTitleText>
          <CategoryRow>
            <SubscribeButton 
              component="a" 
              href="https://www.youtube.com/watch?v=-c8T3O2a1BM" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </SubscribeButton>
          </CategoryRow>
        </Grid>
      </Grid>
    </InfoWrapper>
  );
};

export default FeaturedInfoSection;
