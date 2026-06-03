import { Typography } from "@mui/material";
import { getBaseUrl } from "../../utils/urlHelper";
import { FaqPageLayout } from "./FaqPageLayout";

const HealthcareDocumentManagementFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Healthcare Document Management With Generative AI",
    description:
      "Streamline your healthcare document management with our advanced AI solutions. Discover how our tools can enhance efficiency, reduce errors, and improve financial performance. Schedule a free demo today.",
    url: `${baseUrl}/healthcare-document-management-with-generative-ai`,
    publisher: {
      "@type": "Organization",
      name: "CognitiveHealth Technologies",
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the benefits of Healthcare Document Management With Generative AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Automating this process provides increased accuracy, efficiency, cost reduction, and faster turnaround times for healthcare providers.",
        },
      },
      {
        "@type": "Question",
        name: "How does CognitiveHealth improve Healthcare Document Management With Generative AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our iCAN™ AI platform automates complex workflows, reducing manual intervention, minimizing errors, and accelerating the revenue cycle.",
        },
      },
    ],
  };

  return (
    <FaqPageLayout
      seoTitle="Healthcare Document Management With Generative AI | CognitiveHealth"
      seoDescription="Streamline your healthcare document management with our advanced AI solutions. Discover how our tools can enhance efficiency, reduce errors, and improve financial performance. Schedule a free demo today."
      seoKeywords="Healthcare, Document, Management, With, Generative, AI, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Healthcare Correspondence Document Management with CognitiveHealth's iCAN™ Platform"
      heroSubtitle="In today's healthcare landscape, effective document management is paramount for ensuring operational efficiency and maintaining compliance with regulatory standards. CognitiveHealth's iCAN™ platform offers a robust solution, integrating advanced AI technologies to streamline and enhance correspondence management processes in healthcare RCM. This service page explores the key features, benefits, and transformative impact of our AI-driven document management system for the healthcare industry, with a particular focus on healthcare correspondence management and automation."
      heroButtonUrl="/request-a-demo"
      section2Content={
        <>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 1,
              mt: 4,
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontWeight: 600,
              color: "primary.main",
              display: "block",
            }}
          >
            The future
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            color="var(--color-text-dark, #1f2937)"
            sx={{ mb: 3, mt: 2, fontSize: { xs: "1.4rem", md: "1.8rem" } }}
          >
            Introducing iCAN™ - Network of AI Agents for Healthcare Revenue
            Cycle Management
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            iCAN™ is a Network of AI agents configured to run simple or complex
            workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth,
            pioneers of healthcare process automation, AI powers iCAN™ and is
            purpose-built for the Healthcare Revenue Cycle.
          </Typography>
        </>
      }
      scheduleDemoContent={
        <>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            color="var(--color-text-dark, #1f2937)"
            sx={{
              mb: 3,
              mt: 4,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Schedule a FREE Demo Today!
          </Typography>

          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            In the dynamic world of healthcare, automating critical processes
            such as document management and correspondence handling is essential
            for maintaining operational efficiency and compliance.
            CognitiveHealth's iCANT platform provides a comprehensive solution
            that addresses these challenges head-on, empowering healthcare
            providers to focus on delivering exceptional patient care.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            By embracing automation, healthcare organizations can significantly
            reduce administrative burdens, enhance compliance, and improve
            overall performance. Experience the future of healthcare document
            management with CognitiveHealth's iCAN™ platform - a revolutionary
            approach to document automation and correspondence management.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            For healthcare providers looking to optimize their document
            management processes, CognitiveHealth's iCANT platform offers a
            comprehensive, scalable, and efficient solution. Embrace the
            transformative power of Al in healthcare document management and
            take the first step towards operational excellence today.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            CognitiveHealth's team has extensive experience managing Healthcare
            RCM processes for small, medium, and large healthcare providers and
            systems. The team includes Al & GenAl Architects & developers,
            Healthcare Security and Privacy experts, and Healthcare Revenue
            Cycle SME's.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            This experienced team of CognitiveHealth has partnered with
            recognized health systems to build iCANT - Network of Al Agents.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            iCANTM platform is purpose-built for healthcare.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            We understand your concerns about privacy and security. At
            CognitiveHealth, our infrastructure meets the highest standards, and
            we actively follow the latest Al trust and risk guidelines to ensure
            your safety.
          </Typography>
        </>
      }
    />
  );
};

export default HealthcareDocumentManagementFaqPage;
