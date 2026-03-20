import React from "react";
// import SplitSection from "../ui/SplitSection/SplitSection";
// import { Highlight } from "../ui/SplitSection/SplitSection.styles";
import heroSectionImage from "../../assets/HomeScreen.svg";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const AboutUsHeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #F9FAFB 0%, #fff 100%)",
      }}
    >
      {/* UNIQUE BACKGROUND ACCENTS */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "800px",
          height: "800px",
          border: "1px solid rgba(244, 122, 32, 0.05)",
          borderRadius: "40%",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "1000px",
          height: "1000px",
          border: "1px solid rgba(107, 191, 89, 0.05)",
          borderRadius: "38%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* 🔥 LEFT CONTENT: FLUID & STAGGERED */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    px: 2.5,
                    py: 0.8,
                    borderRadius: "40px",
                    background: "rgba(244, 122, 32, 0.08)",
                    color: "#F47A20",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    mb: 3,
                  }}
                >
                  Innovating Healthcare
                </Typography>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  variant="h1"
                  fontWeight={900}
                  sx={{
                    mb: 3,
                    color: "#1F2937",
                    lineHeight: 1.1,
                    fontSize: { xs: "2rem", sm: "3.2rem", md: "3.8rem" },
                    letterSpacing: "-0.04em"
                  }}
                >
                  Pioneering <br />
                  <Box component="span" sx={{ 
                    color: "transparent",
                    WebkitTextStroke: "1px #F47A20",
                    fontStyle: "italic"
                  }}>
                    Agentic AI
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  sx={{
                    color: "#4B5563",
                    mb: 4,
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    maxWidth: "500px",
                    fontWeight: 500
                  }}
                >
                  We aren't just automating tasks; we are redesigning how healthcare works. Our platform empowers staff to focus on what matters most.
                </Typography>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Box display="flex" gap={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.8,
                      borderRadius: "50px",
                      fontWeight: 800,
                      textTransform: "none",
                      background: "#F47A20",
                      fontSize: "1rem",
                      boxShadow: "0 15px 30px rgba(244,122,32,0.25)",
                      "&:hover": { background: "#e65a00" },
                    }}
                    onClick={() => navigate("/contact-us")}
                  >
                    Partner With Us
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => navigate("/resources#videos")}
                    sx={{
                      px: 3,
                      py: 1.8,
                      fontWeight: 800,
                      textTransform: "none",
                      color: "#1F2937",
                      fontSize: "1rem",
                      "&:hover": { background: "transparent", color: "#F47A20" },
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Our Vision
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* 🔥 RIGHT IMAGE: INTEGRATED & FLOWING */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Decorative background shape */}
                <Box sx={{
                  position: "absolute",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(107, 191, 89, 0.05) 0%, transparent 70%)",
                  borderRadius: "50%",
                  zIndex: -1
                }} />
                
                <img
                  src={heroSectionImage}
                  alt="Visionary Healthcare"
                  style={{ 
                    width: "110%", 
                    height: "auto",
                    display: "block",
                    filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.1))"
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsHeroSection;
