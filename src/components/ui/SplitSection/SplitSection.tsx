import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

interface Action {
  label: string;
  onClick?: () => void;
}

interface SplitSectionProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  reverse?: boolean;
  primaryAction?: Action;
  secondaryAction?: Action;
  padding?: string;
}

const SplitSection = ({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
  primaryAction,
  secondaryAction,
  padding,
}: SplitSectionProps) => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: padding ? padding : 12,
        position: "relative",
        overflow: "hidden",
        background: "#F9FAFB",
      }}
    >
      {/* 🔥 FLOATING BACKGROUND BLOBS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          background: "radial-gradient(circle, #F47A20, transparent)",
          filter: "blur(120px)",
          top: "-80px",
          left: reverse ? "auto" : "-80px",
          right: reverse ? "-80px" : "auto",
          opacity: 0.2,
        }}
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          background: "radial-gradient(circle, #6BBF59, transparent)",
          filter: "blur(120px)",
          bottom: "-80px",
          right: reverse ? "auto" : "-80px",
          left: reverse ? "-80px" : "auto",
          opacity: 0.2,
        }}
      />

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ order: reverse ? 2 : 1 }}
        >
          {eyebrow && (
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mb: title ? 1 : 3,
                color: "#1F2937",
               
           
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            lineHeight: 1.3,
      
              }}
            >
              {eyebrow}
            </Typography>
          )}

          {title && (
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mb: 3,
                lineHeight: 1.2,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
              }}
            >
              {title}
            </Typography>
          )}

          {description && (
            <Typography
              sx={{
                color: "#6B7280",
                mb: 5,
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              {description}
            </Typography>
          )}

          {/* BUTTONS */}
          {(primaryAction || secondaryAction) && (
            <Box display="flex" gap={2} flexWrap="wrap">
              {primaryAction && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 5,
                      py: 1.6,
                      borderRadius: "40px",
                      fontWeight: "bold",
                      textTransform: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F47A20",
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
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                  </Button>
                </motion.div>
              )}

              {secondaryAction && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={secondaryAction.onClick}
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
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
                    {secondaryAction.label}
                  </Button>
                </motion.div>
              )}
            </Box>
          )}
        </motion.div>

        {/* IMAGE (3D DASHBOARD EFFECT) */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ rotate: 1 }}
          style={{ order: reverse ? 1 : 2 }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              transform: "perspective(1000px) rotateX(3deg)",
            }}
          >
            <img
              src={image}
              alt="Section Visual"
              style={{ width: "100%", display: "block" }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default SplitSection;
