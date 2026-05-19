import { Typography } from '@mui/material';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const RevenueCycleManagementFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Revenue Cycle Management With AI-Powered Solutions",
    "description": "Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today.",
    "url": `${baseUrl}/revenue-cycle-management-with-ai-powered-solutions`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="Revenue Cycle Management With AI-Powered Solutions | CognitiveHealth"
      seoDescription="Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today."
      seoKeywords="Revenue, Cycle, Management, With, AI-Powered, Solutions, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Revenue Cycle Management with AI-Powered Solutions"
      heroSubtitle="CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can streamline operations, enhance efficiency, and significantly improve financial performance."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="subtitle2" sx={{ mb: 1, mt: 4, fontSize: { xs: '0.85rem', md: '0.95rem' }, textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600, color: 'primary.main', display: 'block' }}>
            The future
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 2, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
            AI-Powered Revenue Cycle Management
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            The traditional revenue cycle is riddled with manual processes, inefficiencies, and errors that can hinder financial performance. CognitiveHealth's iCAN™ platform addresses these challenges head-on by integrating intelligent process automation specifically tailored for healthcare. Our AI-powered solutions encompass everything from pre-encounter to patient discharge, ensuring a seamless and efficient revenue cycle.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
            Introducing iCAN™ – Network of AI Agents for Healthcare Revenue Cycle Management
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth, pioneers of healthcare process automation, AI powers iCAN™ and is purpose-built for the Healthcare Revenue Cycle.
          </Typography>
        </>
      }
    />
  );
};

export default RevenueCycleManagementFaqPage;
