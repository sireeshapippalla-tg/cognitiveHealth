import { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Integration from "../../../assets/Platform/Enterprise/Integration.svg";
import Connectivity from "../../../assets/Platform/Enterprise/Connectivity.svg";
import API from "../../../assets/Platform/Enterprise/API.svg";
import Deployement from "../../../assets/Platform/Enterprise/Deployement.svg";
import {
  SectionWrapper,
  HeaderTitle,
  HeaderSubtitle,
  NavigationContainer,
  NavItemWrapper,
  NavIconBox,
  NavItemTitle,
  ActiveIndicator,
  DisplayStageBox,
  FaintIconBox,
  StageIconBox,
  StageTitle,
  StageDescription,
  HighlightText,
} from "./EnterpriseReadinessSection.styles";

const EnterpriseReadinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const enterpriseItems = [
    {
      icon: (
        <img
          width={48}
          height={48}
          src={Integration}
          alt="Integration"
          loading="lazy"
        />
      ),
      title: "Proven at Enterprise Scale",
      description:
        "Deployed across health systems processing 10M+ transactions monthly. Handles multiple facilities, diverse payer portfolios, varied specialties, and constantly evolving regulations simultaneously.",
    },
    {
      icon: (
        <img
          width={48}
          height={48}
          src={Deployement}
          alt="Deployment"
          loading="lazy"
        />
      ),
      title: "Security & Compliance First",
      description:
        "HITRUST CSF, SOC 2 Type II, with 95% uptime. Enterprise-grade encryption, role-based access controls, and comprehensive audit logging ensure your data stays secure.",
    },
    {
      icon: (
        <img
          width={48}
          height={48}
          src={Connectivity}
          alt="Connectivity"
          loading="lazy"
        />
      ),
      title: "Flexible Deployment Options",
      description:
        "Cloud-hosted (multi-tenant or single-tenant), private cloud deployment. Choose the option that fits your organization's security, compliance, and infrastructure requirements.",
    },
    {
      icon: <img width={48} height={48} src={API} alt="API" loading="lazy" />,
      title: "White-Glove Enterprise Support ",
      description:
        "Dedicated Customer Success Manager, 24/7/365 technical support with <15min response times, quarterly business reviews, and on-site training for large deployments.",
    },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <HeaderTitle>
            Built for Scale, Security, and{" "}
            <HighlightText>Reliability</HighlightText>
          </HeaderTitle>
          <HeaderSubtitle>
            Enterprise-grade infrastructure trusted by organizations processing
            billions in annual revenue
          </HeaderSubtitle>
        </motion.div>

        {/* Interactive Interactive Stage */}
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE: Navigation List */}
          <Grid size={{ xs: 12, md: 5 }}>
            <NavigationContainer>
              {enterpriseItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <NavItemWrapper isActive={isActive}>
                      {/* Small Icon */}
                      <NavIconBox isActive={isActive}>{item.icon}</NavIconBox>

                      {/* Title */}
                      <NavItemTitle isActive={isActive}>
                        {item.title}
                      </NavItemTitle>

                      {/* Active Indicator Line */}
                      {isActive && (
                        <ActiveIndicator layoutId="activeIndicator" />
                      )}
                    </NavItemWrapper>
                  </motion.div>
                );
              })}
            </NavigationContainer>
          </Grid>

          {/* RIGHT SIDE: Massive Display Stage */}
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ height: "100%" }}
              >
                <DisplayStageBox>
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    {/* Massive Faint Icon in Background */}
                    <FaintIconBox>
                      {enterpriseItems[activeIndex].icon}
                    </FaintIconBox>

                    {/* Stage Presentation Icon */}
                    <StageIconBox>
                      {enterpriseItems[activeIndex].icon}
                    </StageIconBox>

                    {/* Stage Presentation Text */}
                    <StageTitle>
                      {enterpriseItems[activeIndex].title}
                    </StageTitle>

                    <StageDescription>
                      {enterpriseItems[activeIndex].description}
                    </StageDescription>
                  </Box>
                </DisplayStageBox>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default EnterpriseReadinessSection;
