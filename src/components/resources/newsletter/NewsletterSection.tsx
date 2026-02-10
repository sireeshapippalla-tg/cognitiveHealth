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

const NewsletterSection = () => {
  return (
    <Container maxWidth="lg">
      <NewsletterWrapper>
        <Title variant="h3">
          See What Autonomous RCM Can Do For You
        </Title>
        <Subtitle>
          Join leading healthcare organizations transforming their revenue cycle
          with AI.
        </Subtitle>
        <ButtonContainer>
          <PrimaryButton endIcon={<ArrowForwardIcon />}>
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
