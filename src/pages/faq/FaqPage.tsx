import DOMPurify from "dompurify";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  PageBackground,
  ContentWrapper,
  ContentInner,
  SearchContainer,
  SearchInputWrapper,
  StyledInput,
  TabContainer,
  TabButton,
  CtaSection,
  CtaTitle,
  CtaText,
  CtaButton,
  FaqWrapper,
} from "./Faq.style";
import {
  SectionBlock,
  SectionTitle,
  Paragraph,
  ListParagraph,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  NoResults,
  CategoryBadge,
  BlockHeading,
} from "./FaqAccordion.style";
import { ROUTES } from "../../routes";

import { termsSections, type TermBlock } from "./FaqData";

const FaqPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "Platform" | "Solutions" | "General"
  >("Platform");

  const filteredSections = useMemo(() => {
    let filtered = termsSections;

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (section) =>
          section.title.toLowerCase().includes(lowerQuery) ||
          section.blocks.some(
            (block) =>
              (block.type === "paragraph" &&
                block.text.toLowerCase().includes(lowerQuery)) ||
              (block.type === "list" &&
                block.items.some((item: string) =>
                  item.toLowerCase().includes(lowerQuery)
                ))
          )
      );
    } else {
      // If no search query, filter by active tab
      filtered = filtered.filter((section) => section.category === activeTab);
    }

    return filtered;
  }, [searchQuery, activeTab]);

  const handleTabChange = (tab: "Platform" | "Solutions" | "General") => {
    setActiveTab(tab);
    setExpandedId(null); // Reset expanded item when switching tabs
  };

  const schemaOrgFaq = useMemo(() => {
    const mainEntity = termsSections.map((section) => {
      const answerText = section.blocks
          .map((block) => {
            if (block.type === "paragraph") return block.text;
            if (block.type === "list")
              return (
                  "<ul>" +
                  block.items.map((item: string) => `<li>${item}</li>`).join("") +
                  "</ul>"
              );
            return "";
          })
          .join(" ");

      return {
        "@type": "Question",
        name: section.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mainEntity,
    };
  }, []);

  return (
    <FaqWrapper>
      <SEO
        title="Frequently Asked Questions"
        description="Everything you need to know about the iCAN™ ONE Platform and our AI-powered Revenue Cycle Solutions."
        schema={schemaOrgFaq}
      />
      {/* HERO SECTION */}
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroInner>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <HeroTitle variant="h1">Frequently Asked Questions</HeroTitle>
            <HeroSubtitle>
              Everything you need to know about the iCAN™ ONE Platform and our
              AI-powered Revenue Cycle Solutions
            </HeroSubtitle>
          </motion.div>

          <SearchContainer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <SearchInputWrapper>
              <SearchIcon
                style={{ color: "var(--color-text-muted)", marginRight: "8px", fontSize: 24 }}
              />
              <StyledInput
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchInputWrapper>
          </SearchContainer>
        </HeroInner>
      </HeroSection>

      {/* CONTENT SECTION */}
      <PageBackground>
        <ContentWrapper>
          <ContentInner>
            {/* TABS */}
            {!searchQuery && (
              <TabContainer>
                <TabButton
                  $active={activeTab === "Platform"}
                  onClick={() => handleTabChange("Platform")}
                >
                  Platform & Technology
                </TabButton>
                <TabButton
                  $active={activeTab === "Solutions"}
                  onClick={() => handleTabChange("Solutions")}
                >
                  RCM Solutions
                </TabButton>
                <TabButton
                  $active={activeTab === "General"}
                  onClick={() => handleTabChange("General")}
                >
                  General
                </TabButton>
              </TabContainer>
            )}

            <AccordionContainer>
              <AnimatePresence mode="popLayout">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, index) => (
                    <AccordionItem
                      key={section.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      $expanded={expandedId === section.id}
                    >
                      <AccordionHeader>
                        <ContentInner>
                          {searchQuery && (
                            <CategoryBadge>
                              {section.category}
                            </CategoryBadge>
                          )}
                          <SectionTitle className="faq-title">
                            {section.title}
                          </SectionTitle>
                        </ContentInner>
                      </AccordionHeader>

                      <AccordionContent>
                        <SectionBlock>
                          {section.blocks.map(
                            (block: TermBlock, bIndex: number) => {
                              if (block.type === "heading") {
                                return (
                                  <BlockHeading
                                    key={bIndex}
                                    variant="h6"
                                  >
                                    {block.text}
                                  </BlockHeading>
                                );
                              }
                              if (block.type === "paragraph") {
                                return (
                                  <Paragraph
                                    key={bIndex}
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(block.text),
                                    }}
                                  />
                                );
                              }
                              if (block.type === "list") {
                                return (
                                  <ListParagraph key={bIndex}>
                                    <ul>
                                      {(block.items as string[]).map(
                                        (item: string, i: number) => (
                                          <li
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                              __html: DOMPurify.sanitize(item),
                                            }}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </ListParagraph>
                                );
                              }
                              if (block.type === "link") {
                                return (
                                  <Paragraph key={bIndex}>
                                    <a href={block.url}>{block.text}</a>
                                  </Paragraph>
                                );
                              }
                              return null;
                            }
                          )}
                        </SectionBlock>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <NoResults initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    No results found for "{searchQuery}". Please try another
                    search term.
                  </NoResults>
                )}
              </AnimatePresence>
            </AccordionContainer>

            {/* CTA SECTION */}
            <CtaSection>
              <CtaTitle>Still Have Questions?</CtaTitle>
              <CtaText>
                Ready to experience the CognitiveHealth difference? Connect with
                our team to learn how we can transform your revenue cycle
                operations.
              </CtaText>
              <CtaButton
                onClick={() =>
                  navigate(ROUTES.REQUEST_DEMO, {
                    state: { fromLabel: "FAQ", fromPath: "/faq" },
                  })
                }
              >
                Schedule a Demo
              </CtaButton>
            </CtaSection>
          </ContentInner>
        </ContentWrapper>
      </PageBackground>
    </FaqWrapper>
  );
};

export default FaqPage;
