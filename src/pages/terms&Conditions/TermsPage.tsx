import React from "react";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  ContentWrapper,
  ContentInner,
  PageTitle,
  UpdatedText,
  SectionBlock,
  SectionTitle,
  Paragraph,
} from "./Terms.styles";

const TermsPage = () => {
  const termsSections = [
    {
      id: "introduction",
      title: "Terms and Conditions of Use",
      content: [
        "Please read these Terms of Use and Privacy Policy carefully before using this site.",
        "This site and its related services are governed by the Terms of Use stated below, and your continued access is subject to your agreement.",
      ],
    },
    {
      id: "legal-advice",
      title: "Legal Advice",
      content: [
        "Nothing on this site constitutes tax or legal advice or provides any warranties.",
        "You should consult your own legal professionals before engaging in any arrangements.",
      ],
    },
    {
      id: "interaction",
      title: "Interaction and Surveys",
      content: [
        "From time to time our site may request feedback or information via surveys.",
      ],
    },
    {
      id: "links",
      title: "Links",
      content: [
        "This website contains links to third party sites for your convenience.",
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroInner>
          <HeroTitle>Terms of Service</HeroTitle>
          <HeroSubtitle>
            These Terms and Conditions govern your use of the CognitiveHealth platform and services.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      {/* CONTENT */}
      <ContentWrapper>
        <ContentInner>

          <PageTitle>Terms of Use</PageTitle>
          <UpdatedText>Last Updated: January 1, 2024</UpdatedText>

          {termsSections.map((section) => (
            <SectionBlock key={section.id} id={section.id}>
              <SectionTitle>{section.title}</SectionTitle>

              {section.content.map((para, index) => (
                <Paragraph key={index}>
                  {para}
                </Paragraph>
              ))}
            </SectionBlock>
          ))}

        </ContentInner>
      </ContentWrapper>
    </>
  );
};

export default TermsPage;
