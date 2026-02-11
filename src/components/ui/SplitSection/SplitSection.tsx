import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppButton from "../appButton/AppButton";

import {
  Section,
  Grid,
  Content,
  Eyebrow,
  Title,
  Description,
  Actions,
  ImageWrapper,
  Image,
} from "./SplitSection.styles";

interface Action {
  label: string;
  onClick?: () => void;
}

interface SplitSectionProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  image: string;
  reverse?: boolean;
  primaryAction?: Action;
  secondaryAction?: Action;
}

const SplitSection = ({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
  primaryAction,
  secondaryAction,
}: SplitSectionProps) => {
  return (
    <Section>
      <Grid reverse={reverse}>
        {/* CONTENT */}
        <Content>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          <Title>{title}</Title>

          {description && <Description>{description}</Description>}

          {(primaryAction || secondaryAction) && (
            <Actions>
              {primaryAction && (
                <AppButton
                  variantType="primary"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </AppButton>
              )}

              {secondaryAction && (
                <AppButton
                  variantType="outline"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </AppButton>
              )}
            </Actions>
          )}
        </Content>

        {/* IMAGE */}
        <ImageWrapper>
          <Image src={image} alt={"image"} />
        </ImageWrapper>
      </Grid>
    </Section>
  );
};

export default SplitSection;
