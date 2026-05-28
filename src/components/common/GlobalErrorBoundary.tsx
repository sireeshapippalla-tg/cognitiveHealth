import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#f8fafc",
            p: 3,
          }}
        >
          <ErrorOutlineIcon
            sx={{ fontSize: 80, color: "var(--color-primary)", mb: 2 }}
          />
          <Typography
            variant="h4"
            fontWeight={800}
            color="var(--color-gray-900)"
            gutterBottom
          >
            Oops! Something went wrong.
          </Typography>
          <Typography
            variant="body1"
            color="var(--color-gray-500)"
            sx={{ mb: 4, maxWidth: 500 }}
          >
            We're sorry, but an unexpected error has occurred. Our team has been
            notified. You can try reloading the page or going back to the home
            page.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={this.handleReload}
              sx={{
                backgroundColor: "var(--color-primary)",
                "&:hover": { backgroundColor: "var(--color-primary-dark)" },
                textTransform: "none",
                borderRadius: "30px",
                px: 4,
                py: 1,
              }}
            >
              Reload Page
            </Button>
            <Button
              variant="outlined"
              onClick={this.handleGoHome}
              sx={{
                color: "var(--color-primary)",
                borderColor: "var(--color-primary)",
                textTransform: "none",
                borderRadius: "30px",
                px: 4,
                py: 1,
              }}
            >
              Go to Home
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
