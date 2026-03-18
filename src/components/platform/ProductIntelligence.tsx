import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Healthcare from "../../assets/Platform/ProductIntellijence/Healthcare.svg";
import Architecture from "../../assets/Platform/ProductIntellijence/Architecture.svg";
import Enterprise from "../../assets/Platform/ProductIntellijence/Enterprise.svg";
import Compatibility from "../../assets/Platform/ProductIntellijence/Compatibility.svg";

const productIntelligenceItems = [
  {
    icon: <img src={Architecture} alt="Architecture" />,
    title: "Hybrid AI Models ",
    description:
      "Combines large language models with specialized healthcare domain models trained on claims, physician notes, payer policies and correspondence, and regulatory frameworks, delivering accuracy that generic AI cannot match.",
  },
  {
    icon: <img src={Healthcare} alt="Healthcare Expertise" />,
    title: "Deep Healthcare Domain Knowledge",
    description:
      "Purpose-built for healthcare complexity: 1,200+ payer rules, 20+ EMR integrations, specialty-specific workflows, and continuous regulatory updates, handling what makes healthcare unique.",
  },
  {
    icon: <img src={Compatibility} alt="Compatibility" />,
    title: "Comprehensive Interoperability",
    description:
      "Native support for HL7, FHIR, X12 EDI, and modern APIs. Seamlessly connects with Epic, Cerner, Meditech, athenahealth, NextGen, and 15+ other EMRs plus hundreds of peripheral systems.",
  },
  {
    icon: <img src={Enterprise} alt="Enterprise Scale" />,
    title: "Intelligent Process Orchestration ",
    description:
      "AI agents work together across your entire revenue cycle, sharing insights, coordinating handoffs, and optimizing workflows from patient registration through final payment reconciliation.",
  },
];

const ProductIntelligence = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Soft background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(244,122,32,0.05) 0%, transparent 60%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            lineHeight: 1.3,
         
              fontWeight: 800,
              textAlign: "center",
              color: "#0f172a",
              mb: 2,
            }}
          >
            Enterprise AI Architecture Built for <span style={{ color: "#E06912" }}>Healthcare</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              textAlign: "center",
              color: "#475569",
              mb: 10,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Cutting-edge technology designed specifically for the complexity of healthcare operations
          </Typography>
        </motion.div>

        <Grid container spacing={8}>
          {productIntelligenceItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Huge faint number background */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      right: "20px",
                      fontSize: "12rem",
                      fontWeight: 900,
                      color: "rgba(244, 122, 32, 0.15)",
                      lineHeight: 1,
                      zIndex: -1,
                      userSelect: "none",
                    }}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: "70px",
                      height: "70px",
                      mb: 4,
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, #F47A20 0%, #E06912 100%)",
                      boxShadow: "0 10px 25px rgba(244, 122, 32, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "& img": {
                        height: "36px",
                        width: "36px",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      mb: 2,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "#475569",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductIntelligence;
