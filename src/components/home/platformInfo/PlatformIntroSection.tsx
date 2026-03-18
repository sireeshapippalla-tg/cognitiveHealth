import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const PlatformIntroSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 10, md: 14 },
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(circle at center, #ffffff, #f1f5f9)",
        color: "#0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #4A90E2 10%, transparent 70%)",
          filter: "blur(120px)",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: { xs: 2, sm: 4 },
              py: 1.5,
              mb: 4,
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Future of Healthcare Revenue Cycle Is Here – Unified, Smarter, Better
            </Typography>
          </Box>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
          
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
       
        
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              mb: 4,
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(90deg, #E06912, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CognitiveHealth’s iCAN™ ONE
            </Box>
            <Box component="br" sx={{ display: { xs: "none", sm: "block" } }} />{" "}
            <Box component="span" sx={{ color: "#0f172a" }}>
              Platform: Where Deep RCM Expertise Meets Advanced AI
            </Box>
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Typography
            sx={{
              color: "#475569",
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              lineHeight: 1.7,
              maxWidth: "860px",
              mx: "auto",
            }}
          >
            Decades of revenue cycle leadership combined with cutting-edge
            intelligent automation, machine learning, generative AI, and
            enterprise-grade infrastructure, purpose-built to solve your
            toughest operational challenges.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PlatformIntroSection;
