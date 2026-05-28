import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import Vector_13 from "../../../assets/seo/Vector-13.webp";
import Vector_14 from "../../../assets/seo/Vector-14.webp";
import Vector_15 from "../../../assets/seo/Vector-15.webp";

export const PaymentPostingSection: React.FC = () => {
  return (
    <>
      {/* Section 13: Payment Posting and Reconciliation */}
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
              <Grid size={{ xs: 12, md: 12 }}>
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
                  Payment Posting and Reconciliation
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  iCAN™ Cash Management automates the tedious and error-prone
                  manual reconciliation process, reducing data entry errors and
                  improving efficiency. This module integrates seamlessly with
                  existing workflows and supports a remote workforce, ensuring
                  continuity even during challenging times.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 14 */}
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
                  src={Vector_13}
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
                  Efficiency Improvement
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Significant reduction in manual effort and data entry errors.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_14}
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
                  Remote Workforce Enablement
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Supports remote work without disrupting workflows.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_15}
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
                  Audit Trail
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Provides a digital and cost-effective audit trail for each
                  posting.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
