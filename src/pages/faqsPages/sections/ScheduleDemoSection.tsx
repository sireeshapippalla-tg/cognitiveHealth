import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import Logo_Neuron from "../../../assets/seo/Logo-Neuron.webp";

import {
  StyledSection,
  StyledDemoContainer,
  StyledTitle,
  StyledParagraph,
  StyledDemoButtonGroup,
  StyledDemoButton,
  ImageContainer,
  LogoNeuron,
} from "./sections.style";

interface ScheduleDemoSectionProps {
  heroButtonUrl: string;
  scheduleDemoContent?: React.ReactNode;
}

export const ScheduleDemoSection: React.FC<ScheduleDemoSectionProps> = ({
  heroButtonUrl,
  scheduleDemoContent,
}) => {
  return (
    <StyledSection $bgColor="var(--color-bg-lite, #f9fafb)">
      <StyledDemoContainer maxWidth="lg">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              {scheduleDemoContent || (
                <>
                  <StyledTitle
                    variant="h3"
                    component="h2"
                  >
                    Schedule a FREE Demo Today!
                  </StyledTitle>

                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    In the dynamic world of healthcare, automating critical
                    processes such as eligibility verification and denial
                    management is essential for maintaining financial health and
                    operational efficiency. CognitiveHealth's iCAN™ platform
                    provides a comprehensive solution that addresses these
                    challenges head-on, empowering healthcare providers to focus
                    on delivering exceptional patient care. By embracing
                    automation, healthcare organizations can significantly
                    reduce administrative burdens, enhance cash flow, and
                    improve overall performance.
                  </StyledParagraph>

                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    Discover how CognitiveHealth can revolutionize your revenue
                    cycle management. Schedule a free demo today to see our
                    innovative solutions in action and learn how they can
                    benefit your specialty practice.
                  </StyledParagraph>
                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    CognitiveHealth's team has extensive experience managing
                    Healthcare RCM processes for small, medium, and large
                    healthcare providers and systems. The team includes Al &
                    GenAI Architects & developers, Healthcare Security and
                    Privacy experts, and Healthcare Revenue Cycle SME's.
                  </StyledParagraph>
                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    This experienced team of CognitiveHealth has partnered with
                    recognized health systems to build iCAN™ - Network of Al
                    Agents.
                  </StyledParagraph>
                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    iCANTM platform is purpose-built for healthcare.
                  </StyledParagraph>

                  <StyledParagraph
                    variant="body1"
                    paragraph
                  >
                    We understand your concerns about privacy and security. At
                    CognitiveHealth, our infrastructure meets the highest
                    standards, and we actively follow the latest Al trust and
                    risk guidelines to ensure your safety.
                  </StyledParagraph>
                </>
              )}

              <StyledDemoButtonGroup>
                <StyledDemoButton
                  variant="contained"
                  color="primary"
                  href={heroButtonUrl}
                >
                  Schedule Free Demo
                </StyledDemoButton>
              </StyledDemoButtonGroup>
            </Grid>

            {/* Right Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <ImageContainer>
                <LogoNeuron
                  component="img"
                  src={Logo_Neuron}
                  alt="Schedule Demo"
                />
              </ImageContainer>
            </Grid>
          </Grid>
        </motion.div>
      </StyledDemoContainer>
    </StyledSection>
  );
};

