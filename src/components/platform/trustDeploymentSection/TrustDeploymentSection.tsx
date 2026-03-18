import { useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImplementationGuideModal from "./ImplementationGuideModal";
import { PrimaryButton } from "../../ui/appButton/AppButton.styles";

const TrustDeploymentSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.4 },
    },
  };

  return (
    <Box
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc", position: "relative" }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: "32px",
              background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.02)",
              overflow: "hidden",
              p: { xs: 4, md: 8 },
              color: "#0f172a",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(74, 144, 226, 0.08) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
                zIndex: 0,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                  
                    sx={{
                      fontWeight: 800,
                      
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            lineHeight: 1.3,
         
                      textAlign: "center",
                      mb: 8,
                      color: "#0f172a",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    One platform. One vendor.{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(90deg, #F47A20, #4A90E2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      One source of truth.
                    </Box>
                  </Typography>
                </motion.div>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: { xs: 6, md: 10 },
                    alignItems: "center",
                  }}
                >
                  {/* LEFT SIDE: Quote */}
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        position: "relative",
                        p: 4,
                        bgcolor: "rgba(74, 144, 226, 0.05)",
                        borderRadius: "24px",
                        border: "1px solid rgba(74, 144, 226, 0.15)",
                      }}
                    >
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "-30px",
                          left: "20px",
                          fontSize: "8rem",
                          fontWeight: 900,
                          color: "rgba(74, 144, 226, 0.15)",
                          lineHeight: 1,
                          fontFamily: "serif",
                        }}
                      >
                        "
                      </Typography>
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          lineHeight: 1.8,
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                          color: "#1e293b",
                          mb: 3,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        Processing millions of claims across 12 facilities with
                        zero disruption — CognitiveHealth scales with our
                        growth.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          color: "#475569",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        — VP Revenue Cycle, 4000-bed health system
                      </Typography>
                    </Box>
                  </motion.div>

                  {/* RIGHT SIDE: Checklist */}
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 4,
                      }}
                    >
                      {[
                        "20+ EMR Integrations",
                        "Pre-built Connectors",
                        "HL7, FHIR, API Ready",
                        "Operational in 4–6 Weeks",
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: "#4A90E2",
                              fontSize: "1.8rem",
                              filter:
                                "drop-shadow(0 4px 6px rgba(74,144,226,0.2))",
                            }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: "1.1rem",
                              color: "#334155",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </Box>

                {/* CTA BUTTON */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ textAlign: "center", mt: 8 }}>
                    <PrimaryButton
                      endIcon={
                        <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
                      }
                      onClick={() => setOpenModal(true)}
                      sx={{
                        px: 5,
                        py: 1.6,
                        borderRadius: "40px",
                        fontWeight: "bold",
                        textTransform: "none",
                        position: "relative",
                        overflow: "hidden",
                        background: "#F47A20",
                        // background:
                        //   "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
                        color: "white",
                        boxShadow: "0 10px 25px rgba(244,122,32,0.3)",

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-80%",
                          width: "60%",
                          height: "100%",
                          background:
                            "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                          transform: "skewX(-20deg)",
                        },

                        "&:hover::after": {
                          left: "130%",
                          transition: "0.7s",
                        },
                      }}
                    >
                      Learn About Our Implementation Process
                    </PrimaryButton>
                  </Box>
                </motion.div>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <ImplementationGuideModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Box>
  );
};

export default TrustDeploymentSection;
