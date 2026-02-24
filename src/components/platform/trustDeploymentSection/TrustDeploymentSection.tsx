import { useState } from "react";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  SectionWrapper,
  InnerContainer,
  Title,
  ContentRow,
  QuoteText,
  QuoteAuthor,
  Checklist,
  ChecklistItem,
  CTAWrapper,
} from "./TrustDeploymentSection.styles";
import { PrimaryButton } from "../../ui/appButton/AppButton.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImplementationGuideModal from "./ImplementationGuideModal";

const TrustDeploymentSection = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <SectionWrapper>
      {/* <Container maxWidth="lg"> */}
      <InnerContainer>
        <Title variant="h5">
          One platform. One vendor. One source of truth.
        </Title>

        <ContentRow>
          {/* LEFT SIDE */}
          <div>
            <QuoteText>
              “Processing millions of claims across 12 facilities with zero
              disruption — CognitiveHealth scales with our growth.”
            </QuoteText>
            <QuoteAuthor>
              — VP Revenue Cycle, 4000-bed health system
            </QuoteAuthor>
          </div>

          {/* RIGHT SIDE */}
          <Checklist>
            {[
              "20+ EMR Integrations",
              "Pre-built Connectors",
              "HL7, FHIR, API Ready",
              "Operational in 4–6 Weeks",
            ].map((item, index) => (
              <ChecklistItem key={index}>
                <CheckCircleIcon
                  style={{ color: "var(--color-text-blue)" }}
                  fontSize="small"
                />
                <Typography variant="body2">{item}</Typography>
              </ChecklistItem>
            ))}
          </Checklist>
        </ContentRow>

        <CTAWrapper>
          <PrimaryButton
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => setOpenModal(true)}
          >
            Learn About Our Implementation Process
          </PrimaryButton>
        </CTAWrapper>
      </InnerContainer>
      {/* </Container> */}

      <ImplementationGuideModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </SectionWrapper>
  );
};

export default TrustDeploymentSection;
