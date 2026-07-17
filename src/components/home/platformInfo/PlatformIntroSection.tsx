import {
  Section,
  Glow,
  StyledContainer,
  MotionWrapper,
  Badge,
  BadgeText,
  Title,
  Highlight,
  Break,
  NormalText,
  Subtitle,
} from "./PlatformIntroSection.style";

const PlatformIntroSection = () => {
  return (
    <Section>
      <Glow />

      <StyledContainer maxWidth="lg">
        {/* Badge */}
        <MotionWrapper
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Badge>
            <BadgeText>
              The Future of Healthcare Revenue Cycle Is Here – Unified, Smarter,
              Better
            </BadgeText>
          </Badge>
        </MotionWrapper>

        {/* Title */}
        <MotionWrapper
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Title>
            <Highlight>CognitiveHealth’s iCAN™ ONE &nbsp;</Highlight>
            <Break />
            <NormalText>
              Platform: Where Deep RCM Expertise Meets Advanced AI
            </NormalText>
          </Title>
        </MotionWrapper>

        {/* Subtitle */}
        <MotionWrapper
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Subtitle>
            Decades of revenue cycle leadership across hospital systems,
            specialty practices, behavior health, long term services and
            supports, combined with cutting-edge intelligent automation, machine
            learning, generative AI, and enterprise-grade infrastructure,
            purpose-built to solve your toughest operational challenges.
          </Subtitle>
        </MotionWrapper>
      </StyledContainer>
    </Section>
  );
};

export default PlatformIntroSection;
