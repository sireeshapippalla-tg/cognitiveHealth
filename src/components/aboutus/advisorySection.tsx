import { Box, useTheme, useMediaQuery } from "@mui/material";
import type { Advisor } from "../ui/advisoryCard/advisoryCard";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  BackgroundDecoration,
  HeaderBox,
  SectionTitle,
  SectionSubtitle,
  AdvisorsContainer,
  AdvisorCardWrapper,
  AdvisorAvatar,
  AdvisorName,
  AdvisorRole,
  AdvisorDescription,
  StyledContainer,
} from "./AdvisorySection.style";

const advisoryData: Advisor[] = [
  {
    id: 1,
    name: "David Wurcel",
    role: "Executive Advisor – Provider Market",
    description:
      "David has over 30 years of experience in healthcare leadership and advisory roles. He brings deep expertise in provider operations, strategic growth, and healthcare transformation initiatives.",
  },
  {
    id: 2,
    name: "Michael M Dudley",
    role: "Executive Advisor – Payer Industry",
    description:
      "Michael has extensive experience in the payer and healthcare insurance industry. He has held senior leadership roles and provides strategic guidance on payer operations and healthcare policy environments.",
  },
  {
    id: 3,
    name: "Ali Pabrai",
    role: "Executive Advisor – Compliance and Security",
    description:
      "Ali is a recognized expert in cybersecurity, compliance, and risk management. He advises CognitiveHealth on healthcare security standards, regulatory compliance, and enterprise risk mitigation.",
  },
];

const AdvisorySection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionWrapper>
      <BackgroundDecoration />

      <StyledContainer maxWidth="lg">
        <HeaderBox>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <SectionTitle variant="h3">Advisory Team</SectionTitle>
            <SectionSubtitle>
              Our advisors are well-known thought leaders drawn from the
              healthcare industry.
            </SectionSubtitle>
          </motion.div>
        </HeaderBox>

        <AdvisorsContainer>
          {advisoryData.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <AdvisorCardWrapper isMobile={isMobile}>
                <AdvisorAvatar className="advisor-avatar">
                  {advisor.name.charAt(0)}
                </AdvisorAvatar>

                <Box>
                  <AdvisorName className="advisor-name" variant="h4">
                    {advisor.name}
                  </AdvisorName>
                  <AdvisorRole isMobile={isMobile}>{advisor.role}</AdvisorRole>
                  <AdvisorDescription>{advisor.description}</AdvisorDescription>
                </Box>
              </AdvisorCardWrapper>
            </motion.div>
          ))}
        </AdvisorsContainer>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default AdvisorySection;
