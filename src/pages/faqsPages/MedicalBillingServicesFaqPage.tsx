import { Typography } from '@mui/material';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const MedicalBillingServicesFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI-Driven Medical Billing Services For Enhanced Revenue Cycle Management",
    "description": "Enhance your revenue cycle with our comprehensive AI-Driven medical billing solutions. From automation to dedicated support, we offer solutions tailored to your needs. Schedule a free demo to see how we can optimize your medical billing processes.",
    "url": `${baseUrl}/ai-driven-medical-billing-services-for-enhanced-revenue-cycle-management`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="AI-Driven Medical Billing Services For Enhanced Revenue Cycle Management | CognitiveHealth"
      seoDescription="Enhance your revenue cycle with our comprehensive AI-Driven medical billing solutions. From automation to dedicated support, we offer solutions tailored to your needs. Schedule a free demo to see how we can optimize your medical billing processes."
      seoKeywords="AI-Driven, Medical, Billing, Services, For, Enhanced, Revenue, Cycle, Management, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="AI-Driven Medical Billing Services for Enhanced Revenue Cycle Management"
      heroSubtitle="Are you seeking to optimize your medical billing processes and improve your revenue cycle management? CognitiveHealth™ offers cutting-edge medical billing services designed to enhance efficiency, reduce errors, and streamline workflows. Our AI-driven solutions provide tailored support for healthcare organizations of all sizes."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="subtitle2" sx={{ mb: 1, mt: 4, fontSize: { xs: '0.85rem', md: '0.95rem' }, textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600, color: 'primary.main', display: 'block' }}>
            The future
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 2, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
            Why Choose CognitiveHealth™ AI Solutions for your Medical Billing?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            At CognitiveHealth™, we understand the complexities and challenges faced by healthcare providers in managing revenue cycles. Our iCAN™ platform leverages advanced AI tools to automate and optimize various medical billing processes, delivering substantial benefits:
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

export default MedicalBillingServicesFaqPage;
