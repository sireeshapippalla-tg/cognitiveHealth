import { Typography } from "@mui/material";
import { getBaseUrl } from "../../utils/urlHelper";
import { FaqPageLayout } from "./FaqPageLayout";

const BehavioralHealthRcmFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Behavioral Health RCM With Generative AI",
    description:
      "Optimize your behavioral health revenue cycle management with our advanced solutions. Discover how our automation and analytics tools can streamline your operations and improve financial performance. Schedule a free consultation today.",
    url: `${baseUrl}/behavioral-health-rcm-with-generative-ai`,
    publisher: {
      "@type": "Organization",
      name: "CognitiveHealth Technologies",
    },
    mainEntity: [
      {
        "@type": "Question",
        "name": "What are the benefits of Behavioral Health RCM With Generative AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automating this process provides increased accuracy, efficiency, cost reduction, and faster turnaround times for healthcare providers."
        }
      },
      {
        "@type": "Question",
        "name": "How does CognitiveHealth improve Behavioral Health RCM With Generative AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our iCAN™ AI platform automates complex workflows, reducing manual intervention, minimizing errors, and accelerating the revenue cycle."
        }
      }
    ]};

  return (
    <FaqPageLayout
      seoTitle="Behavioral Health RCM With Generative AI | CognitiveHealth"
      seoDescription="Optimize your behavioral health revenue cycle management with our advanced solutions. Discover how our automation and analytics tools can streamline your operations and improve financial performance. Schedule a free consultation today."
      seoKeywords="Behavioral, Health, RCM, With, Generative, AI, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Behavioral Health Revenue Cycle Management with CognitiveHealth"
      heroSubtitle="In the realm of behavioral health, effective revenue cycle management (RCM) is paramount to ensuring the financial health and sustainability of organizations. CognitiveHealth stands at the forefront of this field, offering advanced AI-driven solutions tailored specifically for the unique challenges of behavioral health revenue cycle management. Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes, ultimately leading to improved financial performance."
      heroButtonUrl="/request-demo"
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
            Why Behavioral Health RCM is Unique
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Behavioral health RCM presents distinct challenges compared to
            general healthcare RCM. These include complex billing codes, varying
            insurance policies, and the necessity for meticulous documentation.
            CognitiveHealth's solutions are built to address these specific
            needs, providing behavioral health organizations with the tools
            required to navigate these complexities seamlessly.
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            fontWeight={600}
            color="var(--color-text-dark, #1f2937)"
            sx={{ mb: 2, mt: 3, fontSize: { xs: "1.1rem", md: "1.25rem" } }}
          >
            Introducing iCAN™ – Network of AI Agents for Healthcare Revenue
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
            CognitiveHealth's Al-powered solutions for behavioral health revenue
            cycle management are designed to transform your RCM processes,
            enhancing efficiency, reducing errors, and improving financial
            performance. By leveraging advanced automation and analytics tools,
            we help behavioral health organizations navigate the complexities of
            RCM with ease.
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
            systems. The team includes Al & GenAI Architects & developers,
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

export default BehavioralHealthRcmFaqPage;
