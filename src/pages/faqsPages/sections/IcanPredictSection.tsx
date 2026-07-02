import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_predict_1 from "../../../assets/seo/ican-predict-1.webp";
import Group_12 from "../../../assets/seo/Group-12.webp";
import Vector_7 from "../../../assets/seo/Vector-7.webp";
import Group_13 from "../../../assets/seo/Group-13.webp";

import {
  StyledSection,
  StyledFeatureImage,
  StyledTitle,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const IcanPredictSection: React.FC = () => {
  return (
    <>
      {/* Section 7: iCAN Predict™ */}
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
                <StyledFeatureImage
                  component="img"
                  src={ican_predict_1}
                  alt=""
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <StyledTitle
                  variant="h3"
                  component="h2"
                >
                  3. iCAN Predict™
                </StyledTitle>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN Predict™ uses GenAI, data analytics and machine learning
                  to report, alert, and validate specific business process
                  tasks. This automation covers complex tasks such as claims
                  denial management, appeals, financial transaction management,
                  and pre-service business processes.
                </StyledParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 8 */}
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
                  src={Group_12}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Machine Learning and GenAI
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Using historical data and the vast amount of available data,
                  iCAN Predict™ uses Gen AI, machine learning, and LLM.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_7}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Predictive Analytics
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Leverage GenAI and the data to predict and mitigate potential
                  issues in the revenue cycle.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Group_13}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Intelligent Process Automation
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Using agent technology combined with data, iCAN Predict™
                  efficiently automates even complex business processes.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

