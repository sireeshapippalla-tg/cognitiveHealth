import { Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import careLogo from "../../../assets/care.svg";

import kaminLogo from "../../../assets/Kamin Logo.svg";
import mcLeranLogo from "../../../assets/mcLeran.svg";
import mercyLogo from "../../../assets/Mercylogo.svg";
import mindPathLogo from "../../../assets/mindpath-logo.svg";
import qualityLogo from "../../../assets/Quality.svg";


import {
  Hero,
  HeroInner,
  HeroGrid,
  Content,
  Title,
  Highlight,
  Subtitle,
  Actions,
  DashboardWrapper,
  TrustSection,
  TrustTitle,
  LogoGrid,

  LogoImage,
} from "./HeroSection.style";
import DashboardMock from "./DashboardMock";
import AppButton from "../../ui/appButton/AppButton";

const HeroSection = () => {
  return (
    <Hero>
      <HeroInner>
        <HeroGrid>
          {/* LEFT */}
          <Content>
            <Title>
              Transform Your Revenue Cycle with{" "}
              <Highlight>Autonomous AI Agents</Highlight>
            </Title>

            <Subtitle>
              Deploy a network of specialized AI agents that automate your most
              complex RCM workflows—reducing costs by up to 80% while
              accelerating cash flow and empowering your team to deliver
              exceptional patient experiences.
            </Subtitle>

            <Actions>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <AppButton
                  variantType="primary"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Request a Demo
                </AppButton>

                <AppButton
                  variantType="outline"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  See Platform in Action
                </AppButton>
              </Stack>
            </Actions>
          </Content>

          {/* RIGHT */}
          <DashboardWrapper>
            <DashboardMock />
          </DashboardWrapper>
        </HeroGrid>

        {/* TRUSTED BY */}
        <TrustSection>
          <TrustTitle>
            Trusted by leading health systems
            <span style={{ fontWeight: 600 }}>Learn more →</span>
          </TrustTitle>

          <LogoGrid>
            <LogoImage src={careLogo} alt="Care Hospice" />
            <LogoImage src={mcLeranLogo} alt="McLaren Health" />
            <LogoImage src={kaminLogo} alt="Kamin Health" />
            <LogoImage src={mindPathLogo} alt="MindPath Health" />
            <LogoImage src={mercyLogo} alt="Mercy Health" />
            <LogoImage src={qualityLogo} alt="Quality Care" />
          </LogoGrid>
        </TrustSection>
      </HeroInner>
    </Hero>
  );
};

export default HeroSection;
