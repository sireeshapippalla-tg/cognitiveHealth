import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_insight_1 from "../../../assets/seo/ican-insight-1.webp";
import Vector_6 from "../../../assets/seo/Vector-6.webp";
import Group_3 from "../../../assets/seo/Group-3.webp";
import Group_4 from "../../../assets/seo/Group-4.webp";

import {
  StyledSection,
  StyledFeatureImage,
  StyledTitle,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const IcanInsightSection: React.FC = () => {
  return (
    <>
      {/* Section 5: iCAN Insight™ */}
      <StyledSection $bgColor="var(--color-bg-lite, #f9fafb)">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <StyledTitle
                  variant="h3"
                  component="h2"
                >
                  2. iCAN Insight™
                </StyledTitle>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN Insight™ utilizes Natural Language Processing (NLP) and
                  Large Language Models (LLM) to process structured and
                  unstructured data, enhancing automation. This module excels at
                  managing large volumes of data, such as correspondence, by
                  categorizing, indexing, and automating downstream workflows.
                </StyledParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <StyledFeatureImage
                  component="img"
                  src={ican_insight_1}
                  alt=""
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 6 */}
      <StyledSection $bgColor="#ffffff">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_6}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Data Processing
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Efficiently processes both structured and unstructured data.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Group_3}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Workflow Orchestration
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Using AI Agents, iCAN™ automates the downstream workflow using
                  the data and business process indicators.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Group_4}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Data Standardization and Classification
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Using machine learning and NLP, iCAN™ standardizes, classifies
                  documents and other assets extracts data from them.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

