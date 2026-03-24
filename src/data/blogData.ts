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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "July 17, 2025",
    readTime: "",
    // category: "Document Processing",
    link: "",
  },
  {
    id: "2",
    type: "blog",
    title: "Intelligent Document Processing - Revolutionizing Data Capture",
    description:
      "Classifying large volumes of documents is essential to make them more manageable and, ultimately, obtain valuable insights.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "June 13, 2025",
    readTime: "",
    // category: "Best Practices",
    link: "",
  },
  {
    id: "3",
    type: "blog",
    title: "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    description:
      "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "June 11, 2025",
    readTime: "",
    // category: "Revenue Cycle",
    link: "",
  },
  {
    id: "4",
    type: "blog",
    title: "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    description:
      "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "June 11, 2025",
    readTime: "",
    // category: "Strategy",
    link: "",
  },
  {
    id: "5",
    type: "blog",
    title: "Maximizing Business Value Requires the Vision of Intelligence in Automation",
    description:
      "The benefits of automating healthcare administrative tasks to gain efficiencies have been agreed in principle for some time now.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "December 14, 2020",
    readTime: "",
    // category: "Strategy",
    link: "",
  },
];
