import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import Vector_13 from "../../../assets/seo/Vector-13.webp";
import Vector_14 from "../../../assets/seo/Vector-14.webp";
import Vector_15 from "../../../assets/seo/Vector-15.webp";

import {
  StyledSection,
  StyledTitle,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
} from "./sections.style";

export const PaymentPostingSection: React.FC = () => {
  return (
    <>
      {/* Section 13: Payment Posting and Reconciliation */}
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
                <StyledTitle
                  variant="h3"
                  component="h2"
                >
                  Payment Posting and Reconciliation
                </StyledTitle>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  iCAN™ Cash Management automates the tedious and error-prone
                  manual reconciliation process, reducing data entry errors and
                  improving efficiency. This module integrates seamlessly with
                  existing workflows and supports a remote workforce, ensuring
                  continuity even during challenging times.
                </StyledParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 14 */}
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
                  src={Vector_13}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Efficiency Improvement
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Significant reduction in manual effort and data entry errors.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_14}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Remote Workforce Enablement
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Supports remote work without disrupting workflows.
                </StyledCardParagraph>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <StyledIconImage
                  component="img"
                  src={Vector_15}
                  alt=""
                />
                <StyledCardTitle
                  variant="h5"
                  component="h3"
                >
                  Audit Trail
                </StyledCardTitle>
                <StyledCardParagraph
                  variant="body1"
                  paragraph
                >
                  Provides a digital and cost-effective audit trail for each
                  posting.
                </StyledCardParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

