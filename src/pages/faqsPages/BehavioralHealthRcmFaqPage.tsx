import { Typography } from '@mui/material';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const BehavioralHealthRcmFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Behavioral Health RCM With Generative AI",
    "description": "Optimize your behavioral health revenue cycle management with our advanced solutions. Discover how our automation and analytics tools can streamline your operations and improve financial performance. Schedule a free consultation today.",
    "url": `${baseUrl}/behavioral-health-rcm-with-generative-ai`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="Behavioral Health RCM With Generative AI | CognitiveHealth"
      seoDescription="Optimize your behavioral health revenue cycle management with our advanced solutions. Discover how our automation and analytics tools can streamline your operations and improve financial performance. Schedule a free consultation today."
      seoKeywords="Behavioral, Health, RCM, With, Generative, AI, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Behavioral Health Revenue Cycle Management with CognitiveHealth"
      heroSubtitle="In the realm of behavioral health, effective revenue cycle management (RCM) is paramount to ensuring the financial health and sustainability of organizations. CognitiveHealth stands at the forefront of this field, offering advanced AI-driven solutions tailored specifically for the unique challenges of behavioral health revenue cycle management. Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes, ultimately leading to improved financial performance."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            The future
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Why Behavioral Health RCM is Unique
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Behavioral health RCM presents distinct challenges compared to general healthcare RCM. These include complex billing codes, varying insurance policies, and the necessity for meticulous documentation. CognitiveHealth's solutions are built to address these specific needs, providing behavioral health organizations with the tools required to navigate these complexities seamlessly.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
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

export default BehavioralHealthRcmFaqPage;
