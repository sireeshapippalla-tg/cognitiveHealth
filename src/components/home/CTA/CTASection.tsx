import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  Card,
  CtaTrustText,
  Glow,
  MotionWrapper,
  PrimaryButton,
  SecondaryButton,
  Section,
  StyledContainer,
  Subtitle,
  Title,
} from "./CallToActionSection.styles";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <StyledContainer maxWidth="lg">
        <Card>
          <Glow />

          {/* Title */}

          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>Ready to Experience the CognitiveHealth Difference?</Title>
          </MotionWrapper>

          {/* Subtitle */}

          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Subtitle>
              See how our healthcare expertise, advanced AI technology, and
              partnership approach can transform your revenue cycle operations.
            </Subtitle>
          </MotionWrapper>
          {/* Buttons */}

          <ButtonWrapper>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PrimaryButton
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact-us")}
              >
                Request a Demo
              </PrimaryButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <SecondaryButton
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/resources#videos")}
              >
                See Platform in Action
              </SecondaryButton>
            </motion.div>
          </ButtonWrapper>
          <CtaTrustText>
            Join 50+ healthcare organizations who trust CognitiveHealth to
            process 10M+ claims monthly.
          </CtaTrustText>
        </Card>
      </StyledContainer>
    </Section>
  );
};

export default CTASection;
