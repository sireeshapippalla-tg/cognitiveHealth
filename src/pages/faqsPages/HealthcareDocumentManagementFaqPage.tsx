import { Typography } from '@mui/material';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const HealthcareDocumentManagementFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Healthcare Document Management With Generative AI",
    "description": "Streamline your healthcare document management with our advanced AI solutions. Discover how our tools can enhance efficiency, reduce errors, and improve financial performance. Schedule a free demo today.",
    "url": `${baseUrl}/healthcare-document-management-with-generative-ai`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="Healthcare Document Management With Generative AI | CognitiveHealth"
      seoDescription="Streamline your healthcare document management with our advanced AI solutions. Discover how our tools can enhance efficiency, reduce errors, and improve financial performance. Schedule a free demo today."
      seoKeywords="Healthcare, Document, Management, With, Generative, AI, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Healthcare Correspondence Document Management with CognitiveHealth's iCAN™ Platform"
      heroSubtitle="In today's healthcare landscape, effective document management is paramount for ensuring operational efficiency and maintaining compliance with regulatory standards. CognitiveHealth's iCAN™ platform offers a robust solution, integrating advanced AI technologies to streamline and enhance correspondence management processes in healthcare RCM. This service page explores the key features, benefits, and transformative impact of our AI-driven document management system for the healthcare industry, with a particular focus on healthcare correspondence management and automation."
      heroButtonUrl="/request-a-demo"
      section2Content={
        <>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            The future
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Introducing iCAN™ - Network of AI Agents for Healthcare Revenue Cycle Management
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth, pioneers of healthcare process automation, AI powers iCAN™ and is purpose-built for the Healthcare Revenue Cycle.
          </Typography>
        </>
      }
    />
  );
};

export default HealthcareDocumentManagementFaqPage;
