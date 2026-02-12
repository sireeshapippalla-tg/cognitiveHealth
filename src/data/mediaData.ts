import Healthcare from "../assets/Resources/HealthcareRCM.jpg"
import AIcapabilities from "../assets/Resources/AIcapabilities.jpg"
import Revenuecycle from "../assets/Resources/Revenuecycle.jpg"
import Annualconference from "../assets/Resources/Annualconference.jpg"



export interface Media {
  id: string;
  type: "media";
  title: string;
  description: string;
  image: string;
  date: string;
  category?: string;
  link: string;
}

export const mediaData: Media[] = [
  {
    id: "1",
    type: "media",
    title: "iCAN™ Platform Recognized as Top Innovation in Healthcare RCM",
    description:
      "Industry analysts name iCAN™ as a leading innovation in healthcare revenue cycle management automation technology.",
    image: Healthcare,
    date: "November 28, 2024",
    category: "Award",
    link: "/media/top-innovation-award",
  },
  {
    id: "2",
    type: "media",
    title: "CognitiveHealth Raises Series B Funding to Expand AI Capabilities",
    description:
      "Leading healthcare technology investors join Series B round to accelerate development of next-generation AI automation features..",
    image: AIcapabilities,
    date: "November 28, 2024",
    category: "Funding",
    link: "/media/ai-capabilities-healthcare-rcm",
  },
  {
    id: "3",
    type: "media",
    title: "CEO Featured in Healthcare IT News: The Future of Revenue Cycle Automation",
    description:
      "CognitiveHealth CEO discusses how intelligent automation is reshaping the future of healthcare revenue cycle management.",
    image: Revenuecycle,
    date: "November 28, 2024",
    category: "Press",
    link: "/media/revenue-cycle-platform-overview",
  },
  {
    id: "4",
    type: "media",
    title: "CognitiveHealth Wins Innovation Award at HFMA Annual Conference",
    description:
      "The iCAN™ platform receives recognition for innovation in revenue cycle automation at the Healthcare Financial Management Association conference.",
    image: Annualconference,
    date: "November 28, 2024",
    category: "Award",
    link: "/media/series-b-funding",
  },
];
