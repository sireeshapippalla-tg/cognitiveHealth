import { Box, Typography, Container } from "@mui/material";
import { type ReactNode } from "react";
import { motion } from "framer-motion";

import { Section, Inner, Title, Subtitle } from "./FeatureSection.styles";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  background?: string;
  items: FeatureItem[];
  linkText?: string;
  cardVariant?: "default" | "pink";
  columns?: 2 | 3 | 4; // Ignored for timeline layout
  align?: "center" | "left";
  borderRadius?: string;
}

const FeatureSection = ({
  title,
  subtitle,
  background,
  items,
  cardVariant = "default",
  align = "center",
  borderRadius = "0px",
}: FeatureSectionProps) => {
  return (
    <Section background={background} borderRadius={borderRadius}>
      <Inner>
        <Container >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "40px" }}
          >
            <Title align={align} dangerouslySetInnerHTML={{ __html: title }} />
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </motion.div>

          {/* Timeline Container */}
          <Box sx={{ position: "relative", py: 4, }}>
            {/* The Continuous Vertical Line connecting all nodes */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: "40px",
                top: 0,
                width: "3px",
                background:
                  cardVariant === "pink"
                    ? "linear-gradient(to bottom, transparent, #F47A20, #E06912, transparent)"
                    : "linear-gradient(to bottom, transparent, #4A90E2, #6BBF59, transparent)",
                zIndex: 0,
              }}
            />

            {/* Timeline Items */}
            <Box display="flex" flexDirection="column" gap={6}>
              {items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 4, md: 6 },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Glowing Node / Icon on the Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.4,
                    }}
                  >
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: cardVariant === "pink"
                          ? "linear-gradient(135deg, #F47A20 0%, #E06912 100%)"
                          : "linear-gradient(135deg, #4A90E2 0%, #2b568c 100%)",
                        border: "3px solid",
                        borderColor: cardVariant === "pink" ? "rgba(244, 122, 32, 0.2)" : "rgba(74, 144, 226, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow:
                          cardVariant === "pink"
                            ? "0 8px 20px rgba(244, 122, 32, 0.3)"
                            : "0 8px 20px rgba(74, 144, 226, 0.3)",
                        "& img": {
                          width: "28px",
                          height: "28px",
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)", 
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                  </motion.div>

                  {/* Text Content Block */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{ flexGrow: 1, paddingTop: "6px" }}
                  >
                    <Box
                      sx={{
                        background: "transparent",
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                        pb: 3,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1.3rem", md: "1.5rem" },
                          color: "#0f172a",
                          mb: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          color: "#475569",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Inner>
    </Section>
  );
};

export default FeatureSection;
