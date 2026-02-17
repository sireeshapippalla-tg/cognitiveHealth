import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  ContentWrapper,
  ContentInner,
  // PageTitle,
  // UpdatedText,
  SectionBlock,
  SectionTitle,
  Paragraph,
  StyledList,
  StyledListItem,
  UpdatedBadge,
} from "./Faq.styles";

type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

type TermSection = {
  id: string;
  title: string;
  blocks: TermBlock[];
};

const FaqPage = () => {
  const termsSections: TermSection[] = [
    {
      id: "eligibility-denial-management",
      title:
        "Eligibility verification and denial management Al automation In medical billing",
      blocks: [
        {
          type: "paragraph",
          text: `In the ever-evolving landscape of healthcare, efficient revenue cycle management (RCM) is paramount for maintaining 
          financial health and ensuring the sustainability of healthcare organizations. Cognitive Health's iCAN™ platform leverages
          advanced Al technology to revolutionize <a href="https://cognitivehealthit.com/eligibility-verification-and-denial-management-ai-automation/" style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer">
          eligibility verification and denial management</a> processes, addressing some of the most persistent challenges in medical billing. This service page explores the transformative impact of automation in these
          critical areas, providing insights into how CognitiveHealth's solutions enhance operational efficiency and financial performance.`,
        },
      ],
    },

    {
      id: "healthcare-correspondence-document-management",
      title:
        "Healthcare correspondence document management with CognitiveHealth's iCAN™ Platform",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth's iCAN™ platform offers a robust solution,integrating advanced Al technologies to streamline and enhance
          <a href="https://cognitivehealthit.com/healthcare-document-management-with-generative-ai/" style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer">correspondence management </a> 
          processes in healthcare RCM. This service page explores the key features, benefits,and transformative impact of our Al-driven document management system for 
          the healthcare industry, with a particular focus on healthcare correspondence management and automation.`,
        },
      ],
    },

     {
      id: "behavioral-health-revenue-cycle-management",
      title:
        "Behavioral health revenue cycle management with CognitiveHealth",
      blocks: [
        {
          type: "paragraph",
          text: `Effective revenue cycle management (RCM) is paramount to ensuring the financial health and sustainability of organizations.
                  CognitiveHealth stands at the forefront of this field, offering advanced Al-driven solutions tailored specifically for the unique
                  challenges of  <a href=" https://cognitivehealthit.com/behavioral-health-rcm-with-generative-ai/ " style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> behavioral health revenue cycle management </a>.
                  Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes,
                  ultimately leading to improved financial performance.`

        },
      ],
    },

     {
      id: "revolutionize-healthcare with-al-agents",
      title:
        "Revolutionize the healthcare revenue cycle with Al agents",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth introduces iCAN™, a groundbreaking Al-driven solution designed to revolutionize 
                  <a href=" https://cognitivehealthit.com/revenue-cycle-management-with-ai-powered-solutions " style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> revenue cycle management </a>
                (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can
                streamline operations, enhance efficiency, and significantly improve financial performance.`
        },
      ],
    },

     {
      id: "optimizing-healthcare-cash-posting",
      title:
        "Optimizing healthcare cash posting with CognitiveHealth's iCAN™ Platform",
      blocks: [
        {
          type: "paragraph",
          text: `Cash posting, a critical component of the RCM process, ensures accurate and timely recording of payments received from
                  patients and insurance companies. However, manual cash posting can be time-consuming and prone to errors, leading to
                  delays in revenue recognition and increased administrative costs. CognitiveHealth's iCAN™ platform offers a revolutionary
                  solution with its  <a href=" https://cognitivehealthit.com/streamline-your-cash-posting-with-automation-solutions " style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> Al-driven cash posting automation </a>. This service page explores how CognitiveHealth's iCAN™ platform
                  transforms cash posting and overall revenue cycle management for healthcare providers.`
        },
      ],
    },

    { 
     id: "al-powered-rpa-medical-billing",
      title:
        "Al powered RPA in medical billing and revenue cycle management",
      blocks: [
        {
          type: "paragraph",
          text: `Are you seeking to optimize your medical billing processes and improve your revenue cycle management? 
          CognitiveHealth™ offers cutting-edge  <a href=" https://cognitivehealthit.com/ai-driven-medical-billing-services-for-enhanced-revenue-cycle-management" style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> medical billing </a>
          services designed to enhance efficiency, reduce errors, and streamline workflows.Our A-driven solutions provide tailored support for healthcare organizations of all sizes.`
        },
      ],
    },

    { 
     id: "revolutionize-healthcare-back-office-with-al",
      title:
        "Revolutionize your healthcare back office with Al",
      blocks: [
        {
          type: "paragraph",
          text: `At CognitiveHealth, we specialize in providing advanced solutions designed to optimize your  
                <a href="https://cognitivehealthit.com/healthcare-back-office-with-advanced-ai-solutions" style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> healthcare back office </a>. 
                Our services leverage cutting-edge technologies, including artificial intelligence (Al) and data analytics, to streamline processes,reduce errors, and enhance productivity.`
        },
      ],
    },

     { 
     id: "rcm-in-healthcare",
      title:
        "RCM in healthcare",
      blocks: [
        {
          type: "paragraph",
          text: `CognitiveHealth introduces iCAN™, a groundbreaking Al-driven solution designed to revolutionize revenue cycle management (RCM) and administrative workflows. 
                  Our innovative  <a href=" https://cognitivehealthit.com/rcm-ai-powered-billing-services " style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> 
                  RCM </a>billing services streamline processes, reduce errors, and enhance overall financial performance.`
        },
      ],
    },

     { 
     id: "transforming-healthcare-claims-processing",
      title:
        "Transforming healthcare claims processing with CognitiveHealth's Al-driven solutions",
      blocks: [
        {
          type: "paragraph",
          text: `Efficient claims processing is critical to maintaining financial stability and operational efficiency.CognitiveHealth leverages advanced Al technology 
                to revolutionize <a href=" https://cognitivehealthit.com/healthcare-claims-processing-with-ai-automation " style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer">
                 healthcare claims processing </a>, offering automated, streamlined, and accurate solutions that enhance overall performance. This service page delves into the transformative 
                 capabilities of CognitiveHealth's iCANT platform, showcasing how automated claims processing can redefine healthcare claims management.`
        },
      ],
    },

     { 
     id: "specialty-medical-billing-with-generative-ai-rcm",
      title:
        "Specialty medical billing with generative Al RCM",
      blocks: [
        {
          type: "paragraph",
          text: `In the specialized fields of healthcare, efficient revenue cycle management (RCM) is crucial to maintaining financial health
                and sustainability. CognitiveHealth offers tailored <a href="https://cognitivehealthit.com/specialty-medical-billing-with-generative-ai-rcm" style="text-decoration: none; color: #1a73e8;" target="_blank" rel="noopener noreferrer"> specialty medical billing </a> services designed to address the unique
              challenges faced by specialty practices. Our advanced Al-driven solutions streamline processes, reduce errors, and enhance
              overall financial performance, making us a leader in specialty revenue cycle management.`
        },
      ],
    },
  ];

  
  
 
  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroInner>
          <HeroTitle>FAQ</HeroTitle>
          <HeroSubtitle>CognitiveHealthIT.com</HeroSubtitle>
          <UpdatedBadge>Version Date: 11/01/2024</UpdatedBadge>
        </HeroInner>
      </HeroSection>

      {/* CONTENT */}
      <ContentWrapper>
        <ContentInner>
          {/* <PageTitle>Privacy Policy</PageTitle>
          <UpdatedText>Last Updated: January 1, 2024</UpdatedText> */}

          {termsSections.map((section) => (
            <SectionBlock key={section.id} id={section.id}>
              <SectionTitle>{section.title}</SectionTitle>

              {section.blocks.map((block: TermBlock, index: number) => {
                if (block.type === "heading") {
                  return <SectionTitle key={index}>{block.text}</SectionTitle>;
                }
                if (block.type === "paragraph") {
                  return (
                    <Paragraph
                      key={index}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );
                }
                if (block.type === "list") {
                  return (
                    <StyledList key={index}>
                      {block.items.map((item: string, i: number) => (
                        <StyledListItem
                          key={i}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </StyledList>
                  );
                }

                if (block.type === "link") {
                  return (
                    <a key={index} href={block.url}>
                      {block.text}
                    </a>
                  );
                }

                return null;
              })}
            </SectionBlock>
          ))}
        </ContentInner>
      </ContentWrapper>
    </>
  );
};

export default FaqPage;
