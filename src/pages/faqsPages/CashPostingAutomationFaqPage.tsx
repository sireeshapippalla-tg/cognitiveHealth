import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const CashPostingAutomationFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CognitiveHealth™ Generative AI For Healthcare RCM",
    "description": "Revolutionize the Healthcare Revenue Cycle with AI Agents. Implement automation in the areas of cash posting, medical billing, reconciliation and correspondence workflows and more. Schedule a demo today.",
    "url": `${baseUrl}/streamline-your-cash-posting-with-automation-solutions`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="CognitiveHealth™ Generative AI For Healthcare RCM | CognitiveHealth"
      seoDescription="Revolutionize the Healthcare Revenue Cycle with AI Agents. Implement automation in the areas of cash posting, medical billing, reconciliation and correspondence workflows and more. Schedule a demo today."
      seoKeywords="CognitiveHealth™, Generative, AI, For, Healthcare, RCM, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Revolutionize the Healthcare Revenue Cycle with AI Agents"
      heroSubtitle="In the 15 months of collaboration with the CognitiveHealth team we have successfully implemented automation in the areas of cash posting, reconciliation and correspondence workflows, with several additional use cases in the works. We're pleased with the early results and continuing to expand our partnership with CognitiveHealth. – Sharlene Seidman, Vice President of Patient Financial Services at Yale-New Haven Health System."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Introducing iCAN™
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth, pioneers of healthcare process automation, iCAN™ is powered by AI and is purpose-built for the Healthcare Revenue Cycle.
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Efficiently automate complex business processes: Whether it is an end-to-end revenue cycle process or workflows like Prior Authorization, Cash Posting, Reconciliation, Correspondence, Denial Management, or Claim Edits, achieve efficiency using iCAN™."
                primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Easily customizable: iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows. They can be configured to your custom business process with ease and in a very short time."
                primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Purpose-built for healthcare: iCAN™ uses industry standards to achieve HIPAA Security while adhering to the new standards that are in development. AI Agents are built to handle EDI (835, 837, 271, 277, 278 and many other transactions and data using healthcare data transaction standards, including API, HL7, and FHIR."
                primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="AI as a Service: We will design, configure, and deploy the AI Agents that will work alongside your team. This will ensure seamless deployment and help you quickly achieve a higher ROI."
                primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }}
              />
            </ListItem>
          </List>
        </>
      }
    />
  );
};

export default CashPostingAutomationFaqPage;
