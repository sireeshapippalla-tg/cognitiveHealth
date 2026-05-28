import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Healthcare from "../../../assets/Platform/ProductIntellijence/Healthcare.svg";
import Architecture from "../../../assets/Platform/ProductIntellijence/Architecture.svg";
import Enterprise from "../../../assets/Platform/ProductIntellijence/Enterprise.svg";
import Compatibility from "../../../assets/Platform/ProductIntellijence/Compatibility.svg";
import {
  SectionWrapper,
  BackgroundGlow,
  Title,
  SubtitleTextStyle,
  CardContainer,
  BackgroundNumber,
  IconWrapper,
  CardTitle,
  CardDescription,
  HighlightText,
} from "./ProductIntelligence.styles";

const productIntelligenceItems = [
  {
    icon: (
      <img
        width={48}
        height={48}
        src={Architecture}
        alt="Architecture"
        loading="lazy"
      />
    ),
    title: "Hybrid AI Models ",
    description:
      "Combines large language models with specialized healthcare domain models trained on claims, physician notes, payer policies and correspondence, and regulatory frameworks, delivering accuracy that generic AI cannot match.",
  },
  {
    icon: (
      <img
        width={48}
        height={48}
        src={Healthcare}
        alt="Healthcare Expertise"
        loading="lazy"
      />
    ),
    title: "Deep Healthcare Domain Knowledge",
    description:
      "Purpose-built for healthcare complexity: 1,200+ payer rules, 20+ EMR integrations, specialty-specific workflows, and continuous regulatory updates, handling what makes healthcare unique.",
  },
  {
    icon: (
      <img
        width={48}
        height={48}
        src={Compatibility}
        alt="Compatibility"
        loading="lazy"
      />
    ),
    title: "Comprehensive Interoperability",
    description:
      "Native support for HL7, FHIR, X12 EDI, and modern APIs. Seamlessly connects with Epic, Cerner, Meditech, athenahealth, NextGen, and 15+ other EMRs plus hundreds of peripheral systems.",
  },
  {
    icon: (
      <img
        width={48}
        height={48}
        src={Enterprise}
        alt="Enterprise Scale"
        loading="lazy"
      />
    ),
    title: "Intelligent Process Orchestration ",
    description:
      "AI agents work together across your entire revenue cycle, sharing insights, coordinating handoffs, and optimizing workflows from patient registration through final payment reconciliation.",
  },
];

const ProductIntelligence = () => {
  return (
    <SectionWrapper>
      {/* Soft background glow */}
      <BackgroundGlow />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Title>
            Enterprise AI Architecture Built for{" "}
            <HighlightText>Healthcare</HighlightText>
          </Title>
          <SubtitleTextStyle>
            Cutting-edge technology designed specifically for the complexity of
            healthcare operations
          </SubtitleTextStyle>
        </motion.div>

        <Grid container spacing={4}>
          {productIntelligenceItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                style={{ height: "100%" }}
              >
                <CardContainer>
                  {/* Huge faint number background */}
                  <BackgroundNumber>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </BackgroundNumber>

                  {/* Icon */}
                  <IconWrapper>{item.icon}</IconWrapper>

                  {/* Content */}
                  <CardTitle variant="h3">{item.title}</CardTitle>

                  <CardDescription>{item.description}</CardDescription>
                </CardContainer>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ProductIntelligence;
