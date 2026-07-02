import { Container } from "@mui/material";
import PodcastHero from "./components/PodcastHero";
import PreviousEpisodes from "./components/PreviousEpisodes";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";
import { PodcastPageWrapper } from "./PodcastPage.style";

const PodcastPage = () => {
  const baseUrl = getBaseUrl();
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "CognitiveHealth Podcast",
    description: "Listen to the latest insights on healthcare revenue cycle management and Agentic AI.",
    url: `${baseUrl}/podcast`,
  };

  return (
    <PodcastPageWrapper>
      <SEO
        title="Podcast | Agentic AI in RCM"
        description="Listen to the CognitiveHealth Podcast for the latest insights on healthcare revenue cycle management and Agentic AI."
        keywords="Healthcare Podcast, RCM Podcast, Agentic AI Podcast, CognitiveHealth"
        schema={podcastSchema}
      />
      <PodcastHero />
      <Container maxWidth="lg">
        <PreviousEpisodes />
      </Container>
    </PodcastPageWrapper>
  );
};

export default PodcastPage;
