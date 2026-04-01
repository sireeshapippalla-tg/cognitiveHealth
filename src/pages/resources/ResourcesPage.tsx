import ResourceHero from "../../components/resources/resourceHero/ResourceHero";
import ResourceTabs from "../../components/resources/resourceTabs/ResourceTabs";
import CTASection from "../../components/home/CTA/CTASection";
import { ResourcePageWrapper } from "./ResourcesPage.styles";

const ResourcesPage = () => {
  return (
    <ResourcePageWrapper>
      <ResourceHero />
      <ResourceTabs />
      <CTASection />
    </ResourcePageWrapper>
  );
};

export default ResourcesPage;
