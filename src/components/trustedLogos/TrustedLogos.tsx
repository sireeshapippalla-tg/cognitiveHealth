import React from "react";
import {
  TrustSection,
  LogoScrollWrapper,
  LogoGrid,
  LogoImage,
  TitleMotionWrapper,
  TitleText,
  AnimatedLogoTrack,
  LogoCard,
} from "./TrustedLogos.styles";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface LogoItem {
  src: string;
  alt: string;
}

interface TrustedLogosProps {
  title?: string;
  logos: LogoItem[];
  speed?: number;
}

const TrustedLogos: React.FC<TrustedLogosProps> = ({
  title,
  logos,
  speed = 30,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <TrustSection>
        {title && (
          <TitleMotionWrapper
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Box>
              <TitleText>{title}</TitleText>
            </Box>
          </TitleMotionWrapper>
        )}
        <LogoScrollWrapper>
          <AnimatedLogoTrack speed={speed}>
            {[...Array(2)].map((_, index) => (
              <LogoGrid key={index}>
                {logos.map((logo, i) => (
                  <LogoCard key={i}>
                    <LogoImage
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      width="120"
                      height="40"
                    />
                  </LogoCard>
                ))}
              </LogoGrid>
            ))}
          </AnimatedLogoTrack>
        </LogoScrollWrapper>
      </TrustSection>
    </motion.div>
  );
};

export default TrustedLogos;
