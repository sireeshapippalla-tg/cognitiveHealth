import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  BackgroundAbstract,
  SectionTitle,
  SectionDescription,
  DecoratorLine,
  FeatureCard,
  IconContainer,
  FeatureTitle,
  FeatureDescription,
  StyledContainer,
  FeatureListWrapper,
} from "./WhyExistSection.style";

const features = [
  {
    icon: <ErrorOutlineIcon />,
    title: "Operational Complexity",
    description:
      "Healthcare revenue cycle operations involve countless manual tasks, exceptions, and edge cases that slow down teams and increase costs.",
  },
  {
    icon: <StorageOutlinedIcon />,
    title: "Fragmented Systems and Data",
    description:
      "Disconnected systems, inconsistent data formats, and lack of integration create inefficiencies and limit visibility across the revenue cycle.",
  },
  {
    icon: <PeopleOutlineIcon />,
    title: "Staffing Shortages",
    description:
      "Healthcare organizations face persistent challenges recruiting and retaining skilled revenue cycle staff, making automation critical.",
  },
  {
    icon: <TrendingDownIcon />,
    title: "Rising Costs and Slower Cash Flow",
    description:
      "Manual processes, errors, and delays lead to higher operating costs, extended AR days, and reduced cash flow performance.",
  },
];

const WhyWeExistSection = () => {
  return (
    <SectionWrapper>
      <BackgroundAbstract />

      <StyledContainer maxWidth="lg">
        <Grid container spacing={10} alignItems="center">
          {/* LEFT: CONTENT FOCUS */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle variant="h2">Why We Exist</SectionTitle>
              <SectionDescription>
                Healthcare organizations face unprecedented operational
                challenges that traditional approaches cannot solve.
                CognitiveHealth exists to address these critical pain points:
              </SectionDescription>
              <DecoratorLine />
            </motion.div>
          </Grid>

          {/* RIGHT: UNIQUE FEATURE FLOW */}
          <Grid size={{ xs: 12, md: 7 }}>
            <FeatureListWrapper>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard>
                    <IconContainer>{feature.icon}</IconContainer>
                    <Box>
                      <FeatureTitle variant="h5">{feature.title}</FeatureTitle>
                      <FeatureDescription>
                        {feature.description}
                      </FeatureDescription>
                    </Box>
                  </FeatureCard>
                </motion.div>
              ))}
            </FeatureListWrapper>
          </Grid>
        </Grid>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default WhyWeExistSection;
