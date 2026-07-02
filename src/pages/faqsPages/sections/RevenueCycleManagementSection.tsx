import React from "react";
import { Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

import Frame_6 from "../../../assets/seo/Frame-6.webp";
import Group_60 from "../../../assets/seo/Group-60.webp";
import Frame_5 from "../../../assets/seo/Frame-5.webp";

import {
  StyledSection,
  StyledTitleSmall,
  StyledParagraph,
  StyledIconImage,
  StyledCardTitle,
  StyledCardParagraph,
  FlexGridItem,
  CardFlexWrapper,
  CardActionGroup,
  LearnMoreButton,
} from "./sections.style";

export const RevenueCycleManagementSection: React.FC = () => {
  return (
    <>
      {/* Section 15: Revenue Cycle Management */}
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
                <StyledTitleSmall
                  variant="h3"
                  component="h2"
                >
                  Revenue Cycle Management
                </StyledTitleSmall>
                <StyledParagraph
                  variant="body1"
                  paragraph
                >
                  The traditional revenue cycle is riddled with manual
                  processes, inefficiencies, and errors that can hinder
                  financial performance. CognitiveHealth's iCAN™ platform
                  addresses these challenges head-on by integrating intelligent
                  process automation specifically tailored for healthcare. Our
                  AI-powered solutions encompass everything from pre-encounter
                  to patient discharge, ensuring a seamless and efficient
                  revenue cycle.
                </StyledParagraph>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>

      {/* Section 16 */}
      <StyledSection $bgColor="#ffffff">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="stretch">
              <FlexGridItem size={{ xs: 12, md: 4 }}>
                <CardFlexWrapper>
                  <Grid>
                    <StyledIconImage
                      component="img"
                      src={Frame_6}
                      alt=""
                    />
                    <StyledCardTitle
                      variant="h5"
                      component="h3"
                    >
                      Expertise and Experience
                    </StyledCardTitle>
                    <StyledCardParagraph
                      variant="body1"
                      paragraph
                    >
                      CognitiveHealth's team comprises GenAI architects,
                      healthcare security and privacy experts, and revenue cycle
                      SMEs with extensive experience managing RCM processes for
                      healthcare providers of all sizes. Our team has
                      successfully implemented AI-driven solutions in
                      partnership with recognized health systems, nursing homes,
                      and specialty care providers.
                    </StyledCardParagraph>
                  </Grid>
                  <CardActionGroup>
                    <LearnMoreButton
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Learn more
                    </LearnMoreButton>
                  </CardActionGroup>
                </CardFlexWrapper>
              </FlexGridItem>

              <FlexGridItem size={{ xs: 12, md: 4 }}>
                <CardFlexWrapper>
                  <Grid>
                    <StyledIconImage
                      component="img"
                      src={Group_60}
                      alt=""
                    />
                    <StyledCardTitle
                      variant="h5"
                      component="h3"
                    >
                      Commitment to Privacy and Security
                    </StyledCardTitle>
                    <StyledCardParagraph
                      variant="body1"
                      paragraph
                    >
                      We understand your concerns about privacy and security. At
                      CognitiveHealth, our infrastructure meets the highest
                      standards, and we actively follow the latest AI trust and
                      risk guidelines to ensure your safety.
                    </StyledCardParagraph>
                  </Grid>
                  <CardActionGroup>
                    <LearnMoreButton
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Learn more
                    </LearnMoreButton>
                  </CardActionGroup>
                </CardFlexWrapper>
              </FlexGridItem>

              <FlexGridItem size={{ xs: 12, md: 4 }}>
                <CardFlexWrapper>
                  <Grid>
                    <StyledIconImage
                      component="img"
                      src={Frame_5}
                      alt=""
                    />
                    <StyledCardTitle
                      variant="h5"
                      component="h3"
                    >
                      Proven ROI
                    </StyledCardTitle>
                    <StyledCardParagraph
                      variant="body1"
                      paragraph
                    >
                      Our AI-powered solutions deliver significant ROI by
                      focusing on labor-intensive processes and minimizing human
                      involvement to exceptional handling and oversight. By
                      accelerating automation and eliminating redundancies,
                      CognitiveHealth ensures rapid implementation and quick
                      time-to-value.
                    </StyledCardParagraph>
                  </Grid>
                  <CardActionGroup>
                    <LearnMoreButton
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Learn more
                    </LearnMoreButton>
                  </CardActionGroup>
                </CardFlexWrapper>
              </FlexGridItem>
            </Grid>
          </motion.div>
        </Container>
      </StyledSection>
    </>
  );
};

