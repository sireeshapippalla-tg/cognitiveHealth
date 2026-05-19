import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getBaseUrl } from '../../utils/urlHelper';
import { FaqPageLayout } from './EligibilityVerificationFaqPage';

const SpecialtyMedicalBillingFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Specialty Medical Billing With Generative AI RCM",
    "description": "Enhance your specialty medical billing and revenue cycle management with our expert solutions. Discover how our advanced automation and analytics tools can streamline operations and improve financial performance.",
    "url": `${baseUrl}/specialty-medical-billing-with-generative-ai-rcm`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="Specialty Medical Billing With Generative AI RCM | CognitiveHealth"
      seoDescription="Enhance your specialty medical billing and revenue cycle management with our expert solutions. Discover how our advanced automation and analytics tools can streamline operations and improve financial performance."
      seoKeywords="Specialty, Medical, Billing, With, Generative, AI, RCM, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Specialty Medical Billing With Generative AI RCM"
      heroSubtitle="Enhance your specialty medical billing and revenue cycle management with our expert solutions. Discover how our advanced automation and analytics tools can streamline operations and improve financial performance."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            In the specialized fields of healthcare, efficient revenue cycle management (RCM) is crucial to maintaining financial health and sustainability. CognitiveHealth offers tailored specialty medical billing services designed to address the unique challenges faced by specialty practices. Our advanced AI-driven solutions streamline processes, reduce errors, and enhance overall financial performance, making us a leader in specialty revenue cycle management.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
            Introducing iCAN™ – Network of AI Agents
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth, pioneers of healthcare process automation, AI powers iCAN™ and is purpose-built for the Healthcare Revenue Cycle.
          </Typography>
          <List sx={{ mt: 3 }}>
            {[
              { title: "Automation Process Mapping", desc: "Capture and document every step of your business processes." },
              { title: "Real-Time Recording", desc: "Real-time process recording ensures accurate data capture and analysis." },
              { title: "Seamless Deployment", desc: "Purpose-built for healthcare, iCAN™ integrates with many EMRs and other business applications." },
              { title: "Data Processing", desc: "Efficiently processes both structured and unstructured data." },
              { title: "Workflow Orchestration", desc: "Using AI Agents, iCAN™ automates the downstream workflow using the data and business process indicators." },
              { title: "Predictive Analytics", desc: "Leverage GenAI and data to predict and mitigate potential issues in the revenue cycle." }
            ].map((feature, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 1.5 }}>
                <ListItemIcon sx={{ mt: 0.5, minWidth: '40px' }}>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="subtitle1" fontWeight={600} color="var(--color-text-dark, #1f2937)">{feature.title}</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem', mt: 0.5 }}>{feature.desc}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </>
      }
    />
  );
};

export default SpecialtyMedicalBillingFaqPage;
