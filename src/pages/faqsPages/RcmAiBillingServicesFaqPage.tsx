import { Typography } from "@mui/material";
import { getBaseUrl } from "../../utils/urlHelper";
import { FaqPageLayout } from "./FaqPageLayout";

const RcmAiBillingServicesFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RCM AI-Powered Billing Services",
    description:
      "Discover how our advanced AI Powered RCM billing services can enhance your healthcare revenue cycle. Explore our solutions for automation, efficiency, and improved financial performance. Schedule a free consultation today.",
    url: `${baseUrl}/rcm-ai-powered-billing-services`,
    publisher: {
      "@type": "Organization",
      name: "CognitiveHealth Technologies",
    },
  };

  return (
    <FaqPageLayout
      seoTitle="RCM AI-Powered Billing Services | CognitiveHealth"
      seoDescription="Discover how our advanced AI Powered RCM billing services can enhance your healthcare revenue cycle. Explore our solutions for automation, efficiency, and improved financial performance. Schedule a free consultation today."
      seoKeywords="RCM, AI-Powered, Billing, Services, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="RCM in Healthcare"
      heroSubtitle="In today's fast-paced healthcare environment, efficient revenue cycle management (RCM) is crucial for financial stability and growth. CognitiveHealth introduces iCAN™, a groundbreaking AI-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. Our innovative RCM billing services streamline processes, reduce errors, and enhance overall financial performance."
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
            Revolutionizing RCM in Healthcare
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            fontWeight={600}
            color="var(--color-text-dark, #1f2937)"
            sx={{ mb: 2, mt: 3, fontSize: { xs: "1.1rem", md: "1.25rem" } }}
          >
            The Importance of Effective RCM in Healthcare
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Effective RCM is the backbone of any successful healthcare
            organization. From patient registration to final payment, every step
            in the RCM cycle must be managed meticulously to ensure optimal
            revenue flow. CognitiveHealth's AI-driven solutions address common
            challenges in RCM, providing healthcare organizations with the tools
            they need to thrive.
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            fontWeight={600}
            color="var(--color-text-dark, #1f2937)"
            sx={{ mb: 2, mt: 3, fontSize: { xs: "1.1rem", md: "1.25rem" } }}
          >
            Introducing iCAN™ – Network of AI Agents for Healthcare RCM and
            Billing
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            iCAN™ is a Network of AI agents configured to run simple or complex
            workflows in the Healthcare Revenue Cycle, it may be end-to-end RCM
            or just the billing. Built by CognitiveHealth, pioneers of
            healthcare process automation, AI powers iCAN™ and is purpose-built
            for the Healthcare Revenue Cycle.
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
            Discover how CognitiveHealth's Al-powered billing services within
            your RCM can transform your revenue cycle management. Our advanced
            automation and analytics tools are designed to streamline processes,
            enhance efficiency, and improve financial performance. Schedule a
            free demo today to see how our innovative solutions can benefit your
            organization.
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

export default RcmAiBillingServicesFaqPage;
