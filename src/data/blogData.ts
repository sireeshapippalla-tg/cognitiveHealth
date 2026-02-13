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
    title: "Intelligent Document Processing – Revolutionizing Data Capture",
    description:
      "Discover how intelligent document processing is changing the way healthcare organizations capture, process, and utilize critical business data.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "5 min read",
    category: "Document Processing",
    link: "",
  },
  {
    id: "2",
    type: "blog",
    title: "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    description:
      "Discover how intelligent document processing is changing the way healthcare organizations capture, process, and utilize critical business data.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    link: "",
  },
  {
    id: "3",
    type: "blog",
    title: "AI-powered Intelligent Document Processing For Smarter Healthcare Revenue Cycles",
    description:
      "Learn how AI-powered document processing creates smarter, more efficient revenue cycles by automating complex document workflows and data extraction.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Revenue Cycle",
    link: "",
  },
  {
    id: "4",
    type: "blog",
    title: "Maximizing Business Value Requires the Vision of Intelligence in Automation",
    description:
      "Explore why intelligent automation is essential for maximizing business value and achieving sustainable competitive advantage in healthcare.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Strategy",
    link: "",
  },
];
