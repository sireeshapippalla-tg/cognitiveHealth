import videos from "../assets/Resources/videos.jpg"

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
    title: "On-demand webinar ‘Reimagining Revenue Cycle Management (RCM) in Group Practices with AI’",
    description:
      "Pavani Munjuluri, CEO, CognitiveHealth Technologies in conversation with Renee Stephens, Director, RCM, MindPath during the webinar ‘Reimagining Revenue Cycle Management (RCM) in Group Practices with AI’ hosted by MGMA Virginia.",
    image: videos,
    readTime: "",
    category: "",
    date: "February 23, 2025",
    link: "/videos/platform-overview",
  },
  {
    id: "2",
    type: "video",
    title: "iCAN™ PlatformOverview",
    description:
      "iCAN™  is an AI-powered RCM platform that provides intuitive user experience for different personas and helps them gain greater visibility, build trust, increase efficiency and productivity.",
    image: videos,
    readTime: "",
    category: "Feature Spotlight",
    link: "/videos/correspondence-management",
    date: "February 5, 2025",

  },
  {
    id: "3",
    type: "video",
    title: "iCAN Correspondence Management",
    description: "CognitiveHealth’s Intelligent automation platform, iCAN leverages AI and machine learning to read, sort and manage daily correspondence and frees up the staff time to handle more challenging tasks. This is a true application of AI in revenue cycle workflow for healthcare providers and payors",
    image: videos,
    readTime: "",
    category: "Introduction",
    link: "/videos/iCAN-introduction",
    date: "December 14, 2020",

  },
  {
    id: "4",
    type: "video",
    title: "Introducing iCAN",
    description:
      "Introducing iCAN – an Intelligent Automation Platform built for the healthcare industry – learn more about iCAN in this brief video.",
    image: videos,
    readTime: "",
    category: "Thought Leadership",
    link: "/videos/intelligent-process-automation",
    date: "September 12, 2020",

  },

  {
    id: "5",
    type: "video",
    title: "Opportunities for Intelligent Process Automation",
    description:
      "Visionary leaders are turning to Intelligent process automation to reduce costs and increase efficiencies. However the challenge is how to identify the best opportunities for your organization. – Learn how to identify the opportunities.",
    image: videos,
    readTime: "",
    category: "Thought Leadership",
    link: "/videos/intelligent-process-automation",
    date: "September 12, 2020",

  },

];
