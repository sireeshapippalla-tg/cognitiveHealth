import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

import Logo_Neuron from "../../../assets/seo/Logo-Neuron.webp";

interface ScheduleDemoSectionProps {
  heroButtonUrl: string;
  scheduleDemoContent?: React.ReactNode;
}

export const ScheduleDemoSection: React.FC<ScheduleDemoSectionProps> = ({
  heroButtonUrl,
  scheduleDemoContent,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "var(--color-bg-lite, #f9fafb)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "var(--color-bg-white, #ffffff)",
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          border: "1px solid var(--color-border, #e5e7eb)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              {scheduleDemoContent || (
                <>
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
                    Schedule a FREE Demo Today!
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    In the dynamic world of healthcare, automating critical
                    processes such as eligibility verification and denial
                    management is essential for maintaining financial health
                    and operational efficiency. CognitiveHealth's iCAN™
                    platform provides a comprehensive solution that
                    addresses these challenges head-on, empowering
                    healthcare providers to focus on delivering exceptional
                    patient care. By embracing automation, healthcare
                    organizations can significantly reduce administrative
                    burdens, enhance cash flow, and improve overall
                    performance.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    Discover how CognitiveHealth can revolutionize your
                    revenue cycle management. Schedule a free demo today to
                    see our innovative solutions in action and learn how
                    they can benefit your specialty practice.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    CognitiveHealth's team has extensive experience managing
                    Healthcare RCM processes for small, medium, and large
                    healthcare providers and systems. The team includes Al &
                    GenAI Architects & developers, Healthcare Security and
                    Privacy experts, and Healthcare Revenue Cycle SME's.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    This experienced team of CognitiveHealth has partnered
                    with recognized health systems to build iCAN™ - Network
                    of Al Agents.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    iCANTM platform is purpose-built for healthcare.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    color="text.secondary"
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                    }}
                  >
                    We understand your concerns about privacy and security.
                    At CognitiveHealth, our infrastructure meets the highest
                    standards, and we actively follow the latest Al trust
                    and risk guidelines to ensure your safety.
                  </Typography>
                </>
              )}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4,
                  mb: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href={heroButtonUrl}
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(0, 102, 204, 0.3)",
                  }}
                >
                  Schedule Free Demo
                </Button>
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={Logo_Neuron}
                  alt="Schedule Demo"
                  sx={{
                    width: {
                      xs: "120px",
                      sm: "150px",
                      md: "240px",
                    },
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
