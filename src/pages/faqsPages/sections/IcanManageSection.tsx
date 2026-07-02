import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_predict_1_1 from "../../../assets/seo/ican-predict-1-1.webp";
import Group_5 from "../../../assets/seo/Group-5.webp";
import Vector_8 from "../../../assets/seo/Vector-8.webp";
import Vector_9 from "../../../assets/seo/Vector-9.webp";

import {
  StyledSection,
  StyledFeatureImage,
  StyledTitle,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const IcanManageSection: React.FC = () => {
  return (
    <>
      {/* Section 9: iCAN Manage™ */}
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
                  4. iCAN Manage™
                </StyledTitle>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN Manage™ enables the scheduling, execution, and monitoring
                  of tasks. This module promptly addresses alerts and
                  escalations, allowing for efficient task management and
                  reporting.
                </StyledParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <StyledFeatureImage
                  component="img"
                  src={ican_predict_1_1}
                  alt=""
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 10 */}
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
                  src={Group_5}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Task Scheduling
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Automates the scheduling of critical tasks to ensure timely
                  execution.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_8}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Monitoring and Alerts
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Real-time monitoring with automatic alerts for exceptions.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_9}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Reporting
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Generate detailed reports to support decision-making and
                  continuous improvement.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

