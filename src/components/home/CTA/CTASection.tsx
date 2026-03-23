import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 6, md: 8 },
        display: "flex",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #f8fafc, #e2e8f0)",
        color: "#0f172a",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            borderRadius: "32px",
            p: { xs: 4, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",

            // 🔥 Glass effect (Light Mode)
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",

            // 🔥 Gradient border glow
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              padding: "1.5px",
              borderRadius: "32px",
              background: "linear-gradient(135deg, #F47A20, #6BBF59, #4A90E2)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: 0.6,
            },
          }}
        >
          {/* 🔥 Floating Glow */}
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, #F47A20 20%, transparent 70%)",
              filter: "blur(100px)",
              top: "-150px",
              right: "-50px",
              opacity: 0.15,
              pointerEvents: "none"
            }}
          />

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Typography

              fontWeight={800}
              sx={{
                mb: 2,

                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                lineHeight: 1.3,

                background: "linear-gradient(135deg, #0f172a, #334155)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to Experience the CognitiveHealth Difference?
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Typography
              sx={{
                color: "#475569",
                maxWidth: "700px",
                margin: "0 auto",
                mb: 6,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Transform your revenue cycle with our expert-led, AI-powered solutions.
              Join the future of healthcare operations today.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <Box
            display="flex"
            justifyContent="center"
            gap={3}
            flexWrap="wrap"
            sx={{ mb: 8 }}
          >
            {/* Primary Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                aria-label="Request a Demo"
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
                onClick={() => navigate("/contact-us")}
              >
                Request a Demo
              </Button>
            </motion.div>

            {/* Secondary Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                aria-label="See Platform in Action"
                sx={{
                  px: 5,
                  py: 1.6,
                  borderRadius: "40px",
                  textTransform: "none",
                  fontWeight: 500,
                  borderColor: "#F47A20",
                  color: "#F47A20",

                  "&:hover": {
                    background: "rgba(107,191,89,0.1)",
                    borderColor: "#F47A20",
                  },
                }}
                onClick={() => navigate("/resources#videos")}
              >
                See Platform in Action
              </Button>
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;