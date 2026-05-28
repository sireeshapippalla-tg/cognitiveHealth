import DOMPurify from "dompurify";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  PageBackground,
  ContentWrapper,
  ContentInner,
  SectionBlock,
  SectionTitle,
  Paragraph,
  ListParagraph,
  // UpdatedBadge,
  SearchContainer,
  SearchInputWrapper,
  StyledInput,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  NoResults,
  TabContainer,
  TabButton,
  CtaSection,
  CtaTitle,
  CtaText,
  CtaButton,
} from "./Faq.styles";
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

  return (
    <Box sx={{ minHeight: "100vh" }}>
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
            {/* <UpdatedBadge>AI-POWERED FAQ</UpdatedBadge> */}
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
                sx={{ color: "var(--color-text-muted)", mr: 1, fontSize: 24 }}
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
                  Platform Features
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
                        <Box>
                          {searchQuery && (
                            <Box
                              sx={{
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "var(--color-primary-dark)",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                mb: 1,
                              }}
                            >
                              {section.category}
                            </Box>
                          )}
                          <SectionTitle className="faq-title">
                            {section.title}
                          </SectionTitle>
                        </Box>
                      </AccordionHeader>

                      <AccordionContent>
                        <SectionBlock>
                          {section.blocks.map(
                            (block: TermBlock, bIndex: number) => {
                              if (block.type === "heading") {
                                return (
                                  <Typography
                                    key={bIndex}
                                    variant="h6"
                                    sx={{
                                      mt: 3,
                                      mb: 2,
                                      fontWeight: 500,
                                      color: "var(--color-gray-900)",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {block.text}
                                  </Typography>
                                );
                              }
                              if (block.type === "paragraph") {
                                return (
                                  <Paragraph
                                    key={bIndex}
                                    sx={{ mb: 2 }}
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.text,) }}
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
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item,) }}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </ListParagraph>
                                );
                              }
                              if (block.type === "link") {
                                return (
                                  <Paragraph key={bIndex} sx={{ mt: 2 }}>
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
    </Box>
  );
};

export default FaqPage;
