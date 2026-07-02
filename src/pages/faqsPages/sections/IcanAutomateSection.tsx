import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_automation_1 from "../../../assets/seo/ican-automation-1.webp";
import Vector_3 from "../../../assets/seo/Vector-3.webp";
import Vector_4 from "../../../assets/seo/Vector-4.webp";
import Group_2 from "../../../assets/seo/Group-2.webp";
import Vector_5 from "../../../assets/seo/Vector-5.webp";

import {
  StyledSection,
  StyledFeatureImage,
  StyledTitle,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const IcanAutomateSection: React.FC = () => {
  return (
    <>
      {/* Section 3: iCAN Automate™ */}
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
                  src={ican_automation_1}
                  alt=""
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <StyledTitle
                  variant="h3"
                  component="h2"
                >
                  1. iCAN Automate™
                </StyledTitle>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN Automate™ leverages advanced agent architecture and
                  automated process mapping to record business processes in
                  real-time, facilitating faster development and seamless
                  deployment. The CognitiveHealth Automation Scale guides a
                  business value model for better efficiency and ROI.
                </StyledParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 4 */}
      <StyledSection $bgColor="#ffffff">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 3 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_3}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Automation Process Mapping
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Capture and document every step of your business processes.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_4}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Real-Time Recording
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Real-time process recording ensures accurate data capture and
                  analysis.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <StyledIconImage
                  component="img"
                  src={Group_2}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Seamless Deployment
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Purpose-built for healthcare, iCAN™ integrates with many EMRs
                  and other business applications.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_5}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Network of AI Agents
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN™ is a network of AI Agents. They come with an
                  ever-expanding pre-built library of workflows.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

