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
      <NewsletterWrapper>
        <Title variant="h3">See What Autonomous RCM Can Do For You</Title>
        <Subtitle>
          Join leading healthcare organizations transforming their revenue cycle
          with AI.
        </Subtitle>
        <ButtonContainer>
          <PrimaryButton
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/contact-us")}
          >
            Request a Demo
          </PrimaryButton>
          <SecondaryButton endIcon={<ArrowForwardIcon />}>
            See Platform in Action
          </SecondaryButton>
        </ButtonContainer>
      </NewsletterWrapper>
    </Container>
  );
};

export default NewsletterSection;
