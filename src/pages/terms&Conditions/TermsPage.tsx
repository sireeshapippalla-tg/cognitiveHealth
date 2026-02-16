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
  StyledList,
  StyledListItem,
} from "./Terms.styles";

type TermBlock = 
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type TermSection = {
  id: string;
  title: string;
  blocks: TermBlock[];
};

const TermsPage = () => {
  const termsSections: TermSection[] = [
    {
      id: "introduction",
      title: "Terms and Conditions of Use",
      blocks: [
        {
          type: "paragraph",
          text: "Please read these Terms of Use and Privacy Policy carefully before using this site.",
        },
        {
          type: "paragraph",
          text: "This site and its related services are governed by the Terms of Use stated below, and your continued access is subject to your agreement.",
        },
      ],
    },
    {
      id: "legal-advice",
      title: "Legal Advice",
      blocks: [
        {
          type: "paragraph",
          text: "Nothing on this site constitutes tax or legal advice or provides any warranties.",
        },
        {
          type: "paragraph",
          text: "You should consult your own legal professionals before engaging in any arrangements.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      blocks: [
        {
          type: "paragraph",
          text: "The website and its entire contents are owned by CognitiveHealth Technologies LLC.",
        },
        {
          type: "paragraph",
          text: "These Terms of Use permit you to use the website for your personal, non-commercial use only.",
        },
        {
          type: "list",
          items: [
            "Your computer may temporarily store copies of such materials in RAM.",
            "You may store files that are automatically cached by your Web browser.",
            "You may print one copy of a reasonable number of pages for personal use.",
          ],
        },
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
            These Terms and Conditions govern your use of the CognitiveHealth
            platform and services.
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

              {section.blocks.map((block: TermBlock, index: number) => {
                if (block.type === "paragraph") {
                  return <Paragraph key={index}>{block.text}</Paragraph>;
                }

                if (block.type === "list") {
                  return (
                    <StyledList key={index}>
                      {block.items.map((item: string, i: number) => (
                        <StyledListItem key={i}>{item}</StyledListItem>
                      ))}
                    </StyledList>
                  );
                }

                return null;
              })}
            </SectionBlock>
          ))}
        </ContentInner>
      </ContentWrapper>
    </>
  );
};

export default TermsPage;
