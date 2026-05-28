import videos from "../assets/Resources/videos.webp";

export interface Video {
  id: string;
  type: "video";
  title: string;
  description: string;
  image: string;
  readTime: string;
  category?: string;
  link: string;
  date: string;
}

export const videoData: Video[] = [
  {
    id: "1",
    type: "video",
    title: "[6] AI-based RCM: Is AI infrastructure capital intensive?",
    description:
      "Building AI infrastructure is often seen as capital intensive and difficult to control especially in industries that demand high privacy and compliance.",
    image: "https://img.youtube.com/vi/f9EHI0N9l-U/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/f9EHI0N9l-U?rel=0&modestbranding=1",
  },
  {
    id: "2",
    type: "video",
    title: "[5] AI-based RCM: Compliance security protocols",
    description:
      "Handling sensitive healthcare data in the cloud requires more than just encryption — it demands a multi-layered compliance strategy and a cloud-native foundation built for security from day one.",
    image: "https://img.youtube.com/vi/y-2psMw1CfA/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/y-2psMw1CfA?rel=0&modestbranding=1",
  },
  {
    id: "3",
    type: "video",
    title: "[4] AI-based RCM: Integration and Product Architecture",
    description:
      "Healthcare platforms today need to do more than just connect with EMRs — they need to be flexible, interoperable, and built for the future.",
    image: "https://img.youtube.com/vi/ZWJvVdGTcGw/maxresdefault.webp",
    readTime: "51:30",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/ZWJvVdGTcGw?rel=0&modestbranding=1",
  },
  {
    id: "4",
    type: "video",
    title: "[3] AI-based RCM: Protecting PHI in AI based platforms",
    description:
      "In the world of digital health, protecting PHI is non-negotiable. Learn how CognitiveHealth ensures compliance and security in AI-driven RCM.",
    image: "https://img.youtube.com/vi/vU4H-J7gDWY/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/vU4H-J7gDWY?rel=0&modestbranding=1",
  },
  {
    id: "5",
    type: "video",
    title: "[2] AI-based RCM: Working with Agentic Technologies",
    description:
      "AI is everywhere but not all AI is created equal. In this clip, Pavani Munjuluri and Albert Porco dive into the world of agentic AI and how it's redefining autonomy within intelligent systems.",
    image: "https://img.youtube.com/vi/YEsPc4CK-ms/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/YEsPc4CK-ms?rel=0&modestbranding=1",
  },
  {
    id: "6",
    type: "video",
    title:
      "[1] AI-based RCM: Training AI agents to Navigate Healthcare Complexity",
    description:
      "In this short but powerful conversation, Pavani Munjuluri and Albert Porco discuss how AI agents are trained to navigate healthcare complexity.",
    image: "https://img.youtube.com/vi/P7vfHiUsw1E/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "July 19, 2025",
    link: "https://www.youtube.com/embed/P7vfHiUsw1E?rel=0&modestbranding=1",
  },
  {
    id: "7",
    type: "video",
    title: "10 - Benefits of AI on Staffing for Providers",
    description:
      "Learn how a behavioral health organization benefitted from the implementation of AI in its revenue cycle including the implementation of iCAN, CognitiveHealth's AI platform.",
    image: "https://img.youtube.com/vi/5x2VseYLx7s/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/5x2VseYLx7s?rel=0&modestbranding=1",
  },
  {
    id: "8",
    type: "video",
    title: "9 - Managing Multiple AI projects for Providers",
    description:
      "Learn how a behavioral health organization managed the implementation of multiple AI projects including iCAN, CognitiveHealth's AI-based platform.",
    image: "https://img.youtube.com/vi/oH7AtKSclk0/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/oH7AtKSclk0?rel=0&modestbranding=1",
  },
  {
    id: "9",
    type: "video",
    title: "8 - AI Implementation for Providers",
    description:
      "Come behind the scenes to understand how RCM processes were automated for a behavioral health organization with iCAN, CognitiveHealth's AI-based platform.",
    image: "https://img.youtube.com/vi/Bf9mIAsgSpc/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/Bf9mIAsgSpc?rel=0&modestbranding=1",
  },
  {
    id: "10",
    type: "video",
    title: "7 - Challenges in Cash Posting and Reconciliation for Providers",
    description:
      "Providers face numerous challenges with respect to cash posting and reconciliation in their revenue cycle. Learn how a behavioral health organization overcame them.",
    image: "https://img.youtube.com/vi/l2fobEj81W0/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/l2fobEj81W0?rel=0&modestbranding=1",
  },
  {
    id: "11",
    type: "video",
    title: "6 - AI Deployment Life Cycle Model",
    description:
      "The journey to AI-powered revenue cycle management isn’t just about technology—it’s a strategic transformation. Learn about the AI deployment life cycle.",
    image: "https://img.youtube.com/vi/Y17BK77pPkM/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/Y17BK77pPkM?rel=0&modestbranding=1",
  },
  {
    id: "12",
    type: "video",
    title: "5 - Staffing Challenges in Healthcare",
    description:
      "Due to myriad reasons like cost pressures and gig economy jobs, revenue cycle areas are hit hard by staffing challenges. Discover how AI offers a solution.",
    image: "https://img.youtube.com/vi/QDgkCReN8BA/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/QDgkCReN8BA?rel=0&modestbranding=1",
  },
  {
    id: "13",
    type: "video",
    title: "4 - Transformative Potential of AI",
    description:
      "The future of healthcare finance is already here—AI is transforming Revenue Cycle Management (RCM) by slashing denials, automating claims, and recovering revenue.",
    image: "https://img.youtube.com/vi/zp-Gklis10o/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/zp-Gklis10o?rel=0&modestbranding=1",
  },
  {
    id: "14",
    type: "video",
    title: "3 - Guidelines for AI Implementation",
    description:
      "Have you been struggling to implement AI in your group practice? In this clip, Pavani Munjuluri breaks down the guidelines for successful AI implementation.",
    image: "https://img.youtube.com/vi/I2BezETp1ZM/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/I2BezETp1ZM?rel=0&modestbranding=1",
  },
  {
    id: "15",
    type: "video",
    title: "2 - Regulatory frameworks to consider for safe and ethical AI",
    description:
      "As artificial intelligence continues to revolutionize healthcare, understanding the evolving regulatory landscape is critical for successful and ethical implementation.",
    image: "https://img.youtube.com/vi/rpxZWFu1RiY/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/rpxZWFu1RiY?rel=0&modestbranding=1",
  },
  {
    id: "16",
    type: "video",
    title:
      "1 - Key considerations for successful AI implementation in group practices",
    description:
      "Group practices experience growing pains while dealing with multiple banks, EMR systems, regular updates, and ongoing staff training. Learn key considerations for AI.",
    image: "https://img.youtube.com/vi/JV0TFVIM-Ys/maxresdefault.webp",
    readTime: "",
    category: "Webinar",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/JV0TFVIM-Ys?rel=0&modestbranding=1",
  },
  {
    id: "17",
    type: "video",
    title: "iCAN  - Correspondence Module",
    description:
      "Did you know that correspondence management is a key part of your Revenue Cycle Management (RCM) process, impacting both claims accuracy and speed?",
    image: "https://img.youtube.com/vi/OvBiWi3XF_c/maxresdefault.webp",
    readTime: "",
    category: "Product",
    date: "April 15, 2025",
    link: "https://www.youtube.com/embed/OvBiWi3XF_c?rel=0&modestbranding=1",
  },
  {
    id: "18",
    type: "video",
    title:
      "Webinar replay: Reimagining Revenue Cycle Management (RCM) in Group Practices with AI",
    description:
      "Pavani Munjuluri, CEO, CognitiveHealth Technologies in conversation with Renee Stephens, Director, RCM, MindPath during the webinar ‘Reimagining Revenue Cycle Management (RCM) in Group Practices with AI’ hosted by MGMA Virginia.",
    image: "https://img.youtube.com/vi/3a3R1NIcbt8/maxresdefault.webp",
    readTime: "51:30",
    category: "Webinar",
    date: "February 18, 2025",
    link: "https://www.youtube.com/embed/3a3R1NIcbt8?rel=0&modestbranding=1",
  },
  {
    id: "19",
    type: "video",
    title: "iCAN Product Overview - CognitiveHealth Technologies, LLC",
    description:
      "iCAN™ is an AI-powered RCM platform that provides intuitive user experience for different personas and helps them gain greater visibility, build trust, increase efficiency and productivity.",
    image: videos,
    readTime: "",
    category: "Product",
    date: "February 5, 2025",
    link: "https://www.youtube.com/embed/NHXElk5Z_r8?rel=0&modestbranding=1",
  },
  {
    id: "20",
    type: "video",
    title: "iCAN Correspondence Management",
    description:
      "CognitiveHealth’s Intelligent automation platform, iCAN leverages AI and machine learning to read, sort and manage daily correspondence and frees up the staff time to handle more challenging tasks. This is a true application of AI in revenue cycle workflow for healthcare providers and payors.",
    image: videos,
    readTime: "",
    category: "Product",
    date: "December 14, 2020",
    link: "https://www.youtube.com/embed/0axk8VtaQpc?rel=0&modestbranding=1",
  },
  {
    id: "21",
    type: "video",
    title: "Introducing iCAN",
    description:
      "Introducing iCAN – an Intelligent Automation Platform built for the healthcare industry – learn more about iCAN in this brief video.",
    image: videos,
    readTime: "",
    category: "Product",
    date: "September 12, 2020",
    link: "https://www.youtube.com/embed/aFXLjVc8Xqo?rel=0&modestbranding=1",
  },
  {
    id: "22",
    type: "video",
    title: "Opportunities for Intelligent Process Automation",
    description:
      "Visionary leaders are turning to Intelligent process automation to reduce costs and increase efficiencies. However the challenge is how to identify the best opportunities for your organization. Learn how to identify the opportunities.",
    image: videos,
    readTime: "",
    category: "Webinar",
    date: "September 12, 2020",
    link: "https://www.youtube.com/embed/uxzbgCxW3qs?rel=0&modestbranding=1",
  },
  {
    id: "23",
    type: "video",
    title: "CognitiveHealth Intro Jan 2019",
    description:
      "CognitiveHealth is a pioneer in building healthcare digital platforms that help alleviate administrative burden from Payers and Providers, giving them more time to focus on patient care.",
    image: "https://img.youtube.com/vi/DZPkze6KM08/maxresdefault.webp",
    readTime: "",
    category: "Product",
    date: "January 15, 2019",
    link: "https://www.youtube.com/embed/DZPkze6KM08?rel=0&modestbranding=1",
  },
];
