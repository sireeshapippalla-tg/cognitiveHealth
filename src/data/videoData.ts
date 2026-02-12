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
}

export const videoData: Video[] = [
 {
    id: "1",
    type: "video",
    title: "iCAN™ Platform Overview",
    description:
      "Get a comprehensive overview of the iCAN™ platform and its intelligent automation capabilities.",
    image: videos,
    readTime: "12 min",
    category: "Product Demo",
    link: "/videos/platform-overview",
  },
  {
    id: "2",
    type: "video",
    title: "iCAN Correspondence Management",
    description:
      "Learn how iCAN™ automates correspondence management to bring order to lockbox chaos.",
    image: videos,
    readTime: "12 min",
    category: "Feature Spotlight",
    link: "/videos/correspondence-management",
  },
  {
  id: "3",
  type: "video",
  title: "Introducing iCAN",
  description: "Get a comprehensive overview of the iCAN™ platform and its intelligent automation capabilities.",
  image: videos,
  readTime: "3 min",
  category: "Introduction",
  link: "/videos/iCAN-introduction",
},
{
    id: "4",
    type: "video",
    title: "Opportunities for Intelligent Process Automation",
    description:
      "Learn how iCAN™ automates correspondence management to bring order to lockbox chaos.",
    image: videos,
    readTime: "12 min",
    category: "Thought Leadership",
    link: "/videos/intelligent-process-automation",
  },



];
