import { Typography } from "@mui/material";
import { getBaseUrl } from "../../utils/urlHelper";
import { FaqPageLayout } from "./EligibilityVerificationFaqPage";

const HealthcareBackOfficeFaqPage = () => {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Healthcare Back Office With Advanced AI Solutions",
    description:
      "Discover how our cutting-edge solutions in healthcare back office automation, workflow optimization, and data analytics can transform your operations. Schedule a free demo today to experience the benefits firsthand.",
    url: `${baseUrl}/healthcare-back-office-with-advanced-ai-solutions`,
    publisher: {
      "@type": "Organization",
      name: "CognitiveHealth Technologies",
    },
  };

  return (
    <FaqPageLayout
      seoTitle="Healthcare Back Office With Advanced AI Solutions | CognitiveHealth"
      seoDescription="Discover how our cutting-edge solutions in healthcare back office automation, workflow optimization, and data analytics can transform your operations. Schedule a free demo today to experience the benefits firsthand."
      seoKeywords="Healthcare, Back, Office, With, Advanced, AI, Solutions, Healthcare RCM, Medical Billing, iCAN Platform"
      schema={schema}
      heroTitle="Revolutionize Your Healthcare Back Office With AI"
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
            Healthcare Back Office Solutions
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            As the healthcare industry faces increasing demands for efficiency
            and accuracy, the need for optimized back office operations has
            never been greater. The back office functions as the backbone of any
            healthcare organization, ensuring that administrative tasks are
            handled smoothly so that healthcare providers can focus on what they
            do best: caring for patients. At CognitiveHealth, we understand the
            unique challenges faced by healthcare organizations and are
            dedicated to providing solutions that not only meet but exceed these
            demands.
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
            Experience firsthand the transformative power of our healthcare back
            office solutions. Schedule a free demo today and see how Cognitive
            Health IT can help your organization achieve its full potential. Our
            team of experts is ready to demonstrate the unique value proposition
            of our services and how they can benefit your specific needs.
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

export default HealthcareBackOfficeFaqPage;
