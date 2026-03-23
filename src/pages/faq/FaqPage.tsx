import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  ContentWrapper,
  ContentInner,
  SectionBlock,
  SectionTitle,
  Paragraph,
  UpdatedBadge,
  SearchContainer,
  SearchInputWrapper,
  StyledInput,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  IconWrapper,
  NoResults,
} from "./Faq.styles";

type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

type TermSection = {
  id: string;
  title: string;
  category: string;
  blocks: TermBlock[];
};

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const termsSections: TermSection[] = [
    {
      id: "eligibility-denial-management",
      category: "RCM Solutions",
      title: "Eligibility verification and denial management AI automation in medical billing",
      blocks: [
        {
          type: "paragraph",
          text: `In the ever-evolving landscape of healthcare, efficient revenue cycle management (RCM) is paramount for maintaining 
          financial health and ensuring the sustainability of healthcare organizations. Cognitive Health's iCAN™ platform leverages
          advanced AI technology to revolutionize <a href="https://cognitivehealthit.com/eligibility-verification-and-denial-management-ai-automation/" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">
          eligibility verification and denial management</a> processes, addressing some of the most persistent challenges in medical billing. This service page explores the transformative impact of automation in these
          critical areas, providing insights into how CognitiveHealth's solutions enhance operational efficiency and financial performance.`,
        },
      ],
    },
    {
      id: "healthcare-correspondence-document-management",
      category: "Document Management",
      title: "Healthcare correspondence document management with CognitiveHealth's iCAN™ Platform",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth's iCAN™ platform offers a robust solution, integrating advanced AI technologies to streamline and enhance
          <a href="https://cognitivehealthit.com/healthcare-document-management-with-generative-ai/" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">correspondence management </a> 
          processes in healthcare RCM. This service page explores the key features, benefits, and transformative impact of our AI-driven document management system for 
          the healthcare industry, with a particular focus on healthcare correspondence management and automation.`,
        },
      ],
    },
    {
      id: "behavioral-health-revenue-cycle-management",
      category: "Specialized RCM",
      title: "Behavioral health revenue cycle management with CognitiveHealth",
      blocks: [
        {
          type: "paragraph",
          text: `Effective revenue cycle management (RCM) is paramount to ensuring the financial health and sustainability of organizations.
                  CognitiveHealth stands at the forefront of this field, offering advanced AI-driven solutions tailored specifically for the unique
                  challenges of <a href="https://cognitivehealthit.com/behavioral-health-rcm-with-generative-ai/" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> behavioral health revenue cycle management </a>.
                  Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes,
                  ultimately leading to improved financial performance.`
        },
      ],
    },
    {
      id: "revolutionize-healthcare-with-ai-agents",
      category: "AI Technology",
      title: "Revolutionize the healthcare revenue cycle with AI agents",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize 
                  <a href="https://cognitivehealthit.com/revenue-cycle-management-with-ai-powered-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> revenue cycle management </a>
                (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can
                streamline operations, enhance efficiency, and significantly improve financial performance.`
        },
      ],
    },
    {
      id: "optimizing-healthcare-cash-posting",
      category: "Cash Management",
      title: "Optimizing healthcare cash posting with CognitiveHealth's iCAN™ Platform",
      blocks: [
        {
          type: "paragraph",
          text: `Cash posting, a critical component of the RCM process, ensures accurate and timely recording of payments received from
                  patients and insurance companies. However, manual cash posting can be time-consuming and prone to errors, leading to
                  delays in revenue recognition and increased administrative costs. CognitiveHealth's iCAN™ platform offers a revolutionary
                  solution with its <a href="https://cognitivehealthit.com/streamline-your-cash-posting-with-automation-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> AI-driven cash posting automation </a>. This service page explores how CognitiveHealth's iCAN™ platform
                  transforms cash posting and overall revenue cycle management for healthcare providers.`
        },
      ],
    },
    {
      id: "ai-powered-rpa-medical-billing",
      category: "RCM Solutions",
      title: "AI powered RPA in medical billing and revenue cycle management",
      blocks: [
        {
          type: "paragraph",
          text: `Are you seeking to optimize your medical billing processes and improve your revenue cycle management? 
          CognitiveHealth™ offers cutting-edge <a href="https://cognitivehealthit.com/ai-driven-medical-billing-services-for-enhanced-revenue-cycle-management" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> medical billing </a>
          services designed to enhance efficiency, reduce errors, and streamline workflows. Our AI-driven solutions provide tailored support for healthcare organizations of all sizes.`
        },
      ],
    },
    {
      id: "revolutionize-healthcare-back-office-with-ai",
      category: "Back Office",
      title: "Revolutionize your healthcare back office with AI",
      blocks: [
        {
          type: "paragraph",
          text: `At CognitiveHealth, we specialize in providing advanced solutions designed to optimize your  
                <a href="https://cognitivehealthit.com/healthcare-back-office-with-advanced-ai-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> healthcare back office </a>. 
                Our services leverage cutting-edge technologies, including artificial intelligence (AI) and data analytics, to streamline processes, reduce errors, and enhance productivity.`
        },
      ],
    },
    {
      id: "rcm-in-healthcare",
      category: "RCM Solutions",
      title: "RCM in healthcare",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. 
                  Our innovative <a href="https://cognitivehealthit.com/rcm-ai-powered-billing-services" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> 
                  RCM </a> billing services streamline processes, reduce errors, and enhance overall financial performance.`
        },
      ],
    },
    {
      id: "transforming-healthcare-claims-processing",
      category: "Claims Processing",
      title: "Transforming healthcare claims processing with CognitiveHealth's AI-driven solutions",
      blocks: [
        {
          type: "paragraph",
          text: `Efficient claims processing is critical to maintaining financial stability and operational efficiency. CognitiveHealth leverages advanced AI technology 
                to revolutionize <a href="https://cognitivehealthit.com/healthcare-claims-processing-with-ai-automation" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">
                 healthcare claims processing </a>, offering automated, streamlined, and accurate solutions that enhance overall performance. This service page delves into the transformative 
                 capabilities of CognitiveHealth's iCAN™ platform, showcasing how automated claims processing can redefine healthcare claims management.`
        },
      ],
    },
    {
      id: "specialty-medical-billing-with-generative-ai-rcm",
      category: "Specialized RCM",
      title: "Specialty medical billing with generative AI RCM",
      blocks: [
        {
          type: "paragraph",
          text: `In the specialized fields of healthcare, efficient revenue cycle management (RCM) is crucial to maintaining financial health
                and sustainability. CognitiveHealth offers tailored <a href="https://cognitivehealthit.com/specialty-medical-billing-with-generative-ai-rcm" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> specialty medical billing </a> services designed to address the unique
              challenges faced by specialty practices. Our advanced AI-driven solutions streamline processes, reduce errors, and enhance
              overall financial performance, making us a leader in specialty revenue cycle management.`
        },
      ],
    },
  ];

  const filteredSections = useMemo(() => {
    if (!searchQuery) return termsSections;
    const lowerQuery = searchQuery.toLowerCase();
    return termsSections.filter(
      (section) =>
        section.title.toLowerCase().includes(lowerQuery) ||
        section.blocks.some(
          (block) =>
            block.type === "paragraph" &&
            block.text.toLowerCase().includes(lowerQuery)
        )
    );
  }, [searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box sx={{ bgcolor: "var(--color-bg-lite)", minHeight: "100vh" }}>
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
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <HeroTitle variant="h1">How can we help you?</HeroTitle>
            <HeroSubtitle>
              Find answers to common questions about our iCAN™ Platform and RCM solutions.
            </HeroSubtitle>
            <UpdatedBadge>Version: 11/01/2024</UpdatedBadge>
          </motion.div>

          <SearchContainer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <SearchInputWrapper>
              <SearchIcon sx={{ color: "var(--color-text-muted)", mr: 1 }} />
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
      <ContentWrapper>
        <ContentInner>
          <AccordionContainer>
            <AnimatePresence mode="popLayout">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, index) => (
                  <AccordionItem
                    key={section.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    $expanded={expandedId === section.id}
                  >
                    <AccordionHeader onClick={() => toggleAccordion(section.id)}>
                      <Box>
                        <Box sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--color-primary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          mb: 0.5
                        }}>
                          {section.category}
                        </Box>
                        <SectionTitle>{section.title}</SectionTitle>
                      </Box>
                      <IconWrapper $expanded={expandedId === section.id}>
                        <ExpandMoreIcon />
                      </IconWrapper>
                    </AccordionHeader>

                    <AnimatePresence>
                      {expandedId === section.id && (
                        <AccordionContent
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <SectionBlock>
                            {section.blocks.map((block: TermBlock, bIndex: number) => {
                              if (block.type === "heading") {
                                return (
                                  <Typography
                                    key={bIndex}
                                    variant="h6"
                                    sx={{ mt: 2, mb: 1, fontWeight: 700, color: '#374151' }}
                                  >
                                    {block.text}
                                  </Typography>
                                );
                              }
                              if (block.type === "paragraph") {
                                return (
                                  <Paragraph
                                    key={bIndex}
                                    dangerouslySetInnerHTML={{ __html: block.text }}
                                  />
                                );
                              }
                              if (block.type === "list") {
                                return (
                                  <Box component="ul" key={bIndex} sx={{ pl: 3, mb: 2 }}>
                                    {block.items.map((item, i) => (
                                      <Box component="li" key={i} sx={{ mb: 1, color: '#4b5563' }} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                  </Box>
                                );
                              }
                              if (block.type === "link") {
                                return (
                                  <a key={bIndex} href={block.url} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                                    {block.text}
                                  </a>
                                );
                              }
                              return null;
                            })}
                          </SectionBlock>
                        </AccordionContent>
                      )}
                    </AnimatePresence>
                  </AccordionItem>
                ))
              ) : (
                <NoResults
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No results found for "{searchQuery}". Please try another search term.
                </NoResults>
              )}
            </AnimatePresence>
          </AccordionContainer>
        </ContentInner>
      </ContentWrapper>
    </Box>
  );
};

export default FaqPage;
