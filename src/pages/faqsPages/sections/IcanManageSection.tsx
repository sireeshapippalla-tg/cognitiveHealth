import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import ican_predict_1_1 from "../../../assets/seo/ican-predict-1-1.webp";
import Group_5 from "../../../assets/seo/Group-5.webp";
import Vector_8 from "../../../assets/seo/Vector-8.webp";
import Vector_9 from "../../../assets/seo/Vector-9.webp";

export const IcanManageSection: React.FC = () => {
  return (
    <>
      {/* Section 9: iCAN Manage™ */}
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
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
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
                  4. iCAN Manage™
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  iCAN Manage™ enables the scheduling, execution, and
                  monitoring of tasks. This module promptly addresses alerts
                  and escalations, allowing for efficient task management and
                  reporting.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={ican_predict_1_1}
                  alt=""
                  sx={{
                    width: "auto",
                    maxHeight: "140px",
                    objectFit: "contain",
                    display: "block",
                    mx: "auto",
                    my: 2,
                    borderRadius: 2,
                    p: 0,
                    bgcolor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 10 */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Group_5}
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
                  Task Scheduling
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Automates the scheduling of critical tasks to ensure timely
                  execution.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_8}
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
                  Monitoring and Alerts
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Real-time monitoring with automatic alerts for exceptions.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_9}
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
                  Reporting
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Generate detailed reports to support decision-making and
                  continuous improvement.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
