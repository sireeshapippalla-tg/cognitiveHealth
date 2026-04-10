
import { Box, Stack, Typography, Link, SvgIcon, type SvgIconProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutePaths";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import cognitiveLogo from "../../../assets/white-logo.webp";

import {
  FooterRoot,
  Container,
  Brand,
  Description,
  Social,
  Heading,
  List,
  ListItem,
  FooterDivider,
  Bottom,
} from "./Footer.styles";

/* ✅ NEW X (TWITTER) ICON */
const XIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.172l-5.62-7.357L3.5 22H.244l8.02-9.167L1 2h7.327l5.088 6.667L18.244 2zm-2.51 18h2.002L7.06 4H5.01l10.724 16z"/>
  </SvgIcon>
);
const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterRoot>
      <Container>
        {/* TOP SECTION */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ xs: 4, md: 6 }}
        >
          {/* BRAND */}
          <Brand>
            <img
              src={cognitiveLogo}
              alt="CognitiveHealth"
              height={70}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/", { replace: false })}
            />

            <Description>
              Transform your revenue cycle
              <br />
              with autonomous AI agents
            </Description>

            {/* ✅ SOCIAL ICONS */}
            <Social direction="row" spacing={2}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <XIcon /> {/* ✅ NEW X ICON */}
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
              </a>
            </Social>
          </Brand>

          {/* SOLUTIONS */}
          <Box>
            <Heading>Solutions</Heading>
            <List>
              <ListItem onClick={() => navigate("/solutions/payment-posting")}>
                Cash Posting
              </ListItem>
              <ListItem onClick={() => navigate("/solutions/lockbox")}>
                Lockbox Automation
              </ListItem>
              <ListItem onClick={() => navigate("/solutions/eligibility")}>
                Eligibility Discovery
              </ListItem>
              <ListItem onClick={() => navigate("/solutions/denials")}>
                Denials Workflow
              </ListItem>
              <ListItem
                onClick={() => navigate("/solutions/contract-analysis")}
              >
                Contract Analytics
              </ListItem>
            </List>
          </Box>

          {/* COMPANY */}
          <Box>
            <Heading>Company</Heading>
            <List>
              <ListItem onClick={() => navigate("/about-us#team")}>
                Leadership
              </ListItem>
              <ListItem onClick={() => navigate("/#customers")}>
                Customers
              </ListItem>
              <ListItem onClick={() => navigate("/resources")}>
                Resources
              </ListItem>
              <ListItem onClick={() => navigate("/resources#blog")}>
                Blog
              </ListItem>
            </List>
          </Box>

          {/* CONTACT */}
          <Box>
            <Heading>Contact</Heading>
            <List>
              <ListItem
                onClick={() =>
                  navigate(ROUTES.REQUEST_DEMO, {
                    state: { fromLabel: "Footer", fromPath: "/#contact" },
                  })
                }
              >
                Request Demo
              </ListItem>
              <ListItem onClick={() => navigate("/privacy-policy")}>
                Privacy Policy
              </ListItem>
              <ListItem onClick={() => navigate("/terms")}>
                Terms of Service
              </ListItem>
              <ListItem onClick={() => navigate("/faq")}>
                FAQ
              </ListItem>
            </List>
          </Box>
        </Stack>

        <FooterDivider />

        {/* BOTTOM SECTION */}
        <Bottom
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
         <Typography>
            © {new Date().getFullYear()} CognitiveHealth
        </Typography>

          <Typography>
            All Rights Reserved |{" "}
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/terms")}
              underline="hover"
            >
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/privacy-policy")}
              underline="hover"
            >
              Privacy Policy
            </Link>
          </Typography>
        </Bottom>
      </Container>
    </FooterRoot>
  );
};

export default Footer;