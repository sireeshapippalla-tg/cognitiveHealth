import {
  Section,
  Inner,
  GridWrapper,
  Eyebrow,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  ImageCard,
  StyledImage,
  BlobTop,
  BlobBottom,
  MotionContent,
  MotionImageWrapper,
} from "./SplitSection.styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

interface Action {
  label: string;
  onClick?: () => void;
}

interface Props {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  reverse?: boolean;
  primaryAction?: Action;
  secondaryAction?: Action;
  padding?: string;
}

const SplitSection = ({
  eyebrow,
  title,
  description,
  image,
  reverse,
  primaryAction,
  secondaryAction,
  padding,
}: Props) => {
  return (
    <Section padding={padding}>
      <BlobTop
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <BlobBottom
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <Inner>
        <GridWrapper reverse={reverse}>
          {/* TEXT */}
          <MotionContent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: reverse ? 30 : -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1, duration: 0.6 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && <Title>{title}</Title>}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {description && <Description>{description}</Description>}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Actions>
                {primaryAction && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <PrimaryButton
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={primaryAction.onClick}
                    >
                      {primaryAction.label}
                    </PrimaryButton>
                  </motion.div>
                )}

                {secondaryAction && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <SecondaryButton
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      onClick={secondaryAction.onClick}
                    >
                      {secondaryAction.label}
                    </SecondaryButton>
                  </motion.div>
                )}
              </Actions>
            </motion.div>
          </MotionContent>

          {/* IMAGE */}
          <MotionImageWrapper
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ rotate: 1 }}
          >
            <ImageCard>
              <StyledImage src={image} alt="Visual" />
            </ImageCard>
          </MotionImageWrapper>
        </GridWrapper>
      </Inner>
    </Section>
  );
};

export default SplitSection;
