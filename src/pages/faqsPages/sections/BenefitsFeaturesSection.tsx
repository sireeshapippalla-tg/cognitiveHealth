import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import Vector_10 from "../../../assets/seo/Vector-10.webp";
import Vector_12 from "../../../assets/seo/Vector-12.webp";
import Vector_11 from "../../../assets/seo/Vector-11.webp";

export const BenefitsFeaturesSection: React.FC = () => {
  return (
    <>
      {/* Section 11: Benefits & Features */}
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
                    mb: 2,
                    mt: 4,
                    fontSize: { xs: "1.2rem", md: "1.2rem" },
                  }}
                >
                  Benefits & Features
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight={700}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 3,
                    mt: 4,
                    fontSize: { xs: "1.8rem", md: "2.6rem" },
                  }}
                >
                  Real-World Applications & Benefits
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  fontWeight={700}
                  color="var(--color-text-dark, #1f2937)"
                  sx={{
                    mb: 3,
                    mt: 4,
                    fontSize: { xs: "1.8rem", md: "2.0rem" },
                  }}
                >
                  Automating Correspondence Management
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
                >
                  With iCAN™ Correspondence, healthcare organizations can
                  automate the management of thousands of correspondence pieces,
                  saving significant manual effort and ensuring timely responses
                  to denials and requests. By standardizing documents, executing
                  customizable workflows, and leveraging advanced AI tools like
                  OCR and NLP, iCAN™ transforms correspondence management into
                  an efficient, automated process.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Section 12 */}
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
                  src={Vector_10}
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
                  Manual Effort Savings
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Up to 80% reduction in manual effort.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_12}
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
                  Timely Responses
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Ensures prompt handling of denials, medical record requests,
                  and patient letters.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src={Vector_11}
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
                  Scalability
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  color="text.secondary"
                  sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Hyper-converged infrastructure to handle large volumes of
                  correspondence.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};
