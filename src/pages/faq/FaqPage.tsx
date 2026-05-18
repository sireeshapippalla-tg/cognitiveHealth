import  { useState, useMemo } from "react";
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

type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

type TermSection = {
  id: string;
  title: string;
  category: "Platform" | "Solutions" | "General";
  blocks: TermBlock[];
};

const FaqPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"Platform" | "Solutions" | "General">("Platform");

  const termsSections: TermSection[] = [
    // Platform Tab Questions
    {
      id: "platform-what-is-ican",
      category: "Platform",
      title: "What is iCAN™ ONE and how is it different from other automation tools?",
      blocks: [
        {
          type: "paragraph",
          text: "iCAN™ ONE is a unified network of specialized AI agents designed exclusively for healthcare revenue cycle management. Unlike generic automation tools, it combines:",
        },
        {
          type: "list",
          items: [
            "<strong>Purpose-built healthcare AI:</strong> Trained on 1,200+ payer rules, 20+ EMR integrations, and specialty-specific workflows",
            "<strong>Hybrid AI architecture:</strong> Large language models combined with specialized healthcare domain models trained on claims, physician notes, payer policies, and regulatory frameworks",
            "<strong>Intelligent orchestration:</strong> AI agents work together across your entire revenue cycle, sharing insights and coordinating workflows from registration through final payment",
            "<strong>Continuous learning:</strong> Every claim processed, denial overturned, and authorization obtained makes your AI agents smarter",
          ],
        },
        {
          type: "paragraph",
          text: "Built by revenue cycle veterans who understand your challenges because they've lived them, iCAN™ ONE delivers accuracy that generic AI simply cannot match.",
        },
      ],
    },
    {
      id: "platform-emr-systems",
      category: "Platform",
      title: "Which EMR systems and healthcare platforms does iCAN™ ONE integrate with?",
      blocks: [
        {
          type: "paragraph",
          text: "iCAN™ ONE offers comprehensive interoperability with native support for all major healthcare standards and systems:",
        },
        {
          type: "list",
          items: [
            "<strong>EMR/EHR Systems:</strong> Epic, Cerner, Meditech, athenahealth, NextGen, and 15+ other major platforms",
            "<strong>Integration Standards:</strong> HL7, FHIR, X12 EDI, and modern REST APIs",
            "<strong>Connection Methods:</strong> UI-based automation, API integration, or traditional file-based interfaces",
          ],
        },
        {
          type: "paragraph",
          text: "No expensive custom development required—our pre-configured workflows and seamless integrations mean you see value fast. Our platform connects to any EMR through multiple methods, ensuring compatibility with your existing technology stack.",
        },
      ],
    },
    {
      id: "platform-security-compliance",
      category: "Platform",
      title: "What security and compliance standards does the platform follow?",
      blocks: [
        {
          type: "paragraph",
          text: "CognitiveHealth follows rigorous security protocols and industry best practices to protect your PHI and financial data:",
        },
        {
          type: "list",
          items: [
            "<strong>Security Standards:</strong> We follow HITRUST CSF and SOC 2 Type II protocols with a 95%+ uptime commitment",
            "<strong>Enterprise-grade encryption:</strong> Data protected at rest and in transit using industry-standard encryption",
            "<strong>Access controls:</strong> Role-based access controls (RBAC) with granular permission management",
            "<strong>Audit compliance:</strong> Comprehensive audit logging for every transaction and user action",
            "<strong>Deployment flexibility:</strong> Cloud-hosted (multi-tenant or single-tenant) or private cloud options to meet your security requirements",
          ],
        },
        {
          type: "paragraph",
          text: "Your data stays fully protected and audit-ready at all times. We maintain rigorous security protocols to ensure compliance with healthcare regulations and protect sensitive information.",
        },
      ],
    },
    {
      id: "platform-implementation-support",
      category: "Platform",
      title: "How long does implementation take and what support do we receive?",
      blocks: [
        {
          type: "paragraph",
          text: "<strong>Implementation Timeline:</strong> Most organizations are operational in 4-6 weeks, thanks to our pre-configured workflows and seamless integration capabilities.",
        },
        {
          type: "paragraph",
          text: "<strong>White-Glove Enterprise Support includes:</strong>",
        },
        {
          type: "list",
          items: [
            "<strong>Dedicated Customer Success Manager:</strong> Your single point of contact throughout implementation and beyond",
            "<strong>24/7/365 Technical Support:</strong> Response time under 15 minutes for critical issues",
            "<strong>Quarterly Business Reviews:</strong> Ongoing optimization and performance analysis",
            "<strong>On-site Training:</strong> Available for large deployments to ensure your team is fully prepared",
            "<strong>Continuous Updates:</strong> Regular platform enhancements and regulatory updates at no additional cost",
          ],
        },
        {
          type: "paragraph",
          text: "We partner with you every step of the way to ensure successful deployment and sustained value delivery.",
        },
      ],
    },
    {
      id: "platform-scale",
      category: "Platform",
      title: "Can iCAN™ ONE scale with our organization as we grow?",
      blocks: [
        {
          type: "paragraph",
          text: "<strong>Proven at enterprise scale.</strong> iCAN™ ONE is deployed across health systems processing 10M+ transactions monthly, handling:",
        },
        {
          type: "list",
          items: [
            "<strong>Multiple facilities:</strong> Seamlessly manage operations across 12+ facilities with zero disruption",
            "<strong>Diverse payer portfolios:</strong> Process claims across hundreds of payer contracts and policies",
            "<strong>Varied specialties:</strong> Support specialty-specific workflows across different service lines",
            "<strong>Complex regulations:</strong> Automatically adapt to constantly evolving compliance requirements",
          ],
        },
        {
          type: "paragraph",
          text: "Our enterprise-grade infrastructure is built for reliability and scale, with flexible deployment options that grow with your needs. Whether you're a single facility or a multi-state health system, iCAN™ ONE scales to meet your requirements.",
        },
      ],
    },

    // Solutions Tab Questions
    {
      id: "solutions-offerings",
      category: "Solutions",
      title: "What specific solutions does CognitiveHealth offer for revenue cycle management?",
      blocks: [
        {
          type: "paragraph",
          text: "CognitiveHealth provides a comprehensive suite of AI-powered solutions covering the entire revenue cycle:",
        },
        {
          type: "list",
          items: [
            "<strong>Payment Posting & Advanced Reconciliation:</strong> Automated cash posting with 93.8% reconciliation accuracy",
            "<strong>Lockbox Management:</strong> Streamlined processing of patient and insurance payments",
            "<strong>Denials Workflow:</strong> Intelligent denial prevention and resolution, reducing denials by 60%",
            "<strong>Eligibility Discovery:</strong> Automated patient eligibility verification and benefits discovery",
            "<strong>Contract Analysis:</strong> AI-powered payer contract review and underpayment detection",
            "<strong>Pre-Bill Review:</strong> Claims scrubbing and validation before submission to maximize clean claims",
          ],
        },
        {
          type: "paragraph",
          text: "Each solution leverages specialized AI agents that work together to optimize your entire revenue cycle workflow.",
        },
      ],
    },
    {
      id: "solutions-results",
      category: "Solutions",
      title: "What results can we expect from implementing CognitiveHealth solutions?",
      blocks: [
        {
          type: "paragraph",
          text: "Healthcare organizations using CognitiveHealth solutions consistently achieve breakthrough results:",
        },
        {
          type: "list",
          items: [
            "<strong>93.8% Clean Claim and Reconciliation Accuracy:</strong> Virtually eliminate posting errors",
            "<strong>60% Reduction in Denial Rates:</strong> Proactive prevention and faster resolution",
            "<strong>$2M+ Annual Revenue Recovery:</strong> Per facility through improved cash flow and reduced leakage",
            "<strong>80% Decrease in Manual Work:</strong> Free your team to focus on high-value activities",
            "<strong>41.6% Faster Turnaround:</strong> From 3-5 days to under 4 hours for key processes",
            "<strong>26% Faster Cash Application:</strong> Improved A/R and accelerated cash flow",
            "<strong>85% Staff Savings:</strong> Redirect efforts to value-added patient services",
          ],
        },
        {
          type: "paragraph",
          text: "Join 50+ healthcare organizations processing 10M+ claims monthly with proven, measurable results.",
        },
      ],
    },
    {
      id: "solutions-payment-posting",
      category: "Solutions",
      title: "How does the Payment Posting & Reconciliation solution work?",
      blocks: [
        {
          type: "paragraph",
          text: "Our AI-powered payment posting solution transforms end-of-day reconciliation from a time-consuming manual process to an automated, accurate workflow:",
        },
        {
          type: "list",
          items: [
            "<strong>Automated cash posting:</strong> Intelligent matching and posting of patient and insurance payments",
            "<strong>Advanced reconciliation:</strong> Cross-reference payments against EOBs, ERAs, and deposit records",
            "<strong>Error reduction:</strong> Eliminate data entry errors and discrepancies",
            "<strong>Real-time visibility:</strong> Instant dashboards showing payment status and reconciliation progress",
            "<strong>Remote-ready:</strong> Seamlessly transition to work-from-home models with no workflow disruption",
          ],
        },
        {
          type: "paragraph",
          text: "Organizations report reducing reconciliation complexity by over 50%, cutting onshore oversight nearly in half, and achieving 93.8% fully reconciled payments with virtually zero posting errors.",
        },
      ],
    },
    {
      id: "solutions-denial-rates",
      category: "Solutions",
      title: "Can CognitiveHealth help reduce our denial rates and improve recovery?",
      blocks: [
        {
          type: "paragraph",
          text: "<strong>Yes—dramatically.</strong> Our Denials Workflow solution combines proactive prevention with intelligent resolution:",
        },
        {
          type: "list",
          items: [
            "<strong>Predictive denial prevention:</strong> AI identifies potential denials before claims are submitted",
            "<strong>Root cause analysis:</strong> Automatically identify patterns and systemic issues causing denials",
            "<strong>Intelligent work queues:</strong> Priority-based routing ensures high-value denials get immediate attention",
            "<strong>Automated appeal generation:</strong> AI drafts appeals with relevant clinical and policy documentation",
            "<strong>Continuous learning:</strong> Every denial overturned improves future prevention accuracy",
          ],
        },
        {
          type: "paragraph",
          text: "Healthcare organizations achieve a 60% reduction in denial rates and recover $2M+ annually per facility through improved workflows and faster resolution. Our AI agents work 24/7 to protect your revenue.",
        },
      ],
    },
    {
      id: "solutions-staff-productivity",
      category: "Solutions",
      title: "How do your solutions improve staff productivity and satisfaction?",
      blocks: [
        {
          type: "paragraph",
          text: "CognitiveHealth solutions transform your team's work experience by eliminating tedious manual tasks and enabling focus on meaningful, high-value activities:",
        },
        {
          type: "list",
          items: [
            "<strong>85% Staff Savings:</strong> Redirect efforts from repetitive data entry to patient-facing services and complex problem-solving",
            "<strong>Improved job satisfaction:</strong> Teams work more collaboratively and efficiently with higher engagement across roles",
            "<strong>Process transparency:</strong> Uncover hidden workflow gaps and inefficiencies you didn't know existed",
            "<strong>Seamless remote work:</strong> Enable work-from-home models without workflow disruption",
            "<strong>Reduced burnout:</strong> Remove frustrating manual tasks that contribute to staff turnover",
            "<strong>Skill development:</strong> Empower your team to handle higher-level analytical and strategic work",
          ],
        },
        {
          type: "paragraph",
          text: 'As one Director of RCM noted: "Our team now works more collaboratively and efficiently, with higher job satisfaction across onshore and offshore roles."',
        },
      ],
    },

    //general tab questions
  
    {
      id: "eligibility-denial-management",
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
      category: "General",
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
    let filtered = termsSections;
    
    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (section) =>
          section.title.toLowerCase().includes(lowerQuery) ||
          section.blocks.some(
            (block) =>
              (block.type === "paragraph" && block.text.toLowerCase().includes(lowerQuery)) ||
              (block.type === "list" && block.items.some(item => item.toLowerCase().includes(lowerQuery)))
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
            <HeroTitle variant="h1">
             Frequently Asked Questions
            </HeroTitle>
            <HeroSubtitle>
              Everything you need to know about the iCAN™ ONE Platform and our AI-powered Revenue Cycle Solutions
            </HeroSubtitle>
          </motion.div>

          <SearchContainer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <SearchInputWrapper>
              <SearchIcon sx={{ color: "var(--color-text-muted)", mr: 1, fontSize: 24 }} />
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
                            <Box sx={{
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "var(--color-primary-dark)",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              mb: 1
                            }}>
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
                              {section.blocks.map((block: TermBlock, bIndex: number) => {
                                if (block.type === "heading") {
                                  return (
                                    <Typography
                                      key={bIndex}
                                      variant="h6"
                                      sx={{ mt: 3, mb: 2, fontWeight: 500, color: 'var(--color-gray-900)', fontSize: '18px' }}
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
                                      dangerouslySetInnerHTML={{ __html: block.text }}
                                    />
                                  );
                                }
                                if (block.type === "list") {
                                  return (
                                    <ListParagraph key={bIndex}>
                                      <ul>
                                        {block.items.map((item, i) => (
                                          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
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
                              })}
                            </SectionBlock>
                          </AccordionContent>
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

            {/* CTA SECTION */}
            <CtaSection>
              <CtaTitle>Still Have Questions?</CtaTitle>
              <CtaText>
                Ready to experience the CognitiveHealth difference? Connect with our team to learn how we can transform your revenue cycle operations.
              </CtaText>
              <CtaButton onClick={() =>
                navigate(ROUTES.REQUEST_DEMO, {
                  state: { fromLabel: "FAQ", fromPath: "/faq" },
                })}>
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
