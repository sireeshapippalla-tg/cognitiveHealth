import { Box, Typography, Button, Grid } from "@mui/material";
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
        px: { sm: 2, md: "30px" },
        py: padding ? padding : { sm: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        background: "#F9FAFB",
      }}
    >
      {/* PREMIUM BACKGROUND ELEMENTS */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          background: "radial-gradient(circle, #F47A20, transparent)",
          filter: "blur(100px)",
          top: "-60px",
          left: "-60px",
          opacity: 0.15,
        }}
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          background: "radial-gradient(circle, #6BBF59, transparent)",
          filter: "blur(100px)",
          bottom: "-60px",
          right: "-60px",
          opacity: 0.15,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          padding: { xs: "20px", md: "30px 60px" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          direction={reverse ? "row-reverse" : "row"}
        >
          {/* TEXT CONTENT: High Typography Control */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: reverse ? 30 : -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { staggerChildren: 0.1, duration: 0.6 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Typography
                  fontWeight="bold"
                  sx={{
                    display: "inline-block",
                    color: "#1F2937",
                    // lineHeight: 1.2,
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.2 },
                    mb: 1,

                    fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                  }}
                >
                  {eyebrow}
                </Typography>
                {title && (
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                      // lineHeight: 1.2,
                      lineHeight: { xs: 1.3, sm: 1.3, md: 1.2 },
                      // letterSpacing: "-0.02em",
                      mb: 2.5,
                      color: "#1F2937",
                    }}
                  >
                    {title}
                  </Typography>
                )}
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    mb: 4,
                    maxWidth: "550px",
                  }}
                >
                  {description}
                </Typography>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {primaryAction && (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={primaryAction.onClick}
                        sx={{
                          // px: 4,
                          // py: 1.5,
                          px: { xs: 3, sm: 4, md: 4 },
                          py: { xs: 1.2, sm: 1.4, md: 1.5 },
                          borderRadius: "40px",
                          fontWeight: "bold",
                          textTransform: "none",
                          position: "relative",
                          overflow: "hidden",
                          background: "#F47A20",
                          fontSize: "1rem",
                          boxShadow: "0 10px 20px rgba(244,122,32,0.2)",
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
                        {primaryAction.label}
                      </Button>
                    </motion.div>
                  )}
                  {secondaryAction && (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        variant="outlined"
                        onClick={secondaryAction.onClick}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          // px: 4,
                          // py: 1.5,
                          px: { xs: 3, sm: 4, md: 4 },
                          py: { xs: 1.2, sm: 1.4, md: 1.5 },
                          borderRadius: "40px",
                          textTransform: "none",
                          fontWeight: 600,
                          borderColor: "#F47A20",
                          color: "#F47A20",
                          fontSize: "1rem",
                          "&:hover": {
                            background: "rgba(107,191,89,0.05)",
                            borderColor: "#F47A20",
                          },
                        }}
                      >
                        {secondaryAction.label}
                      </Button>
                    </motion.div>
                  )}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* VISUAL SIDE: Depth Presentation */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: reverse ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ rotate: 1 }}
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
                  alt="Visual"
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* 🔥 GRADIENT ANIMATION KEYFRAMES */}
      <style>
        {`
        @keyframes gradientMove {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
        `}
      </style>
    </Box>
  );
};

export default SplitSection;
