import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  BackgroundAura,
  SectionTitle,
  ContentBox,
  DecoratorLine,
  ItalicText,
  StyledContainer,
} from "./WhoWeAre.style";

const WhoWeAreSection: React.FC = () => {
  return (
    <SectionWrapper>
      {/* PREMIUM BACKGROUND: Subtle Animated Aura */}
      <BackgroundAura
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <StyledContainer
        maxWidth="md"
      >
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle variant="h2">Who We Are</SectionTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ContentBox>
              <p>
                CognitiveHealth is dedicated to
                solving the toughest operational challenges in healthcare
                revenue cycle management through intelligent automation. We
                combine deep expertise with advanced technology to deliver
                measurable, sustainable results for health systems, physician
                groups, and specialty providers.
              </p>
              <p>
                Founded by revenue cycle leaders who experienced firsthand the
                inefficiencies and complexity of managing healthcare financial
                operations, we understand that technology must serve people,
                workflows, and outcomes—not the other way around.
              </p>
              <DecoratorLine />
              <ItalicText>
                Our approach is grounded in operational excellence, continuous
                improvement, and partnership. We work alongside healthcare
                organizations to automate repetitive tasks, reduce errors, and
                empower teams to focus on strategic, high-value work that drives
                financial performance and supports exceptional patient care.
              </ItalicText>
            </ContentBox>
          </motion.div>
        </Box>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default WhoWeAreSection;
