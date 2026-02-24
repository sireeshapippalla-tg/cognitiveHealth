import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppButton from "../../ui/appButton/AppButton";
import { useNavigate } from "react-router-dom";

import {
  CtaWrapper,
  CtaTitle,
  CtaSubtitle,
  CtaActions,
  CtaTrustText,
  PrimaryButtonStyles,
  // OutlineButtonStyles,
  SectionContainer
} from "./CallToActionSection.styles";

const CallToActionSection = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <CtaWrapper>
        <CtaTitle>Ready to Experience the CognitiveHealth Difference?</CtaTitle>

        <CtaSubtitle>
         See how our healthcare expertise, advanced AI technology, and partnership approach can transform your revenue cycle operations.
        </CtaSubtitle>

        <CtaActions direction={{ xs: "column", sm: "row" }} spacing={2}>
          <AppButton
            variantType="primary"
            sx={PrimaryButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            onClick={() => navigate("/contact-us")}
          >
            Request a Demo
          </AppButton>

          <AppButton
            variantType="outline"
            showBorder={true}
            // sx={OutlineButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            onClick={() => navigate("/resources#videos")}
          >
            See Platform in Action
          </AppButton>

        </CtaActions>
         <CtaTrustText>
          Join 50+ healthcare organizations who trust CognitiveHealth to process 10M+ claims monthly.
        </CtaTrustText>
      </CtaWrapper>
    </SectionContainer>
  );
};

export default CallToActionSection;
