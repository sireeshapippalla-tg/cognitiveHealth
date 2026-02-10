export interface Resource {
  id: string;
  type: "blog" | "case-study" | "video" | "media";
  title: string;
  description: string;
  image: string;
  date?: string;
  readTime?: string; // For blogs
  category?: string;
  link: string;
  metricValue?: string; // For case studies
  metricLabel?: string; // For case studies
}

export const resourcesData: Resource[] = [
  {
    id: "1",
    type: "blog",
    title: "Intelligent Document Processing – Revolutionizing Data Capture",
    description:
      "Discover how intelligent document processing is changing the way healthcare organizations capture, process, and utilize critical business data.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "5 min read",
    category: "Document Processing",
    link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    type: "blog",
    title: "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    description:
      "Discover how intelligent document processing is changing the way healthcare organizations capture, process, and utilize critical business data.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    link: "/blog/lockbox-chaos-to-clarity",
  },
  {
    id: "3",
    type: "blog",
    title: "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    description:
      "Learn how AI-powered document processing creates smarter, more efficient revenue cycles by automating complex document workflows and data extraction.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Revenue Cycle",
    link: "/blog/ai-powered-idp",
  },
  {
    id: "4",
    type: "blog",
    title: "Maximizing Business Value Requires the Vision of Intelligence in Automation",
    description:
      "Explore why intelligent automation is essential for maximizing business value and achieving sustainable competitive advantage in healthcare.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Strategy",
    link: "/blog/maximizing-business-value",
  },
  // Case Studies
  {
    id: "5",
    type: "case-study",
    title: "Large Health System Reduces Denials by 45% with iCAN™ Platform",
    description:
      "See how a major healthcare provider leveraged intelligent automation to dramatically reduce denials and improve revenue cycle efficiency.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000",
    category: "Large Health System",
    link: "/case-studies/health-system-denials",
    metricValue: "45%",
    metricLabel: "Reduction in Denials",
  },
  {
    id: "6",
    type: "case-study",
    title: "Multi-Specialty Group Practice Automates Payment Posting",
    description:
      "Learn how a growing group practice automated their payment posting process, saving 200+ staff hours per month while improving accuracy.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000",
    category: "Physician Practice",
    link: "/case-studies/payment-posting",
    metricValue: "200+",
    metricLabel: "Hours Saved Monthly",
  },
  // Videos
   {
    id: "7",
    type: "video",
    title: "iCAN™ Platform Overview",
    description:
      "Get a comprehensive overview of the iCAN™ platform and its intelligent automation capabilities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    readTime: "12 min",
    category: "Product Demo",
    link: "/videos/platform-overview",
  },
  {
    id: "8",
    type: "video",
    title: "iCAN Correspondence Management",
    description:
      "Learn how iCAN™ automates correspondence management to bring order to lockbox chaos.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    readTime: "12 min",
    category: "Feature Spotlight",
    link: "/videos/correspondence-management",
  },
  // Media
   {
    id: "9",
    type: "media",
    title: "iCAN™ Platform Recognized as Top Innovation in Healthcare RCM",
    description:
      "Industry analysts name iCAN™ as a leading innovation in healthcare revenue cycle management automation technology.",
    image: "https://images.unsplash.com/photo-1551836022-b06985bceb24?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    category: "Award",
    link: "/media/top-innovation-award",
  },
  {
    id: "10",
    type: "media",
    title: "CognitiveHealth Raises Series B Funding to Expand AI Capabilities",
    description:
      "Leading healthcare technology investors join Series B round to accelerate development of next-generation AI automation features.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    category: "Funding",
    link: "/media/series-b-funding",
  },
];
