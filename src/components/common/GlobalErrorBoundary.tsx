import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import {
  ErrorContainer,
  ErrorIcon,
  Heading,
  MessageText,
  ButtonWrapper,
  ReloadButton,
  HomeButton,
} from "./GlobalErrorBoundary.style";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Here you could send the error to a service like Sentry
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon />
          <Heading
            variant="h4"
            gutterBottom
          >
            Oops! Something went wrong.
          </Heading>
          <MessageText
            variant="body1"
          >
            We're sorry, but an unexpected error has occurred. Our team has been
            notified. You can try reloading the page or going back to the home
            page.
          </MessageText>
          <ButtonWrapper>
            <ReloadButton
              variant="contained"
              onClick={this.handleReload}
            >
              Reload Page
            </ReloadButton>
            <HomeButton
              variant="outlined"
              onClick={this.handleGoHome}
            >
              Go to Home
            </HomeButton>
          </ButtonWrapper>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
