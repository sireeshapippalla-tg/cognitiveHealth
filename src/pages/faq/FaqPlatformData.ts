import type { TermSection } from "./FaqData";

export const platformQuestions: TermSection[] = [
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
];
