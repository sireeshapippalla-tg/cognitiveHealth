import { useState } from "react";
import ResourceHero from "../../components/resources/resourceHero/ResourceHero";
import ResourceTabs from "../../components/resources/resourceTabs/ResourceTabs";
import CTASection from "../../components/home/CTA/CTASection";
import { ResourcePageWrapper } from "./ResourcesPage.style";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const baseUrl = getBaseUrl();
  const resourceSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CognitiveHealth Resources",
    description: "Explore our collection of resources, case studies, and insights on Agentic AI in Healthcare RCM.",
    url: `${baseUrl}/resources`,
  };

  return (
    <ResourcePageWrapper>
      <SEO
        title="Resources | Agentic AI & Healthcare RCM Insights"
        description="Explore our collection of resources, case studies, and insights on Agentic AI in Healthcare RCM."
        keywords="Healthcare RCM Resources, Agentic AI Insights, CognitiveHealth Case Studies"
        schema={resourceSchema}
      />
      <ResourceHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ResourceTabs searchQuery={searchQuery} />
      <CTASection />
    </ResourcePageWrapper>
  );
};

export default ResourcesPage;
