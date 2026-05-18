import { useState } from "react";
import ResourceHero from "../../components/resources/resourceHero/ResourceHero";
import ResourceTabs from "../../components/resources/resourceTabs/ResourceTabs";
import CTASection from "../../components/home/CTA/CTASection";
import { ResourcePageWrapper } from "./ResourcesPage.styles";

const ResourcesPage = () =>{
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ResourcePageWrapper>
      <ResourceHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ResourceTabs searchQuery={searchQuery} />
      <CTASection />
    </ResourcePageWrapper>
  );
};

export default ResourcesPage;
