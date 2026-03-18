import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Integration from "../../assets/Platform/Enterprise/Integration.svg";
import Connectivity from "../../assets/Platform/Enterprise/Connectivity.svg";
import API from "../../assets/Platform/Enterprise/API.svg";
import Deployement from "../../assets/Platform/Enterprise/Deployement.svg";

const EnterpriseReadinessSection = () => {
  const enterpriseItems = [
    {
      icon: <img src={Integration} alt="Integration" />,
      title: "Proven at Enterprise Scale",
      description:
        "Deployed across health systems processing 10M+ transactions monthly. Handles multiple facilities, diverse payer portfolios, varied specialties, and constantly evolving regulations simultaneously.",
    },
    {
      icon: <img src={Deployement} alt="Deployment" />,
      title: "Security & Compliance First",
      description:
        "HITRUST CSF, SOC 2 Type II, with 95% uptime. Enterprise-grade encryption, role-based access controls, and comprehensive audit logging ensure your data stays secure.",
    },
    {
      icon: <img src={Connectivity} alt="Connectivity" />,
      title: "Flexible Deployment Options",
      description:
        "Cloud-hosted (multi-tenant or single-tenant), private cloud deployment. Choose the option that fits your organization's security, compliance, and infrastructure requirements.",
    },
    {
      icon: <img src={API} alt="API" />,
      title: "White-Glove Enterprise Support ",
      description:
        "Dedicated Customer Success Manager, 24/7/365 technical support with <15min response times, quarterly business reviews, and on-site training for large deployments.",
    },
  ];

  return (
    <Box sx={{ py: 12, bgcolor: "#f8fafc", position: "relative" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
            }}
          >
            Built for Scale, Security, and <span style={{ color: "#4A90E2" }}>Reliability</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#475569",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Enterprise-grade infrastructure trusted by organizations processing billions in annual revenue
          </Typography>
        </motion.div>

        {/* Alternating Zig-Zag Features */}
        <Box display="flex" flexDirection="column" gap={{ xs: 8, md: 12 }}>
          {enterpriseItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                container
                spacing={8}
                alignItems="center"
                direction={{ xs: "column-reverse", md: isEven ? "row" : "row-reverse" }}
                key={index}
              >
                {/* Text Content */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, type: "spring" }}
                  >
                    <Box sx={{ pr: isEven ? 4 : 0, pl: isEven ? 0 : 4, textAlign: "left" }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1.75rem", md: "2.25rem" },
                          color: "#0f172a",
                          mb: 3,
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.125rem",
                          lineHeight: 1.8,
                          color: "#475569",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Big Visual Icon */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "300px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "32px",
                        background: "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)",
                        boxShadow: "0 20px 40px rgba(74, 144, 226, 0.3)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "300px",
                          height: "300px",
                          background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%)",
                          filter: "blur(40px)",
                          zIndex: 0,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          width: "100px",
                          height: "100px",
                          "& img": {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: "brightness(0) invert(1) drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                            transform: "scale(1.2)",
                          },
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseReadinessSection;
