import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_insight_1 from "../../../assets/seo/ican-insight-1.webp";
import Vector_6 from "../../../assets/seo/Vector-6.webp";
import Group_3 from "../../../assets/seo/Group-3.webp";
import Group_4 from "../../../assets/seo/Group-4.webp";

export const IcanInsightSection: React.FC = () => {
  return (
    <>
      {/* Section 5: iCAN Insight™ */}
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
                  2. iCAN Insight™
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  iCAN Insight™ utilizes Natural Language Processing (NLP) and
                  Large Language Models (LLM) to process structured and
                  unstructured data, enhancing automation. This module excels at
                  managing large volumes of data, such as correspondence, by
                  categorizing, indexing, and automating downstream workflows.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={ican_insight_1}
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
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 6 */}
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
                  src={Vector_6}
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
                  Data Processing
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Efficiently processes both structured and unstructured data.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Group_3}
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
                  Workflow Orchestration
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Using AI Agents, iCAN™ automates the downstream workflow using
                  the data and business process indicators.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Group_4}
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
                  Data Standardization and Classification
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Using machine learning and NLP, iCAN™ standardizes, classifies
                  documents and other assets extracts data from them.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
