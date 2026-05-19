import React from 'react';
import { Box, Typography, Container, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
import Frame_50 from '../../assets/seo/Frame-50.webp';

export interface ReusableFaqPageProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  schema: any;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonUrl: string;
  section2Content: React.ReactNode;
}

export const FaqPageLayout: React.FC<ReusableFaqPageProps> = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  schema,
  heroTitle,
  heroSubtitle,
  heroButtonUrl,
  section2Content
}) => {
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        schema={schema}
      />

      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: `url(${Frame_50}) !important`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            py: { xs: 8, md: 10 },
            mt: '80px'
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Typography variant="h2" component="h1" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2.3rem', md: '3.3rem' }, lineHeight: 1.2 }}>
                    {heroTitle}
                  </Typography>
                  <Typography variant="h5" sx={{ opacity: 0.9, mt: 3, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    {heroSubtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    <Button variant="contained" href={heroButtonUrl} sx={{ bgcolor: 'white', color: '#0b1f38', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', '&:hover': { bgcolor: '#f3f4f6' } }}>Get Started</Button>
                    <Button variant="outlined" href={heroButtonUrl} sx={{ borderColor: 'white', color: 'white', fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', '&:hover': { borderColor: '#e5e7eb', bgcolor: 'rgba(255,255,255,0.08)' } }}>Contact Sales</Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 2 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box
                    component="img"
                    src={Frame_4_e1723042324127}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                  {section2Content}
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 3: iCAN Automate™ */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={ican_automation_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    1. iCAN Automate™
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    iCAN Automate™ leverages advanced agent architecture and automated process mapping to record business processes in real-time, facilitating faster development and seamless deployment. The CognitiveHealth Automation Scale guides a business value model for better efficiency and ROI.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_automation_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 4 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 3 }}>
                  <Box
                    component="img"
                    src={Vector_3}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Automation Process Mapping
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Capture and document every step of your business processes.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <Box
                    component="img"
                    src={Vector_4}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Real-Time Recording
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time process recording ensures accurate data capture and analysis.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <Box
                    component="img"
                    src={Group_2}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Seamless Deployment
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Purpose-built for healthcare, iCAN™ integrates with many EMRs and other business applications.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <Box
                    component="img"
                    src={Vector_5}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Network of AI Agents
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    iCAN™ is a network of AI Agents. They come with an ever-expanding pre-built library of workflows.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 5: iCAN Insight™ */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    2. iCAN Insight™
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    iCAN Insight™ utilizes Natural Language Processing (NLP) and Large Language Models (LLM) to process structured and unstructured data, enhancing automation. This module excels at managing large volumes of data, such as correspondence, by categorizing, indexing, and automating downstream workflows.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={ican_insight_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 6 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_6}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Data Processing
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Efficiently processes both structured and unstructured data.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_3}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Workflow Orchestration
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using AI Agents, iCAN™ automates the downstream workflow using the data and business process indicators.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_4}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Data Standardization and Classification
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using machine learning and NLP, iCAN™ standardizes, classifies documents and other assets extracts data from them.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 7: iCAN Predict™ */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={ican_predict_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    3. iCAN Predict™
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    iCAN Predict™ uses GenAI, data analytics and machine learning to report, alert, and validate specific business process tasks. This automation covers complex tasks such as claims denial management, appeals, financial transaction management, and pre-service business processes.
                  </Typography>
                  <Box
                    component="img"
                    src={ican_predict_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 8 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_12}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Machine Learning and GenAI
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using historical data and the vast amount of available data, iCAN Predict™ uses Gen AI, machine learning, and LLM.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_7}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Predictive Analytics
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Leverage GenAI and the data to predict and mitigate potential issues in the revenue cycle.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_13}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Intelligent Process Automation
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Using agent technology combined with data, iCAN Predict™ efficiently automates even complex business processes.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 9: iCAN Manage™ */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    4. iCAN Manage™
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    iCAN Manage™ enables the scheduling, execution, and monitoring of tasks. This module promptly addresses alerts and escalations, allowing for efficient task management and reporting.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={ican_predict_1_1}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 10 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_5}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Task Scheduling
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Automates the scheduling of critical tasks to ensure timely execution.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_8}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Monitoring and Alerts
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Real-time monitoring with automatic alerts for exceptions.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_9}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Reporting
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Generate detailed reports to support decision-making and continuous improvement.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 11: Benefits & Features */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
                    {/* <Box
                      component="img"
                      src={Group_38_1}
                      alt=""
                      sx={{
                        width: 'auto',
                        maxHeight: '45px',
                        objectFit: 'contain',
                        borderRadius: 2,
                        p: 2,
                        bgcolor: 'white',
                        border: '1px solid var(--color-border, #e5e7eb)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                      }}
                    />
                    <Box
                      component="img"
                      src={Group_38}
                      alt=""
                      sx={{
                        width: 'auto',
                        maxHeight: '45px',
                        objectFit: 'contain',
                        borderRadius: 2,
                        p: 2,
                        bgcolor: 'white',
                        border: '1px solid var(--color-border, #e5e7eb)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                      }}
                    /> */}
                  </Box>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Benefits & Features
                  </Typography>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Real-World Applications & Benefits
                  </Typography>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Automating Correspondence Management
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    With iCAN™ Correspondence, healthcare organizations can automate the management of thousands of correspondence pieces, saving significant manual effort and ensuring timely responses to denials and requests. By standardizing documents, executing customizable workflows, and leveraging advanced AI tools like OCR and NLP, iCAN™ transforms correspondence management into an efficient, automated process.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 12 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_10}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Manual Effort Savings
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Up to 80% reduction in manual effort.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_12}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Timely Responses
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Ensures prompt handling of denials, medical record requests, and patient letters.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_11}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Scalability
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Hyper-converged infrastructure to handle large volumes of correspondence.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 13: Payment Posting and Reconciliation */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Payment Posting and Reconciliation
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    iCAN™ Cash Management automates the tedious and error-prone manual reconciliation process, reducing data entry errors and improving efficiency. This module integrates seamlessly with existing workflows and supports a remote workforce, ensuring continuity even during challenging times.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 14 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_13}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Efficiency Improvement
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Significant reduction in manual effort and data entry errors.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_14}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Remote Workforce Enablement
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Supports remote work without disrupting workflows.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Vector_15}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Audit Trail
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Provides a digital and cost-effective audit trail for each posting.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 15: Revenue Cycle Management */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 12 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    The future
                  </Typography>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Revenue Cycle Management
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                    The traditional revenue cycle is riddled with manual processes, inefficiencies, and errors that can hinder financial performance. CognitiveHealth's iCAN™ platform addresses these challenges head-on by integrating intelligent process automation specifically tailored for healthcare. Our AI-powered solutions encompass everything from pre-encounter to patient discharge, ensuring a seamless and efficient revenue cycle.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 16 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Frame_6}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Expertise and Experience
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's team comprises GenAI architects, healthcare security and privacy experts, and revenue cycle SMEs with extensive experience managing RCM processes for healthcare providers of all sizes. Our team has successfully implemented AI-driven solutions in partnership with recognized health systems, nursing homes, and specialty care providers.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button variant="text" href="/request-demo" color="primary" endIcon={<ArrowForwardIcon />} sx={{ fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>Learn more</Button>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Group_60}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 2,
                      bgcolor: 'white',
                      border: '1px solid var(--color-border, #e5e7eb)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Commitment to Privacy and Security
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    CognitiveHealth's team comprises GenAI architects, healthcare security and privacy experts, and revenue cycle SMEs with extensive experience managing RCM processes for healthcare providers of all sizes. Our team has successfully implemented AI-driven solutions in partnership with recognized health systems, nursing homes, and specialty care providers.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button variant="text" href="/request-demo" color="primary" endIcon={<ArrowForwardIcon />} sx={{ fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>Learn more</Button>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="img"
                    src={Frame_5}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                  <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
                    Proven ROI
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Our AI-powered solutions deliver significant ROI by focusing on labor-intensive processes and minimizing human involvement to exceptional handling and oversight. By accelerating automation and eliminating redundancies, CognitiveHealth ensures rapid implementation and quick time-to-value.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button variant="text" href="/request-demo" color="primary" endIcon={<ArrowForwardIcon />} sx={{ fontWeight: 600, textTransform: 'none', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>Learn more</Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section 17 */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'var(--color-bg-lite, #f9fafb)' }}>
          <Container maxWidth="lg" sx={{ bgcolor: 'var(--color-bg-white, #ffffff)', p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid var(--color-border, #e5e7eb)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                    Schedule a FREE Demo Today!
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    In the dynamic world of healthcare, automating critical processes such as eligibility verification and denial management is essential for maintaining financial health and operational efficiency. CognitiveHealth's iCAN™ platform provides a comprehensive solution that addresses these challenges head-on, empowering healthcare providers to focus on delivering exceptional patient care. By embracing automation, healthcare organizations can significantly reduce administrative burdens, enhance cash flow, and improve overall performance.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                    Discover how CognitiveHealth can revolutionize your revenue cycle management. Schedule a free demo today to see our innovative solutions in action and learn how they can benefit your specialty practice.
                  </Typography>
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
                  <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" href={heroButtonUrl} sx={{ fontWeight: 600, px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', boxShadow: '0 4px 14px rgba(0, 102, 204, 0.3)' }}>Schedule Free Demo</Button>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={Logo_Neuron}
                    alt=""
                    sx={{
                      width: 'auto',
                      maxHeight: '90px',
                      objectFit: 'contain',
                      display: 'block',
                      mx: 'auto',
                      my: 2,
                      borderRadius: 2,
                      p: 0,
                      bgcolor: 'transparent',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                  />
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        <CTASection />
      </Box>
    </>
  );
};

const EligibilityVerificationFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Eligibility Verification And Denial Management AI Automation",
    "description": "Enhance your revenue cycle with our advanced eligibility verification and denial management automation solutions. Discover how our tools can streamline operations and improve financial performance. Schedule a free consultation today.",
    "url": `${baseUrl}/eligibility-verification-and-denial-management-ai-automation`,
    "publisher": {
      "@type": "Organization",
      "name": "CognitiveHealth Technologies"
    }
  };

  return (
    <FaqPageLayout
      seoTitle="Eligibility Verification And Denial Management AI Automation | CognitiveHealth"
      seoDescription="Enhance your revenue cycle with our advanced eligibility verification and denial management automation solutions. Discover how our tools can streamline operations and improve financial performance. Schedule a free consultation today."
      seoKeywords="Eligibility, Verification, And, Denial, Management, AI, Automation, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Eligibility Verification and Denial Management AI Automation in Medical Billing"
      heroSubtitle="In the ever-evolving landscape of healthcare, efficient revenue cycle management (RCM) is paramount for maintaining financial health and ensuring the sustainability of healthcare organizations. CognitiveHealth's iCAN™ platform leverages advanced AI technology to revolutionize eligibility verification and denial management processes, addressing some of the most persistent challenges in medical billing. This service page explores the transformative impact of automation in these critical areas, providing insights into how CognitiveHealth's solutions enhance operational efficiency and financial performance."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            The future
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} color="var(--color-text-dark, #1f2937)" sx={{ mb: 3, mt: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Eligibility Verification and Denial Management with AI Automation
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
            Challenges in Eligibility Verification and Denial Management
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Eligibility verification is a foundational step in the RCM process, yet it remains fraught with complexities. Manual verification methods are time-consuming and prone to errors, leading to claim denials, delays in reimbursement, and increased administrative costs. Healthcare providers often face challenges such as:
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Inaccurate patient information" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Changes in insurance coverage" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Complex insurance policies" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="High administrative burden" primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            These issues can result in claim denials and reduced cash flow, underscoring the need for a more efficient and reliable approach.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            The process of managing denials is resource-intensive and requires meticulous attention to detail. Manual denial management often leads to extended reimbursement cycles and increased operational costs.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={600} color="var(--color-text-dark, #1f2937)" sx={{ mb: 2, mt: 3 }}>
            Benefits of AI Driven Automated Eligibility Verification and Denial Management
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Automating the eligibility verification process offers numerous benefits, including:
          </Typography>
          <List sx={{ mb: 3 }}>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Accuracy and Efficiency: AI-driven Eligibility and automation and insurance discovery process ensures that patient insurance information is verified accurately and promptly, reducing the likelihood of claim denials due to eligibility issues." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Real-time Verification: Automated systems provide real-time verification, allowing healthcare providers to confirm patient eligibility at the point of service." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Cost Reduction: By minimizing manual intervention, automation reduces administrative costs and frees up staff to focus on more strategic tasks." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
            <ListItem sx={{ py: 0.5, px: 0 }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Enhanced Patient Experience: Faster eligibility verification enhances the patient experience by reducing wait times and ensuring transparency in coverage details." primaryTypographyProps={{ color: 'text.secondary', fontSize: '1.05rem' }} />
            </ListItem>
          </List>
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

export default EligibilityVerificationFaqPage;
