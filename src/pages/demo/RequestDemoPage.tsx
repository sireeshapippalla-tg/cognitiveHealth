import React from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ROUTES } from "../../routes/RoutePaths";
import logo from "../../assets/cognitiveLogo.svg";
import SEO from "../../components/SEO";
import { getBaseUrl } from "../../utils/urlHelper";
import {
  PageWrapper,
  GlowOrbOne,
  GlowOrbTwo,
  StyledContainer,
  StyledBreadcrumbs,
  BreadcrumbLink,
  HeaderBox,
  HeaderLogo,
  HeroTitle,
  HeroDescription,
  FooterBox,
  FooterNoteText,
  UnifiedDemoCard,
  ContactPane,
  CalendarPane,
  ContactItem,
  ContactLabel,
  ContactValue,
} from "./RequestDemoPage.style";

interface LocationState {
  fromLabel?: string;
  fromPath?: string | number;
}

const RequestDemoPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [iframeLoading, setIframeLoading] = React.useState(true);

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

  const baseUrl = getBaseUrl();
  const demoSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request a Demo | CognitiveHealth",
    description: "Schedule your personalized demo of the iCAN™ Platform.",
    url: `${baseUrl}/request-demo`,
  };

  return (
    <PageWrapper>
      <SEO
        title="Request a Demo"
        description="Schedule a personalized demo of the CognitiveHealth iCAN™ Platform."
        schema={demoSchema}
      />
      {/* Decorative background elements */}
      <GlowOrbOne />
      <GlowOrbTwo />

      <StyledContainer maxWidth="lg">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledBreadcrumbs>
            <BreadcrumbLink
              component={RouterLink}
              to={ROUTES.HOME}
              underline="hover"
              color="inherit"
            >
              Home
            </BreadcrumbLink>
            {showMiddleLink && (
              <BreadcrumbLink
                onClick={() => {
                  if (typeof fromPath === "number") {
                    navigate(fromPath);
                  } else {
                    navigate(fromPath);
                  }
                }}
                underline="hover"
                color="inherit"
              >
                {fromLabel}
              </BreadcrumbLink>
            )}
            <Typography color="text.primary" fontWeight={500}>
              Request a Demo
            </Typography>
          </StyledBreadcrumbs>
        </motion.div>

        {/* Header Section */}
        <HeaderBox>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeaderLogo
              src={logo}
              alt="CognitiveHealth Logo"
            />
            <HeroTitle variant="h2">
              Schedule Your{" "}
              {/* <PrimaryHighlightSpan> */}
              Personalized Demo
              {/* </PrimaryHighlightSpan> */}
            </HeroTitle>
            <HeroDescription variant="h6">
              Experience the power of the iCAN™ Platform. Select a date and time that works best for you to see the platform in action.
            </HeroDescription>
          </motion.div>
        </HeaderBox>

        {/* Calendar and Contact Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <UnifiedDemoCard>
            <Grid container alignItems="stretch">
              {/* Contact Details (Left Column) */}
              <Grid size={{ xs: 12, md: 5 }}>
                <ContactPane>
                  <Box>
                    <Typography variant="h5" fontWeight={800} color="#1e293b" sx={{ mb: 2 }}>
                      Contact Details
                    </Typography>
                    <Typography variant="body2" color="#64748b" sx={{ mb: 4, lineHeight: 1.6 }}>
                      Have questions about our AI-powered RCM solutions? Reach out to us directly or schedule a meeting.
                    </Typography>

                    <Stack spacing={3}>
                      <ContactItem>
                        <EmailIcon />
                        <Box>
                          <ContactLabel>Email Us</ContactLabel>
                          <ContactValue>
                            <a href="mailto:Info@CognitiveHelathit.com">Info@CognitiveHelathit.com</a>
                          </ContactValue>
                        </Box>
                      </ContactItem>

                      <ContactItem>
                        <PhoneIcon />
                        <Box>
                          <ContactLabel>Call Us</ContactLabel>
                          <ContactValue>
                            <a href="tel: +1 6467015030"> +1 6467015030</a>
                          </ContactValue>
                        </Box>
                      </ContactItem>

                      <ContactItem>
                        <LocationOnIcon />
                        <Box>
                          <ContactLabel>Our Office</ContactLabel>
                          <ContactValue>
                            CognitiveHealth Technologies LLC<br />
                            1345 Avenue of the Americas,<br />
                            New York, NY 10105
                          </ContactValue>
                        </Box>
                      </ContactItem>
                    </Stack>
                  </Box>
                </ContactPane>
              </Grid>

              {/* Calendar (Right Column) */}
              <Grid size={{ xs: 12, md: 7 }}>
                <CalendarPane>
                  {iframeLoading && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                        background: "#ffffff",
                        minHeight: isMobile ? "700px" : "800px",
                      }}
                    >
                      <CircularProgress color="primary" />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Loading scheduling calendar...
                      </Typography>
                    </Box>
                  )}
                  <iframe
                    src={hubspotMeetingUrl}
                    width="100%"
                    height={isMobile ? "700" : "800"}
                    frameBorder="0"
                    title="HubSpot Meetings"
                    onLoad={() => setIframeLoading(false)}
                    style={{
                      opacity: iframeLoading ? 0 : 1,
                      transition: "opacity 0.3s ease",
                      display: "block",
                      border: "none",
                      width: "100%",
                    }}
                  />
                </CalendarPane>
              </Grid>
            </Grid>
          </UnifiedDemoCard>
        </motion.div>


        {/* Footer Note */}
        <FooterBox>
          <FooterNoteText variant="body2">
            By scheduling a demo, you agree to our Terms of Service and Privacy
            Policy.
            <br />
            Need help? Contact us at info@cognitivehealthit.com
          </FooterNoteText>
        </FooterBox>
      </StyledContainer>
    </PageWrapper>
  );
};

export default RequestDemoPage;
