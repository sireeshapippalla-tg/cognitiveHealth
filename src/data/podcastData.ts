import BlogIntelligenceAutomation from "../assets/MediaCards/blog_intelligence_automation.webp";

export interface Podcast {
  id: string;
  type: "podcast";
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
  link: string;
}

export const podcastData: Podcast[] = [
  {
    id: "p1",
    type: "podcast",
    title: "The Future of Generative AI in Revenue Cycle Management",
    description: "Join us as we explore how generative AI and machine learning are revolutionizing the revenue cycle management and healthcare back-office operations.",
    image: BlogIntelligenceAutomation,
    date: "October 24, 2023",
    readTime: "45 mins",
    category: "AI IN HEALTHCARE",
    link: "/podcast",
  },
  {
    id: "p2",
    type: "podcast",
    title: "Effective Denial Management Strategies",
    description: "Learn how to identify root causes of denials and implement automated solutions to recover revenue.",
    image: BlogIntelligenceAutomation,
    date: "September 15, 2023",
    readTime: "42 mins",
    category: "STRATEGY",
    link: "/podcast",
  },
  {
    id: "p3",
    type: "podcast",
    title: "Innovations in Cash Posting Automation",
    description: "Discover how AI is accelerating cash flow by automating the complex cash posting process.",
    image: BlogIntelligenceAutomation,
    date: "August 10, 2023",
    readTime: "35 mins",
    category: "AUTOMATION",
    link: "/podcast",
  },
  {
    id: "p4",
    type: "podcast",
    title: "Patient Experience in the Digital Age",
    description: "A conversation on improving patient access and satisfaction through digital front doors and seamless payment portals.",
    image: BlogIntelligenceAutomation,
    date: "July 22, 2023",
    readTime: "40 mins",
    category: "PATIENT EXPERIENCE",
    link: "/podcast",
  },
  {
    id: "p5",
    type: "podcast",
    title: "Navigating Regulatory Changes in Healthcare",
    description: "Expert analysis on the latest compliance updates and how hospitals can adapt their billing processes effectively.",
    image: BlogIntelligenceAutomation,
    date: "June 05, 2023",
    readTime: "38 mins",
    category: "COMPLIANCE",
    link: "/podcast",
  },
  {
    id: "p6",
    type: "podcast",
    title: "Optimizing the Mid-Revenue Cycle",
    description: "Why clinical documentation integrity (CDI) is crucial for accurate coding and preventing revenue leakage.",
    image: BlogIntelligenceAutomation,
    date: "May 18, 2023",
    readTime: "48 mins",
    category: "CLINICAL",
    link: "/podcast",
  }
];
