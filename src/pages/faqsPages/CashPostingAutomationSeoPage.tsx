import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SEO from '../../components/SEO';
import CTASection from '../../components/home/CTA/CTASection';
import { motion } from 'framer-motion';
import { getBaseUrl } from '../../utils/urlHelper';

// Custom content images
import ican_circle_new_on3hu9za2rtqlxe6rn2xddgcm9dbdfhs4vobrdw782 from '../../assets/seo/ican_circle_new-on3hu9za2rtqlxe6rn2xddgcm9dbdfhs4vobrdw782.webp';
import design from '../../assets/seo/design.webp';
import services01 from '../../assets/seo/services01.webp';
import services03 from '../../assets/seo/services03.webp';
import services04 from '../../assets/seo/services04.webp';

const CashPostingAutomationSeoPage = () => {
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
    <>
      <SEO
        title="CognitiveHealth™ Generative AI For Healthcare RCM | CognitiveHealth"
        description="Revolutionize the Healthcare Revenue Cycle with AI Agents. Implement automation in the areas of cash posting, medical billing, reconciliation and correspondence workflows and more. Schedule a demo today."
        keywords="CognitiveHealth™, Generative, AI, For, Healthcare, RCM, Healthcare RCM, Medical Billing, iCAN Platform"
        schema={schema}
      />

      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, var(--color-primary-dark, #0b1f38) 0%, #173b6c 100%)',
            color: 'white',
            py: { xs: 8, md: 12 },
            mt: '80px',
            mb: { xs: 4, md: 8 }
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2.3rem', md: '3.3rem' }, lineHeight: 1.2 }}>
                Revolutionize the Healthcare Revenue Cycle with AI Agents
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '800px', opacity: 0.9, mt: 3, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                Revolutionize the Healthcare Revenue Cycle with AI Agents. Implement automation in the areas of cash posting, medical billing, reconciliation and correspondence workflows and more. Schedule a demo today.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ flexGrow: 1, mb: 8 }}>
          <Grid container spacing={6}>
            {/* Main Content */}
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Revolutionize the Healthcare Revenue Cycle with AI Agents
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    What our customers say
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Revolutionize the Healthcare Revenue Cycle with AI Agents
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    What our customers say
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Revolutionize the Healthcare Revenue Cycle with AI Agents
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    What our customers say
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    “In the 15 months of collaboration with the CognitiveHealth team we have successfully implemented automation in the areas of cash posting, reconciliation and correspondence workflows, with several additional use cases in the works.  We're pleased with the early results and continuing to expand our partnership with CognitiveHealth”
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    – Sharlene Seidman, Vice President of Patient Financial Services at Yale-New Haven Health System.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    “In automating the end of the day reconciliation process we are able to reduce data entry errors and improve efficiency. We have built an automated process for MyChart payments since inception, avoiding any significant manual effort from the team. The timing of this process implementation has been very important for our current situation.  The portal has allowed us to transition to a work from home process with no disruption to our workflow during the Covid 19 situation.”
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    – Senior Manager, Corporate Business Services, 2500+ bed health system.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    “By automating the creation of hundreds of individual test patient records to fit each test script in the EMR/EPIC test environment, the testing team saves up to 10 minutes for each test patient created. This automation enables the team to spend more time in the utilization assessment of the workflow of each test script, making the testing process more efficient and effective downstream.”
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    – Chas Cota, ITS Manager, Yale New Haven Health.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Introducing iCAN™
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    Efficiently automate complex business processes
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    Easily customizable
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    Purpose-built for healthcare
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    AI as a Service
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Built by CognitiveHealth, pioneers of healthcare process automation, iCAN™ is powered by AI and is purpose-built for the Healthcare Revenue Cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Whether it is an end-to-end revenue cycle process or workflows like Prior Authorization, Cash Posting, Reconciliation, Correspondence, Denial Management, or Claim Edits, achieve efficiency using iCAN™.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows. They can be configured to your custom business process with ease and in a very short time.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ uses industry standards to achieve HIPAA Security while adhering to the new standards that are in development. AI Agents are built to handle EDI (835, 837, 271, 277, 278 and many other transactions and data using healthcare data transaction standards, including API, HL7, and FHIR.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    We will design, configure, and deploy the AI Agents that will work alongside your team. This will ensure seamless deployment and help you quickly achieve a higher ROI.
                  </Typography>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Efficiently automate complex business processes
				Whether it is an end-to-end revenue cycle process or workflows like Prior Authorization, Cash Posting, Reconciliation, Correspondence, Denial Management, or Claim Edits, achieve efficiency using iCAN™." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Easily customizable
				iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows. They can be configured to your custom business process with ease and in a very short time." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Purpose-built for healthcare
				iCAN™ uses industry standards to achieve HIPAA Security while adhering to the new standards that are in development. AI Agents are built to handle EDI (835, 837, 271, 277, 278 and many other transactions and data using healthcare data transaction standards, including API, HL7, and FHIR." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="AI as a Service 
				We will design, configure, and deploy the AI Agents that will work alongside your team. This will ensure seamless deployment and help you quickly achieve a higher ROI." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                  </List>
                  <Box
                    component="img"
                    src={ican_circle_new_on3hu9za2rtqlxe6rn2xddgcm9dbdfhs4vobrdw782}
                    alt=""
                    sx={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      my: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      p: 2,
                      bgcolor: 'white'
                    }}
                  />
                </Box>

                <Box mb={6}>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    How iCAN™ Works:
iCAN™ is a Network of AI agents configured to run complex business processes in the Healthcare Revenue Cycle.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Configure and deploy iCAN™ - Network of AI Agents
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Connect to different EMRs and other applications seamlessly.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Reporting
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Trustworthy AI Agents
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Our Team has an extensive experience in Healthcare RCM. They will configure the iCAN™ - Network of AI Agents for you and deploy them.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ connects to any EMR using the preferred interface method you choose, such as HL7, API, FHIR, or even user interface, reducing the deployment time.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Streamlined exception management, robust analytics, and clear transparency through detailed reporting.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Purpose-built for Healthcare, iCAN™ follows the AI security and privacy guidelines as suggested by standards organizations like NIST.
                  </Typography>
                  <Box
                    component="img"
                    src={design}
                    alt=""
                    sx={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      my: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      p: 2,
                      bgcolor: 'white'
                    }}
                  />
                  <Box
                    component="img"
                    src={services01}
                    alt=""
                    sx={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      my: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      p: 2,
                      bgcolor: 'white'
                    }}
                  />
                  <Box
                    component="img"
                    src={services03}
                    alt=""
                    sx={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      my: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      p: 2,
                      bgcolor: 'white'
                    }}
                  />
                  <Box
                    component="img"
                    src={services04}
                    alt=""
                    sx={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      my: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      p: 2,
                      bgcolor: 'white'
                    }}
                  />
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Our Latest Case Studies
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    80% Effort savings for a health system
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    Long-term Care RCM Automation
                  </Typography>
                  <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ mt: 3, mb: 2 }}>
                    Eligibility Verification
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Learn how iCAN saved 80% of the manual effort in one RCM processes for a health system
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Discover how iCAN automated complex revenue cycle processes that used multiple applications
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Discover how iCAN reduced cost and denials by automating verification process for nursing homes.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Why CognitiveHealth?
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's, team has collective experience managing Healthcare RCM processes for small, medium, and large healthcare providers and systems.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    The team includes GenAI Architects, Healthcare Security and Privacy experts, and Healthcare Revenue Cycle SME's.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    This experienced team of  CognitiveHealth has partnered with recognized health systems to build iCAN™ -  Network of AI Agents.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Frequently Asked Questions
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    In the ever-evolving landscape of healthcare, efficient revenue cycle management (RCM) is paramount for maintaining financial health and ensuring the sustainability of healthcare organizations. Cognitive Health's iCAN™ platform leverages advanced Al technology to revolutionize eligibility verification and denial management processes, addressing some of the most persistent challenges in medical billing. This service page explores the transformative impact of automation in these critical areas, providing insights into how CognitiveHealth's solutions enhance operational efficiency and financial performance.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Effective revenue cycle management (RCM) is paramount to ensuring the financial health and sustainability of organizations. CognitiveHealth stands at the forefront of this field, offering advanced AI-driven solutions tailored specifically for the unique challenges of behavioral health revenue cycle management. Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes, ultimately leading to improved financial performance.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Cash posting, a critical component of the RCM process, ensures accurate and timely recording of payments received from patients and insurance companies. However, manual cash posting can be time-consuming and prone to errors, leading to delays in revenue recognition and increased administrative costs. CognitiveHealth's iCAN™ platform offers a revolutionary solution with its AI-driven cash posting automation. This service page explores how CognitiveHealth's iCAN™ platform transforms cash posting and overall revenue cycle management for healthcare providers.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    At CognitiveHealth, we specialize in providing advanced solutions designed to optimize your healthcare back office. Our services leverage cutting-edge technologies, including artificial intelligence (AI) and data analytics, to streamline processes, reduce errors, and enhance productivity.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Efficient claims processing is critical to maintaining financial stability and operational efficiency. CognitiveHealth leverages advanced AI technology to revolutionize healthcare claims processing, offering automated, streamlined, and accurate solutions that enhance overall performance. This service page delves into the transformative capabilities of CognitiveHealth's iCAN™ platform, showcasing how automated claims processing can redefine healthcare claims management.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's iCAN™ platform offers a robust solution, integrating advanced AI technologies to streamline and enhance correspondence management processes in healthcare RCM. This service page explores the key features, benefits, and transformative impact of our AI-driven document management system for the healthcare industry, with a particular focus on healthcare correspondence management and automation.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can streamline operations, enhance efficiency, and significantly improve financial performance.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Are you seeking to optimize your medical billing processes and improve your revenue cycle management? CognitiveHealth™ offers cutting-edge medical billing services designed to enhance efficiency, reduce errors, and streamline workflows. Our AI-driven solutions provide tailored support for healthcare organizations of all sizes.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. Our innovative RCM billing services streamline processes, reduce errors, and enhance overall financial performance.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    In the specialized fields of healthcare, efficient revenue cycle management (RCM) is crucial to maintaining financial health and sustainability. CognitiveHealth offers tailored specialty medical billing services designed to address the unique challenges faced by specialty practices. Our advanced AI-driven solutions streamline processes, reduce errors, and enhance overall financial performance, making us a leader in specialty revenue cycle management.
                  </Typography>
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
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'var(--color-bg-white, #ffffff)', 
                    border: '1px solid var(--color-border, #e5e7eb)', 
                    borderRadius: 3, 
                    position: 'sticky', 
                    top: '100px',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.02)'
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)">
                    Proven ROI
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1rem', lineHeight: 1.6, mb: 3 }}>
                    Our AI-powered solutions deliver significant ROI by focusing on labor-intensive processes and minimizing human involvement to exceptional handling and oversight. By accelerating automation and eliminating redundancies, CognitiveHealth ensures rapid implementation and quick time-to-value.
                  </Typography>

                  <Box sx={{ bgcolor: 'var(--color-bg-lite, #f9fafb)', p: 3, borderRadius: 2, mb: 3, border: '1px solid var(--color-border, #e5e7eb)' }}>
                    <Typography variant="h6" gutterBottom fontWeight={600} color="var(--color-primary, #0066cc)" sx={{ fontSize: '1.1rem' }}>
                      Key Results
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="• Up to 80% reduction in manual effort" primaryTypographyProps={{ fontSize: '0.95rem', color: 'text.secondary' }} /></ListItem>
                      <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="• Timely responses to denials" primaryTypographyProps={{ fontSize: '0.95rem', color: 'text.secondary' }} /></ListItem>
                      <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="• Real-time monitoring & alerts" primaryTypographyProps={{ fontSize: '0.95rem', color: 'text.secondary' }} /></ListItem>
                      <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="• Digital and cost-effective audit trail" primaryTypographyProps={{ fontSize: '0.95rem', color: 'text.secondary' }} /></ListItem>
                    </List>
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                    We understand your concerns about privacy and security. At CognitiveHealth, our infrastructure meets the highest standards, ensuring your data is always safe and compliant.
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

export default CashPostingAutomationSeoPage;
