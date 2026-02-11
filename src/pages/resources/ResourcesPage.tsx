import ResourceHero from "../../components/resources/resourceHero/ResourceHero";
import ResourceTabs from "../../components/resources/resourceTabs/ResourceTabs";
// import NewsletterSection from "../../components/resources/newsletter/NewsletterSection";
import { Box } from "@mui/material";
import CTASection from "../../components/home/CTA/CTASection";

const ResourcesPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <ResourceHero />
      <ResourceTabs />
      {/* <NewsletterSection /> */}
      <CTASection/>
    </Box>
  );
};

export default ResourcesPage;
