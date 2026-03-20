import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const WhoWeAreSection: React.FC = () => {
  return (
    <Box sx={{
      py: { xs: 5, md: 9 },
      background: "#fff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* PREMIUM BACKGROUND: Subtle Animated Aura */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(107, 191, 89, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
           
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                mb: 6,
               fontSize: { xs: "20px", md: "28px" },
                color: "#111827",
                lineHeight: 1.1,
                letterSpacing: "-0.04em"
              }}
            >
              Who We Are
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Box sx={{
              color: "#4B5563",
             fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.8,
              fontWeight: 500,
              textAlign: "center",
              "& p": { mb: 4 }
            }}>
              <p>
                <span style={{ color: "#F47A20", fontWeight: 900 }}>CognitiveHealth</span> is dedicated to solving the toughest operational challenges in healthcare revenue cycle management through intelligent automation. We combine deep expertise with advanced technology to deliver measurable, sustainable results for health systems, physician groups, and specialty providers.




              </p>
              <p>
                Founded by revenue cycle leaders who experienced firsthand the inefficiencies and complexity of managing healthcare financial operations, we understand that technology must serve people, workflows, and outcomes—not the other way around.

              </p>
              <Box sx={{
                width: "60px",
                height: "4px",
                background: "#6BBF59",
                mx: "auto",
                mb: 4,
                borderRadius: "2px",
                opacity: 0.6
              }} />
              <p style={{ fontStyle: "italic", color: "#374151" }}>
                Our approach is grounded in operational excellence, continuous improvement, and partnership. We work alongside healthcare organizations to automate repetitive tasks, reduce errors, and empower teams to focus on strategic, high-value work that drives financial performance and supports exceptional patient care.

              </p>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAreSection;
