import { getBaseUrl } from "../../utils/urlHelper";
import { FaqPageLayout } from "./FaqPageLayout";
import {
  PageSubtitle,
  PageTitle,
  PageSectionHeading,
  PageParagraph,
} from "./faqPages.style";

const RevenueCycleManagementFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "FAQPage"],
    name: "Revenue Cycle Management With AI-Powered Solutions",
    description:
      "Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today.",
    url: `${baseUrl}/revenue-cycle-management-with-ai-powered-solutions`,
    publisher: {
      "@type": "Organization",
      name: "CognitiveHealth Technologies",
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the benefits of Revenue Cycle Management With AI-Powered Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Automating this process provides increased accuracy, efficiency, cost reduction, and faster turnaround times for healthcare providers.",
        },
      },
      {
        "@type": "Question",
        name: "How does CognitiveHealth improve Revenue Cycle Management With AI-Powered Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our iCAN™ AI platform automates complex workflows, reducing manual intervention, minimizing errors, and accelerating the revenue cycle.",
        },
      },
    ],
  };

  return (
    <FaqPageLayout
      seoTitle="Revenue Cycle Management With AI-Powered Solutions | CognitiveHealth"
      seoDescription="Discover how AI-powered solutions can transform your revenue cycle management. Our advanced automation and analytics tools streamline operations, enhance efficiency, and improve financial performance. Schedule a free demo today."
      seoKeywords="Revenue, Cycle, Management, With, AI-Powered, Solutions, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Revenue Cycle Management with AI-Powered Solutions"
      heroSubtitle="CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can streamline operations, enhance efficiency, and significantly improve financial performance."
      heroButtonUrl="/request-demo"
      section2Content={
        <>
          <PageSubtitle variant="subtitle2">
            The future
          </PageSubtitle>
          <PageTitle variant="h3" component="h2">
            AI-Powered Revenue Cycle Management
          </PageTitle>
          <PageParagraph variant="body1" paragraph>
            The traditional revenue cycle is riddled with manual processes,
            inefficiencies, and errors that can hinder financial performance.
            CognitiveHealth's iCAN™ platform addresses these challenges head-on
            by integrating intelligent process automation specifically tailored
            for healthcare. Our AI-powered solutions encompass everything from
            pre-encounter to patient discharge, ensuring a seamless and
            efficient revenue cycle.
          </PageParagraph>
          <PageSectionHeading variant="h5" component="h3">
            Introducing iCAN™ – Network of AI Agents for Healthcare Revenue
            Cycle Management
          </PageSectionHeading>
          <PageParagraph variant="body1" paragraph>
            iCAN™ is a Network of AI agents configured to run simple or complex
            workflows in the Healthcare Revenue Cycle. Built by CognitiveHealth,
            pioneers of healthcare process automation, AI powers iCAN™ and is
            purpose-built for the Healthcare Revenue Cycle.
          </PageParagraph>
        </>
      }
      scheduleDemoContent={
        <>
          <PageTitle variant="h3" component="h2">
            Schedule a FREE Demo Today!
          </PageTitle>

          <PageParagraph variant="body1" paragraph>
            Discover how CognitiveHealth's Al-powered solutions can transform
            your revenue cycle management. Our advanced automation and analytics
            tools are designed to streamline operations, enhance efficiency, and
            improve financial performance. Schedule a free demo today to see how
            our innovative solutions can benefit your organization.
          </PageParagraph>

          <PageParagraph variant="body1" paragraph>
            CognitiveHealth's team has extensive experience managing Healthcare
            RCM processes for small, medium, and large healthcare providers and
            systems. The team includes Al & GenAI Architects & developers,
            Healthcare Security and Privacy experts, and Healthcare Revenue
            Cycle SME's.
          </PageParagraph>
          <PageParagraph variant="body1" paragraph>
            This experienced team of CognitiveHealth has partnered with
            recognized health systems to build iCANT - Network of Al Agents.
          </PageParagraph>

          <PageParagraph variant="body1" paragraph>
            iCANTM platform is purpose-built for healthcare.
          </PageParagraph>

          <PageParagraph variant="body1" paragraph>
            We understand your concerns about privacy and security. At
            CognitiveHealth, our infrastructure meets the highest standards, and
            we actively follow the latest Al trust and risk guidelines to ensure
            your safety.
          </PageParagraph>
        </>
      }
    />
  );
};

export default RevenueCycleManagementFaqPage;
