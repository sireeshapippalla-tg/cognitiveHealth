import { useRef } from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { motion, useInView } from "framer-motion";
import useCountUp from "../../ui/useCountUp";

const CTASection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 8, md: 12 },
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
               
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
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
              >
                See Platform in Action
              </Button>
            </motion.div>
          </Box>

          {/* 🔥 REDESIGNED TOTAL SECTION (Statistics)
          <Box
            sx={{
              background: "rgba(248, 250, 252, 0.6)",
              borderRadius: "24px",
              p: { xs: 3, md: 4 },
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 6, md: 10 }}
              justifyContent="center"
              alignItems="center"
            >
              <StatItem
                number={50}
                suffix="+"
                label="Healthcare Organizations"
                icon={<BusinessCenterIcon sx={{ fontSize: 32, color: "#6BBF59" }} />}
              />
              <Box
                sx={{
                  width: { xs: "80%", sm: "1px" },
                  height: { xs: "1px", sm: "50px" },
                  background: "rgba(0,0,0,0.1)",
                }}
              />
              <StatItem
                number={10}
                suffix="M+"
                label="Claims Processed Monthly"
                icon={<ReceiptLongIcon sx={{ fontSize: 32, color: "#4A90E2" }} />}
              />
            </Stack>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem = ({ number, suffix, label, icon }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const count = useCountUp(isInView ? number : 0, 2000);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: false }}
      >
        <Box
          sx={{
            p: 1.5,
            borderRadius: "16px",
            background: "#ffffff",
            mb: 2,
            boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
          }}
        >
          {icon}
        </Box>
      </motion.div>
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{
            color: "#0f172a",
            fontSize: { xs: "2rem", md: "2.5rem" },
            lineHeight: 1,
            mb: 1
          }}
        >
          {Math.floor(count)}
          {suffix}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#475569",
          fontWeight: 600,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          fontSize: "0.75rem",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CTASection;