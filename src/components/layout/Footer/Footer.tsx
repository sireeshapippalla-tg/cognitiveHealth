import {
  Box,
  Stack,
  Typography,
  Link,
  // SvgIcon,
  // type SvgIconProps,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
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
} from "./Footer.style";

/* ✅ NEW X (TWITTER) ICON */
// const XIcon = (props: SvgIconProps) => (
//   <SvgIcon {...props}>
//     <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.172l-5.62-7.357L3.5 22H.244l8.02-9.167L1 2h7.327l5.088 6.667L18.244 2zm-2.51 18h2.002L7.06 4H5.01l10.724 16z" />
//   </SvgIcon>
// );
const Footer = () => {
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
            <RouterLink to="/">
              <img
                src={cognitiveLogo}
                alt="CognitiveHealth"
                loading="lazy"
                width={200}
                height={50}
                style={{ cursor: "pointer", width: "200px", height: "auto" }}
              />
            </RouterLink>

            <Description>
              Transform your revenue cycle
              <br />
              with autonomous AI agents
            </Description>

            {/* ✅ SOCIAL ICONS */}
            <Social direction="row" spacing={2}>
              <a
                href="https://www.facebook.com/profile.php?id=61563305037887"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a> */}

              <a
                href="https://www.linkedin.com/company/cognitivehealth-technologies-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.youtube.com/@cognitivehealth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </Social>
          </Brand>

          {/* SOLUTIONS */}
          <Box>
            <Heading>Solutions</Heading>
            <List>
              <ListItem>
                <RouterLink to={ROUTES.PAYMENTPOSTING}>Cash Posting</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.LOCKBOXANALYSIS}>
                  Lockbox Automation
                </RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.ELIGIBILITYDISCOVERY}>
                  Eligibility Discovery
                </RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.DENIALWORKFLOW}>
                  Denials Workflow
                </RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.CONTRACTANALYSIS}>
                  Contract Analytics
                </RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.PREBILLSERVICES}>
                  Pre-Bill Services
                </RouterLink>
              </ListItem>
            </List>
          </Box>

          {/* COMPANY */}
          <Box>
            <Heading>Company</Heading>
            <List>
              <ListItem>
                <RouterLink to="/about-us#team">Leadership</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/#customers">Customers</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/resources">Resources</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/resources/blogs">Blog</RouterLink>
              </ListItem>
            </List>
          </Box>

          {/* CONTACT */}
          <Box>
            <Heading>Contact</Heading>
            <List>
              <ListItem>
                <RouterLink to={ROUTES.REQUEST_DEMO}>Request Demo</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to={ROUTES.FAQ}>FAQ</RouterLink>
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
          <Typography>© {new Date().getFullYear()} CognitiveHealth</Typography>

          <Typography>
            All Rights Reserved |{" "}
            <Link
              component={RouterLink}
              to={ROUTES.TERMSCONDITIONS}
              underline="hover"
            >
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link
              component={RouterLink}
              to={ROUTES.PRIVACYPOLICY}
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
