
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

import {
  Wrapper,
  Card,
  ErrorCode,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
} from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card>
        <ErrorCode>404</ErrorCode>

        <Title>Page Not Found</Title>

        <Description>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </Description>

        <Actions>
          <PrimaryButton
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
          >
            Go to Home
          </PrimaryButton>

          <SecondaryButton
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Go Back
          </SecondaryButton>
        </Actions>
      </Card>
    </Wrapper>
  );
};

export default NotFoundPage;
