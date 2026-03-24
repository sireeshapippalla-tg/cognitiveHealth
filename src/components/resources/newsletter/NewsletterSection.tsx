import { Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  NewsletterWrapper,
  Title,
  Subtitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from "./NewsletterSection.styles";
import { useNavigate } from "react-router-dom";

const NewsletterSection = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <NewsletterWrapper
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title variant="h3">See What Autonomous RCM Can Do For You</Title>
        <Subtitle>
          Join leading healthcare organizations transforming their revenue cycle
          with AI. Experience the future of medical billing efficiency.
        </Subtitle>
        <ButtonContainer>
          <PrimaryButton
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/contact-us")}
          >
            Request a Demo
          </PrimaryButton>
          <SecondaryButton endIcon={<ArrowForwardIcon />} onClick={() => navigate("/resources#videos")}>
            See Platform in Action
          </SecondaryButton>
        </ButtonContainer>
      </NewsletterWrapper>
    </Container>
  );
};

export default NewsletterSection;
