import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  SearchContainer,
  SearchInputWrapper,
  StyledInput,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  IconWrapper,
  NoResults,
  CtaSection,
  CtaTitle,
  CtaText,
  CtaButton,
  UpdatedBadge,
} from "../faq/Faq.styles";
import { termsSections, type TermBlock } from "./PrivacyPolicyData";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    if (!searchQuery) return termsSections;
    const lowerQuery = searchQuery.toLowerCase();
    return termsSections.filter(
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
  }, [searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
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
            <UpdatedBadge>Version Date: 11/01/2024</UpdatedBadge>
            <HeroTitle variant="h1">Privacy Policy</HeroTitle>
            <HeroSubtitle>
              How we collect, use, and protect your information at
              CognitiveHealthIT.com
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
                placeholder="Search privacy topics..."
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
                      <AccordionHeader
                        $expanded={expandedId === section.id}
                        onClick={() => toggleAccordion(section.id)}
                      >
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
                              {section.title}
                            </Box>
                          )}
                          <SectionTitle
                            className="faq-title"
                            $expanded={expandedId === section.id}
                          >
                            {section.title}
                          </SectionTitle>
                        </Box>
                        <IconWrapper
                          className="faq-icon"
                          $expanded={expandedId === section.id}
                        >
                          <ExpandMoreIcon />
                        </IconWrapper>
                      </AccordionHeader>

                      <AnimatePresence>
                        {expandedId === section.id && (
                          <AccordionContent
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                          >
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
                                        dangerouslySetInnerHTML={{
                                          __html: block.text,
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
                                                  __html: item,
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
                        )}
                      </AnimatePresence>
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
              <CtaTitle>Need More Clarity?</CtaTitle>
              <CtaText>
                If you have specific questions about our privacy practices or
                data handling, our legal team is here to help.
              </CtaText>
              <CtaButton onClick={() => navigate("/contact-us")}>
                Contact Legal Team
              </CtaButton>
            </CtaSection>
          </ContentInner>
        </ContentWrapper>
      </PageBackground>
    </Box>
  );
};

export default PrivacyPolicyPage;
