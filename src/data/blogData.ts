import BlogDenialManagement from "../assets/MediaCards/blog_denial_management.webp";
import BlogDataCapture from "../assets/MediaCards/blog_data_capture.webp";
import BlogRevenueCycle from "../assets/MediaCards/blog_revenue_cycle.webp";
import BlogCorrespondenceManagement from "../assets/MediaCards/blog_correspondence_management.webp";
import BlogIntelligenceAutomation from "../assets/MediaCards/blog_intelligence_automation.webp";

export interface Blog {
  id: string;
  type: "blog";
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
  link: string;
}

export const blogData: Blog[] = [
  {
    id: "1",
    type: "blog",
    title: "Agentic AI Automation with Intent: A Practical Example in Denial Management",
    description:
      "As the excitement around AI grows, it’s easy to conflate different forms of automation under the “Agentic AI” label.",
    image: BlogDenialManagement,
    date: "July 17, 2025",
    readTime: "",
    // category: "Document Processing",
    link: "/resource/agentic-ai-automation-with-intent",
  },
  {
    id: "2",
    type: "blog",
    title: "Intelligent Document Processing - Revolutionizing Data Capture",
    description:
      "Classifying large volumes of documents is essential to make them more manageable and, ultimately, obtain valuable insights.",
    image: BlogDataCapture,
    date: "June 13, 2025",
    readTime: "",
    // category: "Best Practices",
    link: "/resource/intelligent-document-processing",
  },
  {
    id: "3",
    type: "blog",
    title: "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    description:
      "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    image: BlogRevenueCycle,
    date: "June 11, 2025",
    readTime: "",
    // category: "Revenue Cycle",
    link: "/resource/ai-powered-intelligent-document-processing",
  },
  {
    id: "4",
    type: "blog",
    title: "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    description:
      "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    image: BlogCorrespondenceManagement,
    date: "June 11, 2025",
    readTime: "",
    // category: "Strategy",
    link: "/resource/lockbox-chaos-to-clarity",
  },
  {
    id: "5",
    type: "blog",
    title: "Maximizing Business Value Requires the Vision of Intelligence in Automation",
    description:
      "The benefits of automating healthcare administrative tasks to gain efficiencies have been agreed in principle for some time now.",
    image: BlogIntelligenceAutomation,
    date: "December 14, 2020",
    readTime: "",
    // category: "Strategy",
    link: "/resource/maximizing-business-value-vision",
  },
];
