import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_predict_1 from "../../../assets/seo/ican-predict-1.webp";
import Group_12 from "../../../assets/seo/Group-12.webp";
import Vector_7 from "../../../assets/seo/Vector-7.webp";
import Group_13 from "../../../assets/seo/Group-13.webp";

export const IcanPredictSection: React.FC = () => {
  return (
    <>
      {/* Section 7: iCAN Predict™ */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: "var(--color-bg-lite, #f9fafb)",
        }}
      >
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
                    width: "auto",
                    maxHeight: "140px",
                    objectFit: "contain",
                    display: "block",
                    mx: "auto",
                    my: 2,
                    borderRadius: 2,
                    p: 0,
                    bgcolor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight={700}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 3,
                    mt: 4,
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                  }}
                >
                  3. iCAN Predict™
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  iCAN Predict™ uses GenAI, data analytics and machine learning
                  to report, alert, and validate specific business process
                  tasks. This automation covers complex tasks such as claims
                  denial management, appeals, financial transaction management,
                  and pre-service business processes.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 8 */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#ffffff" }}>
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
                    width: "auto",
                    maxHeight: "80px",
                    objectFit: "contain",
                    display: "block",
                    mx: 0,
                    my: 2,
                    borderRadius: 2,
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid var(--color-border, #e5e7eb)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }}
                />
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 2,
                    mt: 3,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Machine Learning and GenAI
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Using historical data and the vast amount of available data,
                  iCAN Predict™ uses Gen AI, machine learning, and LLM.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_7}
                  alt=""
                  sx={{
                    width: "auto",
                    maxHeight: "80px",
                    objectFit: "contain",
                    display: "block",
                    mx: 0,
                    my: 2,
                    borderRadius: 2,
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid var(--color-border, #e5e7eb)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }}
                />
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 2,
                    mt: 3,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Predictive Analytics
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Leverage GenAI and the data to predict and mitigate potential
                  issues in the revenue cycle.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Group_13}
                  alt=""
                  sx={{
                    width: "auto",
                    maxHeight: "80px",
                    objectFit: "contain",
                    display: "block",
                    mx: 0,
                    my: 2,
                    borderRadius: 2,
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid var(--color-border, #e5e7eb)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }}
                />
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 2,
                    mt: 3,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Intelligent Process Automation
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Using agent technology combined with data, iCAN Predict™
                  efficiently automates even complex business processes.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
