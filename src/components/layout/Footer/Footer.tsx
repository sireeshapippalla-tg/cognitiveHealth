import { Box, Stack, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import cognitiveLogo from "../../../assets/cognitiveLogo.svg";

import {
  FooterRoot,
  Container,
  Brand,
  // Logo,
  Description,
  Social,
  Heading,
  List,
  ListItem,
  FooterDivider,
  Bottom,
  LogoWrapper,
} from "./Footer.styles";

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
            <LogoWrapper>
              <img
                src={cognitiveLogo}
                alt="CognitiveHealth"
                height={55}
                onClick={() => navigate("/", { replace: false })}
              />
            </LogoWrapper>

            <Description>
              Transform your revenue cycle
              <br />
              with autonomous AI agents
            </Description>

            <Social direction="row" spacing={2}>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
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
              {/* <ListItem>Careers</ListItem> */}
            </List>
          </Box>

          {/* CONTACT */}
          <Box>
            <Heading>Contact</Heading>
            <List>
              <ListItem onClick={() => navigate("/contact-us")}>
                Request Demo
              </ListItem>
              <ListItem
                sx={{
                  cursor: "default",
                  pointerEvents: "none",
                }}
              >
                Support
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
          <Typography>© 2026 CognitiveHealth</Typography>

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
