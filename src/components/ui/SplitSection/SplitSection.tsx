import { Box, Typography, Button, Container, Grid } from "@mui/material";
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
        px: { xs: 3, md: 0 },
        py: padding ? padding : { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fff 0%, #F9FAFB 100%)",
      }}
    >
      {/* PREMIUM BACKGROUND ELEMENTS */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: reverse ? "70%" : "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(244, 122, 32, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" direction={reverse ? "row-reverse" : "row"}>
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
                  transition: { staggerChildren: 0.1, duration: 0.6 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "#F47A20",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    mb: 2,
                    fontSize: "0.8rem"
                  }}
                >
                  {eyebrow}
                </Typography>
                <Typography
                  variant="h1"
                  fontWeight={900}
                  sx={{
                    fontSize: { xs: "1.8rem", md: "3.2rem" },
                    color: "#111827",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    mb: 3
                  }}
                >
                  {title}
                </Typography>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  sx={{
                    color: "#4B5563",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    mb: 4,
                    fontWeight: 500,
                    maxWidth: "500px"
                  }}
                >
                  {description}
                </Typography>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {primaryAction && (
                    <Button
                      variant="contained"
                      onClick={primaryAction.onClick}
                      sx={{
                        px: 4,
                        py: 1.8,
                        borderRadius: "50px",
                        fontWeight: 900,
                        textTransform: "none",
                        background: "#F47A20",
                        fontSize: "0.95rem",
                        boxShadow: "0 15px 30px rgba(244,122,32,0.3)",
                        "&:hover": { background: "#e65a00" }
                      }}
                    >
                      {primaryAction.label}
                    </Button>
                  )}
                  {secondaryAction && (
                    <Button
                      variant="outlined"
                      onClick={secondaryAction.onClick}
                      sx={{
                        px: 4,
                        py: 1.8,
                        borderRadius: "50px",
                        fontWeight: 900,
                        textTransform: "none",
                        borderColor: "rgba(244, 122, 32, 0.4)",
                        color: "#F47A20",
                        fontSize: "0.95rem",
                        borderWidth: "2px",
                        "&:hover": { 
                          borderWidth: "2px", 
                          borderColor: "#F47A20",
                          background: "rgba(244, 122, 32, 0.05)"
                        }
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      {secondaryAction.label}
                    </Button>
                  )}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* VISUAL SIDE: Non-Boxed, Organic Image Presentation */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            >
              <Box sx={{ position: "relative" }}>
                 {/* Decorative background accent behind image */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   style={{
                     position: "absolute",
                     top: "-15%",
                     left: "-15%",
                     width: "130%",
                     height: "130%",
                     border: "1px dashed rgba(107, 191, 89, 0.15)",
                     borderRadius: "35%",
                     zIndex: -1
                   }}
                 />

                 <Box sx={{ 
                   borderRadius: "32px",
                   overflow: "hidden",
                   boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                   transform: `perspective(1000px) rotateY(${reverse ? '3deg' : '-3deg'})`,
                   background: "#fff"
                 }}>
                   <img 
                     src={image} 
                     alt="Visual" 
                     style={{ 
                       width: "100%", 
                       height: "auto", 
                       display: "block"
                     }} 
                   />
                 </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SplitSection;
