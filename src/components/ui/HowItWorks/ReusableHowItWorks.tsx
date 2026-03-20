import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, Button } from "@mui/material";
import { SectionTitle } from "../sectionTitle/SectionTitle";

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ReusableHowItWorksProps {
  title?: string;
  subtitle?: string;
  pillIcon?: string;
  pillText?: string;
  steps: HowItWorksStep[];
  ctaText?: string;
  onCtaClick?: () => void;
  themeColor?: string;
  backgroundColor?: string;
}

export const ReusableHowItWorks: React.FC<ReusableHowItWorksProps> = ({
  title = "How It Works",
  subtitle,
  pillIcon,
  pillText,
  steps,
  ctaText,
  onCtaClick,
  themeColor = "#F47A20",
  backgroundColor = "#f9fafb",
}) => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 8 }, background: backgroundColor }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          {pillText ? (
            <SectionTitle
              pillIcon={pillIcon}
              pillText={pillText}
              title={title}
              subtitle={subtitle}
              align="center"
              maxWidth={700}
            />
          ) : (
            <>
              <Typography
                variant="h4"
                align="center"
                fontWeight={700}
                mb={2}
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  lineHeight: 1.3,
                  color: "#111827"
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  align="center"
                  sx={{ color: "#4B5563", maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}
                >
                  {subtitle}
                </Typography>
              )}
            </>
          )}
        </Box>

        {/* Timeline */}
        <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "35px", md: "50%" },
              top: 0,
              bottom: 0,
              transform: { xs: "none", md: "translateX(-50%)" },
              width: "3px",
              background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.1) 90%, transparent)",
            }}
          />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Box 
                key={index}
                sx={{ 
                  display: "flex", 
                  justifyContent: { xs: "flex-start", md: isLeft ? "flex-start" : "flex-end" },
                  mb: { xs: 8, md: 10 },
                  position: "relative"
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ width: "100%" }}
                >
                  <Box sx={{ 
                    width: { xs: "100%", md: "50%" },
                    ml: { xs: 0, md: isLeft ? 0 : "auto" },
                    mr: { xs: 0, md: isLeft ? "auto" : 0 },
                    position: "relative",
                  }}>
                    <Box sx={{ 
                      pl: { xs: "80px", md: isLeft ? 0 : "50px" },
                      pr: { xs: 0, md: isLeft ? "50px" : 0 },
                      textAlign: { xs: "left", md: isLeft ? "right" : "left" },
                    }}>
                      {/* Icon - Positioned on the line */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0",
                          left: { xs: "0px", md: isLeft ? "auto" : "-35px" },
                          right: { xs: "auto", md: isLeft ? "-35px" : "auto" },
                          width: 70,
                          height: 70,
                          borderRadius: "50%",
                          background: themeColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          zIndex: 2,
                          boxShadow: `0 10px 25px ${themeColor}4D`, // 30% opacity
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                          "& svg": { fontSize: "2rem" }
                        }}
                      >
                        {step.icon}
                      </Box>

                      <Typography variant="h5" fontWeight={700} sx={{ 
                        color: "#111827", 
                        mb: 1.5,
                        fontSize: { xs: "1.25rem", md: "1.5rem" }
                      }}>
                        {step.title}
                      </Typography>

                      <Typography sx={{ 
                        color: "#4B5563", 
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        lineHeight: 1.6,
                        maxWidth: { xs: "100%", md: "380px" },
                        ml: { xs: 0, md: isLeft ? "auto" : 0 }
                      }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            );
          })}
        </Box>

        {/* CTA */}
        {ctaText && onCtaClick && (
          <Box textAlign="center" mt={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                sx={{
                  px: 5,
                  py: 1.6,
                  borderRadius: "40px",
                  fontWeight: "bold",
                  textTransform: "none",
                  background: themeColor,
                  color: "white",
                  boxShadow: `0 10px 25px ${themeColor}4D`,
                  "&:hover": {
                    background: themeColor,
                    filter: "brightness(0.9)"
                  }
                }}
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  );
};
