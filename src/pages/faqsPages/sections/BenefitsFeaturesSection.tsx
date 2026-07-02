import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import Vector_10 from "../../../assets/seo/Vector-10.webp";
import Vector_12 from "../../../assets/seo/Vector-12.webp";
import Vector_11 from "../../../assets/seo/Vector-11.webp";

import {
  StyledSection,
  StyledSubtitle,
  StyledLargeTitle,
  StyledSectionHeading,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const BenefitsFeaturesSection: React.FC = () => {
  return (
    <>
      {/* Section 11: Benefits & Features */}
      <StyledSection $bgColor="var(--color-bg-lite, #f9fafb)">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 12 }}>
                <StyledSubtitle
                  variant="h3"
                  component="h2"
                >
                  Benefits & Features
                </StyledSubtitle>
                <StyledLargeTitle
                  variant="h3"
                  component="h2"
                >
                  Real-World Applications & Benefits
                </StyledLargeTitle>
                <StyledSectionHeading
                  variant="h3"
                  component="h2"
                >
                  Automating Correspondence Management
                </StyledSectionHeading>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  With iCAN™ Correspondence, healthcare organizations can
                  automate the management of thousands of correspondence pieces,
                  saving significant manual effort and ensuring timely responses
                  to denials and requests. By standardizing documents, executing
                  customizable workflows, and leveraging advanced AI tools like
                  OCR and NLP, iCAN™ transforms correspondence management into
                  an efficient, automated process.
                </StyledParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 12 */}
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
                  src={Vector_10}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Manual Effort Savings
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Up to 80% reduction in manual effort.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_12}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Timely Responses
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Ensures prompt handling of denials, medical record requests,
                  and patient letters.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_11}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Scalability
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Hyper-converged infrastructure to handle large volumes of
                  correspondence.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

