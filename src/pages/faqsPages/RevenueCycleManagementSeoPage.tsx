import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SEO from '../../components/SEO';
import CTASection from '../../components/home/CTA/CTASection';
import { motion } from 'framer-motion';
import { getBaseUrl } from '../../utils/urlHelper';

// Custom content images
import Frame_4_e1723042324127 from '../../assets/seo/Frame-4-e1723042324127.webp';
import ican_automation_1 from '../../assets/seo/ican-automation-1.webp';
import Vector_3 from '../../assets/seo/Vector-3.webp';
import Vector_4 from '../../assets/seo/Vector-4.webp';
import Group_2 from '../../assets/seo/Group-2.webp';
import Vector_5 from '../../assets/seo/Vector-5.webp';
import Frame_3 from '../../assets/seo/Frame-3.webp';
import Frame_4_1 from '../../assets/seo/Frame-4-1.webp';
import ican_insight_1 from '../../assets/seo/ican-insight-1.webp';
import Vector_6 from '../../assets/seo/Vector-6.webp';
import Group_3 from '../../assets/seo/Group-3.webp';
import Group_4 from '../../assets/seo/Group-4.webp';
import ican_predict_1 from '../../assets/seo/ican-predict-1.webp';
import Group_12 from '../../assets/seo/Group-12.webp';
import Vector_7 from '../../assets/seo/Vector-7.webp';
import Group_13 from '../../assets/seo/Group-13.webp';
import ican_predict_1_1 from '../../assets/seo/ican-predict-1-1.webp';
import Group_5 from '../../assets/seo/Group-5.webp';
import Vector_8 from '../../assets/seo/Vector-8.webp';
import Vector_9 from '../../assets/seo/Vector-9.webp';
import Group_38_1 from '../../assets/seo/Group-38-1.webp';
import Group_38 from '../../assets/seo/Group-38.webp';
import Vector_10 from '../../assets/seo/Vector-10.webp';
import Vector_12 from '../../assets/seo/Vector-12.webp';
import Vector_11 from '../../assets/seo/Vector-11.webp';
import Vector_13 from '../../assets/seo/Vector-13.webp';
import Vector_14 from '../../assets/seo/Vector-14.webp';
import Vector_15 from '../../assets/seo/Vector-15.webp';
import Frame_6 from '../../assets/seo/Frame-6.webp';
import Group_60 from '../../assets/seo/Group-60.webp';
import Frame_5 from '../../assets/seo/Frame-5.webp';
import Logo_Neuron from '../../assets/seo/Logo-Neuron.webp';
import image_7_3 from '../../assets/seo/image-7-3.webp';
import Group_46 from '../../assets/seo/Group-46.webp';
import Vector_16 from '../../assets/seo/Vector-16.webp';
import Vector_17 from '../../assets/seo/Vector-17.webp';

const RevenueCycleManagementSeoPage = () => {
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
    <>
      <SEO
        title="Revenue Cycle Management With AI-Powered Solutions | CognitiveHealth"
        description="Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today."
        keywords="Revenue, Cycle, Management, With, AI-Powered, Solutions, Healthcare RCM, Medical Billing, iCAN Platform"
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
                Revenue Cycle Management with AI-Powered Solutions
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '800px', opacity: 0.9, mt: 3, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today.
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
                    Revenue Cycle Management with AI-Powered Solutions
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can streamline operations, enhance efficiency, and significantly improve financial performance.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    The future
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    AI-Powered Revenue Cycle Management
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Introducing iCAN™ – Network of AI Agents for Healthcare Revenue Cycle Management
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    1. iCAN Automate™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Automate™ leverages advanced agent architecture and automated process mapping to record business processes in real-time, facilitating faster development and seamless deployment. The CognitiveHealth Automation Scale guides a business value model for better efficiency and ROI.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Automation Process Mapping
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Real-Time Recording
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Seamless Deployment
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Network of AI Agents
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    The traditional revenue cycle is riddled with manual processes, inefficiencies, and errors that can hinder financial performance. CognitiveHealth's iCAN™ platform addresses these challenges head-on by integrating intelligent process automation specifically tailored for healthcare. Our AI-powered solutions encompass everything from pre-encounter to patient discharge, ensuring a seamless and efficient revenue cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a Network of AI agents configured to run simple or complex workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth, pioneers of healthcare process automation, AI powers iCAN™ and is purpose-built for the Healthcare Revenue Cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Capture and document every step of your business processes.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time process recording ensures accurate data capture and analysis.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Purpose-built for healthcare, iCAN™ integrates with many EMRs and other business applications.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows.
                  </Typography>
                  <Box
                    component="img"
                    src={Frame_4_e1723042324127}
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
                    src={ican_automation_1}
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
                    src={ican_automation_1}
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
                    src={Vector_3}
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
                    src={Vector_4}
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
                    src={Group_2}
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
                    src={Vector_5}
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
                    1. iCAN Automate™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Automate™ leverages advanced agent architecture and automated process mapping to record business processes in real-time, facilitating faster development and seamless deployment. The CognitiveHealth Automation Scale guides a business value model for better efficiency and ROI.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_automation_1}
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
                    src={ican_automation_1}
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
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Automation Process Mapping
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Real-Time Recording
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Seamless Deployment
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Network of AI Agents
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Capture and document every step of your business processes.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time process recording ensures accurate data capture and analysis.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Purpose-built for healthcare, iCAN™ integrates with many EMRs and other business applications.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows.
                  </Typography>
                  <Box
                    component="img"
                    src={Vector_3}
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
                    src={Vector_4}
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
                    src={Group_2}
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
                    src={Vector_5}
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
                  <Box
                    component="img"
                    src={Frame_3}
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
                    2. iCAN Insight™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Insight™ utilizes Natural Language Processing (NLP) and Large Language Models (LLM) to process structured and unstructured data, enhancing automation. This module excels at managing large volumes of data, such as correspondence, by categorizing, indexing, and automating downstream workflows.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Data Processing
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Workflow Orchestration
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Data Standardization and Classification
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Efficiently processes both structured and unstructured data.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using AI Agents, iCAN™ automates the downstream workflow using the data and business process indicators.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using machine learning and NLP, iCAN™ standardizes, classifies documents and other assets extracts data from them.
                  </Typography>
                  <Box
                    component="img"
                    src={Frame_4_1}
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
                    src={ican_insight_1}
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
                    src={Vector_6}
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
                    src={Group_3}
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
                    src={Group_4}
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
                    2. iCAN Insight™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Insight™ utilizes Natural Language Processing (NLP) and Large Language Models (LLM) to process structured and unstructured data, enhancing automation. This module excels at managing large volumes of data, such as correspondence, by categorizing, indexing, and automating downstream workflows.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_insight_1}
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
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Data Processing
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Workflow Orchestration
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Data Standardization and Classification
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Efficiently processes both structured and unstructured data.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using AI Agents, iCAN™ automates the downstream workflow using the data and business process indicators.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using machine learning and NLP, iCAN™ standardizes, classifies documents and other assets extracts data from them.
                  </Typography>
                  <Box
                    component="img"
                    src={Vector_6}
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
                    src={Group_3}
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
                    src={Group_4}
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
                    3. iCAN Predict™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Predict™ uses GenAI, data analytics and machine learning to report, alert, and validate specific business process tasks. This automation covers complex tasks such as claims denial management, appeals, financial transaction management, and pre-service business processes.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Machine Learning and GenAI
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Predictive Analytics
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Intelligent Process Automation
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using historical data and the vast amount of available data, iCAN Predict™ uses Gen AI, machine learning, and LLM.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Leverage GenAI and the data to predict and mitigate potential issues in the revenue cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using agent technology combined with data, iCAN Predict™ efficiently automates even complex business processes.
                  </Typography>
                  <Box
                    component="img"
                    src={Frame_4_1}
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
                    src={ican_predict_1}
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
                    src={ican_predict_1}
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
                    src={Group_12}
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
                    src={Vector_7}
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
                    src={Group_13}
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
                    3. iCAN Predict™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Predict™ uses GenAI, data analytics and machine learning to report, alert, and validate specific business process tasks. This automation covers complex tasks such as claims denial management, appeals, financial transaction management, and pre-service business processes.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_predict_1}
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
                    src={ican_predict_1}
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
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Machine Learning and GenAI
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Predictive Analytics
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Intelligent Process Automation
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using historical data and the vast amount of available data, iCAN Predict™ uses Gen AI, machine learning, and LLM.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Leverage GenAI and the data to predict and mitigate potential issues in the revenue cycle.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using agent technology combined with data, iCAN Predict™ efficiently automates even complex business processes.
                  </Typography>
                  <Box
                    component="img"
                    src={Group_12}
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
                    src={Vector_7}
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
                    src={Group_13}
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
                    4. iCAN Manage™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Manage™ enables the scheduling, execution, and monitoring of tasks. This module promptly addresses alerts and escalations, allowing for efficient task management and reporting.
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Task Scheduling
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Monitoring and Alerts
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Reporting
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Automates the scheduling of critical tasks to ensure timely execution.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time monitoring with automatic alerts for exceptions.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Generate detailed reports to support decision-making and continuous improvement.
                  </Typography>
                  <Box
                    component="img"
                    src={Frame_4_1}
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
                    src={ican_predict_1_1}
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
                    src={Group_5}
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
                    src={Vector_8}
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
                    src={Vector_9}
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
                    4. iCAN Manage™
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN Manage™ enables the scheduling, execution, and monitoring of tasks. This module promptly addresses alerts and escalations, allowing for efficient task management and reporting.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_predict_1_1}
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
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Task Scheduling
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Monitoring and Alerts
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Reporting
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Automates the scheduling of critical tasks to ensure timely execution.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time monitoring with automatic alerts for exceptions.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Generate detailed reports to support decision-making and continuous improvement.
                  </Typography>
                  <Box
                    component="img"
                    src={Group_5}
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
                    src={Vector_8}
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
                    src={Vector_9}
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
                    Benefits & Features
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Real-World Applications & Benefits
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Automating Correspondence Management
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    With iCAN™ Correspondence, healthcare organizations can automate the management of thousands of correspondence pieces, saving significant manual effort and ensuring timely responses to denials and requests. By standardizing documents, executing customizable workflows, and leveraging advanced AI tools like OCR and NLP, iCAN™ transforms correspondence management into an efficient, automated process.
                  </Typography>
                  <Box
                    component="img"
                    src={Group_38_1}
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
                    src={Group_38}
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
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Manual Effort Savings
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Timely Responses
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Scalability
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Up to 80% reduction in manual effort.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Ensures prompt handling of denials, medical record requests, and patient letters.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Hyper-converged infrastructure to handle large volumes of correspondence.
                  </Typography>
                  <Box
                    component="img"
                    src={Vector_10}
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
                    src={Vector_12}
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
                    src={Vector_11}
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
                    Payment Posting and Reconciliation
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    iCAN™ Cash Management automates the tedious and error-prone manual reconciliation process, reducing data entry errors and improving efficiency. This module integrates seamlessly with existing workflows and supports a remote workforce, ensuring continuity even during challenging times.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Efficiency Improvement
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Remote Workforce Enablement
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Audit Trail
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Significant reduction in manual effort and data entry errors.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Supports remote work without disrupting workflows.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Provides a digital and cost-effective audit trail for each posting.
                  </Typography>
                  <Box
                    component="img"
                    src={Vector_13}
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
                    src={Vector_14}
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
                    src={Vector_15}
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
                    The future
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Revenue Cycle Management
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight={500} color="text.secondary" sx={{ mt: 3, mb: 2 }}>
                    The traditional revenue cycle is riddled with manual processes, inefficiencies, and errors that can hinder financial performance. CognitiveHealth's iCAN™ platform addresses these challenges head-on by integrating intelligent process automation specifically tailored for healthcare. Our AI-powered solutions encompass everything from pre-encounter to patient discharge, ensuring a seamless and efficient revenue cycle.
                  </Typography>
                </Box>

                <Box mb={6}>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Expertise and Experience
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Commitment to Privacy and Security
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Proven ROI
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's team comprises GenAI architects, healthcare security and privacy experts, and revenue cycle SMEs with extensive experience managing RCM processes for healthcare providers of all sizes. Our team has successfully implemented AI-driven solutions in partnership with recognized health systems, nursing homes, and specialty care providers.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's team comprises GenAI architects, healthcare security and privacy experts, and revenue cycle SMEs with extensive experience managing RCM processes for healthcare providers of all sizes. Our team has successfully implemented AI-driven solutions in partnership with recognized health systems, nursing homes, and specialty care providers.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Our AI-powered solutions deliver significant ROI by focusing on labor-intensive processes and minimizing human involvement to exceptional handling and oversight. By accelerating automation and eliminating redundancies, CognitiveHealth ensures rapid implementation and quick time-to-value.
                  </Typography>
                  <Box
                    component="img"
                    src={Frame_6}
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
                    src={Group_60}
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
                    src={Frame_5}
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
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's team has extensive experience managing Healthcare RCM processes for small, medium, and large healthcare providers and systems. The team includes AI & GenAI Architects & developers, Healthcare Security and Privacy experts, and Healthcare Revenue Cycle SME's.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    This experienced team of CognitiveHealth has partnered with recognized health systems to build iCAN™ – Network of AI Agents.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ platform is purpose-built for healthcare.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    We understand your concerns about privacy and security. At CognitiveHealth, our infrastructure meets the highest standards, and we actively follow the latest AI trust and risk guidelines to ensure your safety.
                  </Typography>
                  <Box
                    component="img"
                    src={Logo_Neuron}
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
                    We understand your concerns about privacy and security. At CognitiveHealth, our infrastructure meets the highest standards, and we actively follow the latest AI trust and risk guidelines to ensure your safety.
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Company
                  </Typography>
                  <Typography variant="h4" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    Contact
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    info@cognitivehealthhit.com
                  </Typography>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mt: 3, mb: 2 }}>
                    1345, Avenue of the Americas, New York, NY 1005
                  </Typography>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Home" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="iCAN™ Platform" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Solutions

	RCM WORKFLOWS
	Eligibility Verification and Denial Management
	Cash Posting
	Claims Processing
	Correspondence Management
	Medical Billing
	FOCUSED SOLUTIONS
	BackOffice
	Behavioral Health RCM
	Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="RCM WORKFLOWS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Eligibility Verification and Denial Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Cash Posting" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Claims Processing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Correspondence Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="FOCUSED SOLUTIONS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="BackOffice" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Behavioral Health RCM" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Resources" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="About Us" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Contact Us" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Request Demo" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Privacy Policy" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Terms Of Use" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                  </List>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="RCM WORKFLOWS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Eligibility Verification and Denial Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Cash Posting" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Claims Processing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Correspondence Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="FOCUSED SOLUTIONS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="BackOffice" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Behavioral Health RCM" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                  </List>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Home" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="iCAN™ Platform" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Solutions

	RCM WORKFLOWS
	Eligibility Verification and Denial Management
	Cash Posting
	Claims Processing
	Correspondence Management
	Medical Billing
	FOCUSED SOLUTIONS
	BackOffice
	Behavioral Health RCM
	Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="RCM WORKFLOWS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Eligibility Verification and Denial Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Cash Posting" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Claims Processing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Correspondence Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="FOCUSED SOLUTIONS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="BackOffice" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Behavioral Health RCM" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Resources" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="About Us" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Contact Us" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Request Demo" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Privacy Policy" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Terms Of Use" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                  </List>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="RCM WORKFLOWS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Eligibility Verification and Denial Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Cash Posting" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Claims Processing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Correspondence Management" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="FOCUSED SOLUTIONS" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="BackOffice" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Behavioral Health RCM" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Specialty Medical Billing" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                  </List>
                  <Box
                    component="img"
                    src={image_7_3}
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
                    src={Group_46}
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
                    src={Group_46}
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
                    src={Vector_16}
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
                    src={Vector_17}
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
                    Copyright @2021 CognitiveHealth Technologies LLC. All Rights Reserved Copyright
                  </Typography>
                  <List sx={{ mb: 3 }}>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Terms & Conditions" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Privacy Policy" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
                    </ListItem>
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

export default RevenueCycleManagementSeoPage;
