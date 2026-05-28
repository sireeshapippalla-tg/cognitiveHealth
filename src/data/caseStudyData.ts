
import CaseStudies from "../assets/Resources/CaseStudies.webp"


export interface CaseStudy {
  id: string;
  type: "case-study";
  title: string;
  description: string;
  image: string;
  category?: string;
  link: string;
  metricValue: string;
  metricLabel: string;
}

export const caseStudyData: CaseStudy[] = [
  {
    id: "1",
    type: "case-study",
    title: "Large Health System Reduces Denials by 45% with iCAN™ Platform",
    description:
      "See how a major healthcare provider leveraged intelligent automation to dramatically reduce denials and improve revenue cycle efficiency.",
    image: CaseStudies,
    category: "Large Health System",
    link: "/case-studies/health-system-denials",
    metricValue: "45%",
    metricLabel: "Reduction in Denials",
  },
  {
    id: "2",
    type: "case-study",
    title: "Multi-Specialty Group Practice Automates Payment Posting",
    description:
      "Learn how a growing group practice automated their payment posting process, saving 200+ staff hours per month while improving accuracy.",
    image: CaseStudies,
    category: "Physician Practice",
    link: "/case-studies/payment-posting",
    metricValue: "200+",
    metricLabel: "Hours Saved Monthly",
  },
   {
    id: "3",
    type: "case-study",
    title: "Regional Hospital Network Streamlines Correspondence Management",
    description:
      "Discover how a regional hospital network transformed their correspondence management using AI-powered automation and intelligent document processing.",
    image: CaseStudies,
    category: "Hospital Network",
    link: "/case-studies/payment-posting",
    metricValue: "70%",
    metricLabel: "Hours Saved Monthly",
  },
   {
    id: "4",
    type: "case-study",
    title: "Academic Medical Center Optimizes Eligibility Discovery",
    description:
      "Explore how an academic medical center improved patient eligibility discovery rates by 60% using the iCAN™ platform.",
    image: CaseStudies,
    category: "Academic Medical Center",
    link: "/case-studies/eligibility-discovery",
    metricValue: "60%",
    metricLabel: "Better Discovery Rate",
  },
];
