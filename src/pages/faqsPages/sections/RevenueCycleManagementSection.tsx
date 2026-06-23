import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

import Frame_6 from "../../../assets/seo/Frame-6.webp";
import Group_60 from "../../../assets/seo/Group-60.webp";
import Frame_5 from "../../../assets/seo/Frame-5.webp";

export const RevenueCycleManagementSection: React.FC = () => {
  return (
    <>
      {/* Section 15: Revenue Cycle Management */}
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
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 12 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight={700}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 3,
                    mt: 4,
                    fontSize: { xs: "1.4rem", md: "1.8rem" },
                  }}
                >
                  Revenue Cycle Management
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  The traditional revenue cycle is riddled with manual
                  processes, inefficiencies, and errors that can hinder
                  financial performance. CognitiveHealth's iCAN™ platform
                  addresses these challenges head-on by integrating intelligent
                  process automation specifically tailored for healthcare. Our
                  AI-powered solutions encompass everything from pre-encounter
                  to patient discharge, ensuring a seamless and efficient
                  revenue cycle.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 16 */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="stretch">
              <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={Frame_6}
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
                      Expertise and Experience
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                      sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                    >
                      CognitiveHealth's team comprises GenAI architects,
                      healthcare security and privacy experts, and revenue cycle
                      SMEs with extensive experience managing RCM processes for
                      healthcare providers of all sizes. Our team has
                      successfully implemented AI-driven solutions in
                      partnership with recognized health systems, nursing homes,
                      and specialty care providers.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 4,
                      mb: 2,
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={Group_60}
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
                      Commitment to Privacy and Security
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                      sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                    >
                      We understand your concerns about privacy and security. At
                      CognitiveHealth, our infrastructure meets the highest
                      standards, and we actively follow the latest AI trust and
                      risk guidelines to ensure your safety.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 4,
                      mb: 2,
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={Frame_5}
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
                      Proven ROI
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                      sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                    >
                      Our AI-powered solutions deliver significant ROI by
                      focusing on labor-intensive processes and minimizing human
                      involvement to exceptional handling and oversight. By
                      accelerating automation and eliminating redundancies,
                      CognitiveHealth ensures rapid implementation and quick
                      time-to-value.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 4,
                      mb: 2,
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      variant="text"
                      href="/request-demo"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
