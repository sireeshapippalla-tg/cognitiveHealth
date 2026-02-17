import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppButton from "../../ui/appButton/AppButton";
import { useNavigate } from "react-router-dom";

import {
  CtaWrapper,
  CtaTitle,
  CtaSubtitle,
  CtaActions,
  PrimaryButtonStyles,
  // OutlineButtonStyles,
  SectionContainer,
} from "./CallToActionSection.styles";

const CallToActionSection = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <CtaWrapper>
        <CtaTitle>See What Autonomous RCM Can Do For You</CtaTitle>

        <CtaSubtitle>
          Join leading healthcare organizations transforming their revenue cycle
          with AI
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
            onClick={() => navigate(" /resources#videos")}
          >
            See Platform in Action
          </AppButton>
        </CtaActions>
      </CtaWrapper>
    </SectionContainer>
  );
};

export default CallToActionSection;
