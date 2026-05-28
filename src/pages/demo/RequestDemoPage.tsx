import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/RoutePaths";
import logo from "../../assets/cognitiveLogo.svg";

interface LocationState {
  fromLabel?: string;
  fromPath?: string | number;
}

const RequestDemoPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Get dynamic breadcrumb data from navigation state
  const state = location.state as LocationState | null;
  const fromLabel = state?.fromLabel || "";
  const fromPath = state?.fromPath !== undefined ? state.fromPath : -1;

  // Only show middle breadcrumb if it's a specific page (not Footer/Menu/Home)
  const showMiddleLink =
    fromLabel && !["Home", "Footer", "Menu", "Header"].includes(fromLabel);

  // HubSpot Meeting Link - Uses VITE_HUBSPOT_MEETING_HANDLE from .env
  const meetingHandle = import.meta.env.VITE_HUBSPOT_MEETING_HANDLE;
  const hubspotMeetingUrl = `https://meetings.hubspot.com/${meetingHandle}?embed=true`;

  return (
    <Box
      sx={{
        pt: { xs: 4, md: 5 },
        pb: { xs: 4, md: 5 },
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(55, 125, 255, 0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(0, 196, 140, 0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs sx={{ mb: 4, color: "#64748b" }}>
            <Link
              component={RouterLink}
              to={ROUTES.HOME}
              underline="hover"
              color="inherit"
            >
              Home
            </Link>
            {showMiddleLink && (
              <Link
                onClick={() => {
                  if (typeof fromPath === "number") {
                    navigate(fromPath);
                  } else {
                    navigate(fromPath);
                  }
                }}
                sx={{ cursor: "pointer" }}
                underline="hover"
                color="inherit"
              >
                {fromLabel}
              </Link>
            )}
            <Typography color="text.primary" fontWeight={500}>
              Request a Demo
            </Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box
              component="img"
              src={logo}
              alt="CognitiveHealth Logo"
              sx={{ height: 48, mb: 3, mx: "auto", display: "block" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: "#1e293b",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Schedule Your{" "}
              <Box component="span" sx={{ color: "var(--color-primary)" }}>
                Personalized Demo
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#64748b",
                maxWidth: 700,
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Experience the power of the iCAN™ Platform. Select a date and time
              that works best for you to see our AI integration in action.
            </Typography>
          </motion.div>
        </Box>

        {/* Calendar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Box
            sx={{
              background: "#ffffff",
              borderRadius: "32px",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)",
              border: "1px solid rgba(255,255,255,0.8)",
              overflow: "hidden",
              minHeight: "800px",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "6px",
                background:
                  "linear-gradient(90deg, var(--color-primary), var(--color-green))",
              },
            }}
          >
            <iframe
              src={hubspotMeetingUrl}
              width="100%"
              height={isMobile ? "700" : "800"}
              frameBorder="0"
              style={{ border: "none" }}
              title="HubSpot Meetings"
            />
          </Box>
        </motion.div>

        {/* Footer Note */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            By scheduling a demo, you agree to our Terms of Service and Privacy
            Policy.
            <br />
            Need help? Contact us at support@cognitivehealthit.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RequestDemoPage;
