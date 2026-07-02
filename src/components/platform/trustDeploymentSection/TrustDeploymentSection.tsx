import { useState } from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ImplementationGuideModal from "./ImplementationGuideModal";
import {
  TrustDeploymentWrapper,
  ContentWrapper,
  RelativeBox,
  TrustDeploymentTitle,
  GradientSpan,
  GridContainer,
  QuoteBox,
  QuoteMark,
  QuoteText,
  QuoteAuthor,
  ChecklistContainer,
  ChecklistItem,
  CheckIconStyled,
  ChecklistText,
  CTAWrapper,
  ArrowIconStyled,
  ImplementationButton,
} from "./trustDeployment.style";

const TrustDeploymentSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.4 },
    },
  };

  return (
    <TrustDeploymentWrapper>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContentWrapper>
            <RelativeBox>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div variants={itemVariants}>
                  <TrustDeploymentTitle>
                    One platform. One vendor.{" "}
                    <GradientSpan>
                      One source of truth.
                    </GradientSpan>
                  </TrustDeploymentTitle>
                </motion.div>

                <GridContainer>
                  {/* LEFT SIDE: Quote */}
                  <motion.div variants={itemVariants}>
                    <QuoteBox>
                      <QuoteMark>
                        "
                      </QuoteMark>
                      <QuoteText>
                        Processing millions of claims across 12 facilities with
                        zero disruption — CognitiveHealth scales with our
                        growth.
                      </QuoteText>
                      <QuoteAuthor>
                        — VP Revenue Cycle, 4000-bed health system
                      </QuoteAuthor>
                    </QuoteBox>
                  </motion.div>

                  {/* RIGHT SIDE: Checklist */}
                  <motion.div variants={itemVariants}>
                    <ChecklistContainer>
                      {[
                        "20+ EMR Integrations",
                        "Pre-built Connectors",
                        "HL7, FHIR, API Ready",
                        "Operational in 4–6 Weeks",
                      ].map((item, index) => (
                        <ChecklistItem key={index}>
                          <CheckIconStyled />
                          <ChecklistText>
                            {item}
                          </ChecklistText>
                        </ChecklistItem>
                      ))}
                    </ChecklistContainer>
                  </motion.div>
                </GridContainer>

                {/* CTA BUTTON */}
                <motion.div variants={itemVariants}>
                  <CTAWrapper>
                    <ImplementationButton
                      endIcon={
                        <ArrowIconStyled />
                      }
                      onClick={() => setOpenModal(true)}
                    >
                      Learn About Our Implementation Process
                    </ImplementationButton>
                  </CTAWrapper>
                </motion.div>
              </motion.div>
            </RelativeBox>
          </ContentWrapper>
        </motion.div>
      </Container>

      <ImplementationGuideModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </TrustDeploymentWrapper>
  );
};

export default TrustDeploymentSection;

