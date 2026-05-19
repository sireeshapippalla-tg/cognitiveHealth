import { Box, Typography, Grid, Container, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SEO from '../../components/SEO';
import CTASection from '../../components/home/CTA/CTASection';
import { motion } from 'framer-motion';
import { getBaseUrl } from '../../utils/urlHelper';

const SpecialtyMedicalBillingSeoPage = () => {
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
    <>
      <SEO
        title="Specialty Medical Billing With Generative AI RCM | CognitiveHealth"
        description="Enhance your specialty medical billing and revenue cycle management with our expert solutions. Discover how our advanced automation and analytics tools can streamline operations and improve financial performance."
        keywords="Specialty, Medical, Billing, With, Generative, AI, RCM, Healthcare RCM, Medical Billing, iCAN Platform"
        schema={schema}
      />

      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'var(--color-primary-dark, #0b1f38)',
            color: 'white',
            py: { xs: 8, md: 12 },
            mt: '80px', // to account for fixed header
            mb: { xs: 4, md: 8 }
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Specialty Medical Billing With Generative AI RCM
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '800px', opacity: 0.9, mt: 3, lineHeight: 1.6 }}>
                Enhance your specialty medical billing and revenue cycle management with our expert solutions. Discover how our advanced automation and analytics tools can streamline operations and improve financial performance.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ flexGrow: 1, mb: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)">
                    Overview
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    In the specialized fields of healthcare, efficient revenue cycle management (RCM) is crucial to maintaining financial health and sustainability. CognitiveHealth offers tailored specialty medical billing services designed to address the unique challenges faced by specialty practices. Our advanced AI-driven solutions streamline processes, reduce errors, and enhance overall financial performance, making us a leader in specialty revenue cycle management.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)">
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
                </Box>
              </motion.div>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'var(--color-bg-white, #ffffff)', border: '1px solid var(--color-border, #e5e7eb)', borderRadius: 2, position: 'sticky', top: '100px' }}>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)">
                    Proven ROI
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.6, mb: 3 }}>
                    Our AI-powered solutions deliver significant ROI by focusing on labor-intensive processes and minimizing human involvement to exceptional handling and oversight. By accelerating automation and eliminating redundancies, CognitiveHealth ensures rapid implementation and quick time-to-value.
                  </Typography>

                  <Box sx={{ bgcolor: 'var(--color-bg-lite, #f9fafb)', p: 3, borderRadius: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)">
                      Key Results
                    </Typography>
                    <List dense>
                      <ListItem sx={{ px: 0 }}><ListItemText primary="• Up to 80% reduction in manual effort" /></ListItem>
                      <ListItem sx={{ px: 0 }}><ListItemText primary="• Timely responses to denials" /></ListItem>
                      <ListItem sx={{ px: 0 }}><ListItemText primary="• Real-time monitoring & alerts" /></ListItem>
                      <ListItem sx={{ px: 0 }}><ListItemText primary="• Digital and cost-effective audit trail" /></ListItem>
                    </List>
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    We understand your concerns about privacy and security. At CognitiveHealth, our infrastructure meets the highest standards.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <CTASection />
      </Box>
    </>
  );
};

export default SpecialtyMedicalBillingSeoPage;
