export type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

export type TermSection = {
  id: string;
  title: string;
  category: "Platform" | "Solutions" | "General";
  blocks: TermBlock[];
};

export const termsSections: TermSection[] = [
  // Platform Tab Questions
  {
    id: "platform-what-is-ican-agentic",
    category: "Platform",
    title: "What is the iCAN™ ONE platform and how does it utilize Agentic AI?",
    blocks: [
      {
        type: "paragraph",
        text: "iCAN™ ONE is an enterprise-grade AI orchestration platform that deploys specialized <strong>Autonomous AI Agents</strong> to manage healthcare revenue cycle workflows. Unlike traditional RPA, our <strong>Agentic AI</strong> uses Generative AI and Machine Learning to reason through complex tasks, adapt to payer rule changes in real-time, and handle unstructured data without manual scripting.",
      },
    ],
  },
  {
    id: "platform-differ-rcm",
    category: "Platform",
    title: "How does iCAN™ ONE differ from traditional Revenue Cycle Management (RCM) automation?",
    blocks: [
      {
        type: "paragraph",
        text: 'Traditional RCM automation is often rigid and "breaks" when data formats change. iCAN™ ONE uses <strong>Intent-Based Automation</strong>, meaning our agents understand the <em>goal</em> of a task (e.g., "Resolve this denial") rather than just following a series of clicks. This allows for a touchless workflow that manages exceptions autonomously.',
      },
    ],
  },
  {
    id: "platform-ehr-pm",
    category: "Platform",
    title: "Which EHR and Practice Management (PM) systems does CognitiveHealth integrate with?",
    blocks: [
      {
        type: "paragraph",
        text: "iCAN™ ONE offers seamless, bi-directional integration with all major healthcare platforms, including <strong>Epic, Cerner (Oracle Health), Meditech, Athenahealth, and eClinicalWorks, NextGen</strong>, We utilize standard <strong>HL7, FHIR APIs</strong>, and secure database connectors to ensure data integrity without requiring changes to your existing IT infrastructure.",
      },
    ],
  },
  {
    id: "platform-unstructured-data",
    category: "Platform",
    title: "Can iCAN™ ONE handle unstructured data like medical records and payer correspondence?",
    blocks: [
      {
        type: "paragraph",
        text: "Yes. Our platform utilizes Large Language Models to interpret unstructured formats, including PDF medical records, scanned payer letters, and handwritten notes, converting them into actionable data for claim resolution.",
      },
    ],
  },
  {
    id: "platform-security-compliance",
    category: "Platform",
    title: "Is CognitiveHealth’s platform secure and complaint with HIPAA and other industry standards?",
    blocks: [
      {
        type: "paragraph",
        text: "CognitiveHealth is operates in a <strong>HIPAA compliant</strong> and <strong>SOC 2 Type II certified</strong> data center. All data is protected with AES-256 encryption at rest and TLS 1.2+ encryption in transit. We conduct regular third-party penetration testing and vulnerability assessments to ensure enterprise-grade security.",
      },
    ],
  },
  {
    id: "platform-human-in-the-loop",
    category: "Platform",
    title: 'Does the platform require a "Human-in-the-Loop" (HITL)?',
    blocks: [
      {
        type: "paragraph",
        text: "Yes. While iCAN™ ONE achieves up to 95% autonomy in routine workflows, our <strong>Human-in-the-Loop (HITL) framework</strong> ensures that high-value exceptions or complex clinical denials etc are automatically routed to your staff for final verification, maintaining 100% auditability and control.",
      },
    ],
  },
  {
    id: "platform-data-hosted",
    category: "Platform",
    title: "Where is the data hosted and how is Protected Health Information (PHI) handled?",
    blocks: [
      {
        type: "paragraph",
        text: "iCAN™ ONE is hosted on secure, <strong>ISO 27001, NIST 800 certified private cloud infrastructure</strong>. We follow the principle of least privilege (PoLP), ensuring that PHI is only accessed by authorized agents and system processes required to complete a specific revenue cycle task.",
      },
    ],
  },
  {
    id: "platform-implementation-timeline",
    category: "Platform",
    title: "What is the typical implementation timeline for iCAN™ ONE?",
    blocks: [
      {
        type: "paragraph",
        text: 'A standard deployment typically takes <strong>4 to 8 weeks</strong> from initial configuration to "Go-Live." Our modular architecture allows organizations to start with a single workflow (e.g., Cash Posting or low dollar denials) and scale to a full agent network across the entire revenue cycle within months.',
      },
    ],
  },
  {
    id: "platform-roi",
    category: "Platform",
    title: "What kind of ROI can healthcare organizations expect from Agentic AI?",
    blocks: [
      {
        type: "paragraph",
        text: "Organizations using iCAN™ ONE typically realize a <strong>40% to 80% reduction in operational costs</strong> for automated workflows. Key performance indicators (KPIs) include a 40% acceleration in cash application, a significant reduction in A/R days, and near-zero error rates in payment posting.",
      },
    ],
  },
  {
    id: "platform-staff-transition",
    category: "Platform",
    title: "How does CognitiveHealth support our staff during the transition to AI agents?",
    blocks: [
      {
        type: "paragraph",
        text: "We provide a comprehensive <strong>Change Management and Training</strong> program. Rather than replacing staff, iCAN™ ONE is designed to augment your team, removing the burden of repetitive data entry so your specialists can focus on high-value, complex clinical advocacy and patient experience.",
      },
    ],
  },
  {
    id: "platform-scalable",
    category: "Platform",
    title: "Is iCAN™ ONE scalable for large health systems and MSOs?",
    blocks: [
      {
        type: "paragraph",
        text: "Absolutely. The iCAN™ ONE architecture is built for <strong>enterprise scalability</strong>, currently processing over <strong>10 million claims monthly</strong>. Whether you are a specialized physician group or a 4,000+ bed health system, the platform scales dynamically to match your claim volume.",
      },
    ],
  },
  {
    id: "platform-getting-started",
    category: "Platform",
    title: "How do I get started with a CognitiveHealth performance assessment?",
    blocks: [
      {
        type: "paragraph",
        text: "You can begin by taking our <a href=\"/assessment\" style=\"text-decoration: none; color: #3b82f6;\">Interactive RCM Assessment</a>. Our team will then provide a <strong>CognitiveHealth Insights Report</strong>, detailing your potential for automation, projected ROI, and a customized roadmap for deploying your first AI agent network.",
      },
    ],
  },

  // Solutions Tab Questions
  {
    id: "solutions-offerings",
    category: "Solutions",
    title:
      "What specific solutions does CognitiveHealth offer for revenue cycle management?",
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
    title:
      "What results can we expect from implementing CognitiveHealth solutions?",
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
    title:
      "Can CognitiveHealth help reduce our denial rates and improve recovery?",
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

  // General tab questions
  {
    id: "eligibility-denial-management",
    category: "General",
    title:
      "Eligibility verification and denial management AI automation in medical billing",
    blocks: [
      {
        type: "paragraph",
        text: `In the ever-evolving landscape of healthcare, efficient revenue cycle management (RCM) is paramount for maintaining 
        financial health and ensuring the sustainability of healthcare organizations. Cognitive Health's iCAN™ platform leverages
        advanced AI technology to revolutionize <a href="/eligibility-verification-and-denial-management-ai-automation" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">
        eligibility verification and denial management</a> processes, addressing some of the most persistent challenges in medical billing. This service page explores the transformative impact of automation in these
        critical areas, providing insights into how CognitiveHealth's solutions enhance operational efficiency and financial performance.`,
      },
    ],
  },
  {
    id: "healthcare-correspondence-document-management",
    category: "General",
    title:
      "Healthcare correspondence document management with CognitiveHealth's iCAN™ Platform",
    blocks: [
      {
        type: "paragraph",
        text: `CognitiveHealth's iCAN™ platform offers a robust solution, integrating advanced AI technologies to streamline and enhance
        <a href="/healthcare-document-management-with-generative-ai" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">correspondence management </a> 
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
                challenges of <a href="/behavioral-health-rcm-with-generative-ai" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> behavioral health revenue cycle management </a>.
                Our comprehensive suite of tools, including iCAN™, is designed to enhance efficiency, reduce errors, and streamline processes,
                ultimately leading to improved financial performance.`,
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
                <a href="/revenue-cycle-management-with-ai-powered-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> revenue cycle management </a>
              (RCM) and administrative workflows. With our advanced automation and analytics tools, healthcare organizations can
              streamline operations, enhance efficiency, and significantly improve financial performance.`,
      },
    ],
  },
  {
    id: "optimizing-healthcare-cash-posting",
    category: "General",
    title:
      "Optimizing healthcare cash posting with CognitiveHealth's iCAN™ Platform",
    blocks: [
      {
        type: "paragraph",
        text: `Cash posting, a critical component of the RCM process, ensures accurate and timely recording of payments received from
                patients and insurance companies. However, manual cash posting can be time-consuming and prone to errors, leading to
                delays in revenue recognition and increased administrative costs. CognitiveHealth's iCAN™ platform offers a revolutionary
                solution with its <a href="/streamline-your-cash-posting-with-automation-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> AI-driven cash posting automation </a>. This service page explores how CognitiveHealth's iCAN™ platform
                transforms cash posting and overall revenue cycle management for healthcare providers.`,
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
        CognitiveHealth™ offers cutting-edge <a href="/ai-driven-medical-billing-services-for-enhanced-revenue-cycle-management" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> medical billing </a>
        services designed to enhance efficiency, reduce errors, and streamline workflows. Our AI-driven solutions provide tailored support for healthcare organizations of all sizes.`,
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
              <a href="/healthcare-back-office-with-advanced-ai-solutions" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> healthcare back office </a>. 
              Our services leverage cutting-edge technologies, including artificial intelligence (AI) and data analytics, to streamline processes, reduce errors, and enhance productivity.`,
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
                Our innovative <a href="/rcm-ai-powered-billing-services" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> 
                RCM </a> billing services streamline processes, reduce errors, and enhance overall financial performance.`,
      },
    ],
  },
  {
    id: "transforming-healthcare-claims-processing",
    category: "General",
    title:
      "Transforming healthcare claims processing with CognitiveHealth's AI-driven solutions",
    blocks: [
      {
        type: "paragraph",
        text: `Efficient claims processing is critical to maintaining financial stability and operational efficiency. CognitiveHealth leverages advanced AI technology 
              to revolutionize <a href="/healthcare-claims-processing-with-ai-automation" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer">
               healthcare claims processing </a>, offering automated, streamlined, and accurate solutions that enhance overall performance. This service page delves into the transformative 
               capabilities of CognitiveHealth's iCAN™ platform, showcasing how automated claims processing can redefine healthcare claims management.`,
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
              and sustainability. CognitiveHealth offers tailored <a href="/specialty-medical-billing-with-generative-ai-rcm" style="text-decoration: none; color: #3b82f6;" target="_blank" rel="noopener noreferrer"> specialty medical billing </a> services designed to address the unique
            challenges faced by specialty practices. Our advanced AI-driven solutions streamline processes, reduce errors, and enhance
            overall financial performance, making us a leader in specialty revenue cycle management.`,
      },
    ],
  },
];
