import { useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Integration from "../../assets/Platform/Enterprise/Integration.svg";
import Connectivity from "../../assets/Platform/Enterprise/Connectivity.svg";
import API from "../../assets/Platform/Enterprise/API.svg";
import Deployement from "../../assets/Platform/Enterprise/Deployement.svg";

const EnterpriseReadinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <Box sx={{ py: 12, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
              lineHeight:{ xs: 1.3, sm: 1.3, md: 1.2 }
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

        {/* Interactive Interactive Stage */}
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE: Navigation List */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box display="flex" flexDirection="column" gap={3}>
              {enterpriseItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        p: 2,
                        pr: 4,
                        borderRadius: "20px",
                        background: isActive ? "#ffffff" : "transparent",
                        boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.06)" : "none",
                        border: "1px solid",
                        borderColor: isActive ? "rgba(74, 144, 226, 0.2)" : "transparent",
                        transition: "all 0.3s ease",
                        transform: isActive ? "scale(1.02)" : "scale(1)",
                        "&:hover": {
                          background: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
                        },
                      }}
                    >
                      {/* Small Icon */}
                      <Box
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          background: isActive
                            ? "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)"
                            : "#e2e8f0",
                          boxShadow: isActive ? "0 10px 20px rgba(74, 144, 226, 0.3)" : "none",
                          "& img": {
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                            filter: isActive
                              ? "brightness(0) invert(1)"
                              : "brightness(0) opacity(0.5)",
                            transition: "all 0.3s ease",
                          },
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontWeight: isActive ? 800 : 600,
                          fontSize: "1.15rem",
                          color: isActive ? "#0f172a" : "#64748b",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Active Indicator Line */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "20%",
                            bottom: "20%",
                            width: "4px",
                            background: "#4A90E2",
                            borderRadius: "0 4px 4px 0",
                          }}
                        />
                      )}
                    </Box>
                  </motion.div>
                );
              })}
            </Box>
          </Grid>

          {/* RIGHT SIDE: Massive Display Stage */}
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "32px",
                    background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: "0 40px 80px rgba(0, 0, 0, 0.08)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: { xs: 2, md: 4 },
                    minHeight: { xs: "auto", md: "300px" },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "400px",
                      height: "400px",
                      background: "radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)",
                      top: "-100px",
                      right: "-100px",
                      filter: "blur(60px)",
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    {/* Massive Faint Icon in Background */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        width: "200px",
                        height: "200px",
                        opacity: 0.05,
                        pointerEvents: "none",
                        "& img": {
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter: "grayscale(100%)",
                        },
                      }}
                    >
                      {enterpriseItems[activeIndex].icon}
                    </Box>

                    {/* Stage Presentation Icon */}
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "24px",
                        background: "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 15px 30px rgba(74, 144, 226, 0.3)",
                        mb: 5,
                        "& img": {
                          width: "45px",
                          height: "45px",
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                        },
                      }}
                    >
                      {enterpriseItems[activeIndex].icon}
                    </Box>

                    {/* Stage Presentation Text */}
                    <Typography
                     
                      sx={{
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        color: "#0f172a",
                        mb: 3,
                        lineHeight: 1.2,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {enterpriseItems[activeIndex].title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1.15rem",
                        lineHeight: 1.8,
                        color: "#475569",
                      }}
                    >
                      {enterpriseItems[activeIndex].description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EnterpriseReadinessSection;
