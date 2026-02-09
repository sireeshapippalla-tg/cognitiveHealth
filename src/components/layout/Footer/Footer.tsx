import { Box, Stack, Typography, Link } from "@mui/material";

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
              <img src={cognitiveLogo} alt="CognitiveHealth" height={55} />
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
              <ListItem>Cash Posting</ListItem>
              <ListItem>Lockbox Automation</ListItem>
              <ListItem>Eligibility Discovery</ListItem>
              <ListItem>Denials Workflow</ListItem>
              <ListItem>Contract Analytics</ListItem>
            </List>
          </Box>

          {/* COMPANY */}
          <Box>
            <Heading>Company</Heading>
            <List>
              <ListItem>Leadership</ListItem>
              <ListItem>Customers</ListItem>
              <ListItem>Resources</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Careers</ListItem>
            </List>
          </Box>

          {/* CONTACT */}
          <Box>
            <Heading>Contact</Heading>
            <List>
              <ListItem>Request Demo</ListItem>
              <ListItem>Support</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms of Service</ListItem>
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
            <Link href="#" underline="hover">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href="#" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Bottom>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
