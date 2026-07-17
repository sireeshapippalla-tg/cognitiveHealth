import MediaStrategicOutsourcing from "../assets/MediaCards/media_strategic_outsourcing.webp";
import MediaDemystifyingAi from "../assets/MediaCards/media_demystifying_ai.webp";
import MediaCyberThreats from "../assets/MediaCards/media_cyber_threats.webp";
// import MediaCeoAppointment from "../assets/MediaCards/media_ceo_appointment.webp";
// import MediaYaleIpa from "../assets/MediaCards/media_yale_ipa.webp";
// import BlogCorrespondenceManagement from "../assets/MediaCards/blog_correspondence_management.webp";
// import BlogDataCapture from "../assets/MediaCards/blog_data_capture.webp";
// import BlogRevenueCycle from "../assets/MediaCards/blog_revenue_cycle.webp";
// import BlogIntelligenceAutomation from "../assets/MediaCards/blog_intelligence_automation.webp";
// import BlogDenialManagement from "../assets/MediaCards/blog_denial_management.webp";
import Media1 from "../assets/Media/media1.webp";
import Media2 from "../assets/Media/media2.webp";
import Media3 from "../assets/Media/media3.webp";
import Media4 from "../assets/Media/media4.webp";
import Media5 from "../assets/Media/media5.webp";
import Media6 from "../assets/Media/media6.webp";
import Media7 from "../assets/Media/media7.webp";
import Media8 from "../assets/Media/media8.webp";

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
    title:
      "Intentional and Strategic Outsourcing and Automation: A New Era of Revenue Cycle Management",
    description:
      "Published in the 2025 Fall Edition of the NJ HFMA Garden State Focus, Renee Mary Stephens and Pavani Munjuluri –  On Intentional, strategic outsourcing + automation usher in a new era of Revenue Cycle Management.",
    image: MediaStrategicOutsourcing,
    date: "November 3, 2025",
    category: "",
    link: "/resources/media/top-innovation-award",
  },
  {
    id: "2",
    type: "media",
    title: "Demystifying Al: Transforming Revenue Cycle Management (RCM)",
    description:
      "Demystifying Al: Transforming Revenue Cycle Management (RCM) Published in the 2024 Summer Edition of the NJ HFMA Garden State Focus, Pavani Munjuluri, CEO - CognitiveHealth Technologies explores the early beginnings, the teen years and the current state of Al and things to be mindful of, in the context of the healthcare industry.",
    image: MediaDemystifyingAi,
    date: "February 5, 2025",
    category: "",
    link: "/resources/media/ai-capabilities-healthcare-rcm",
  },
  {
    id: "3",
    type: "media",
    title: "Addressing the Critical Cyber Threats in US Healthcare",
    description:
      "US health care is 17.3 percent of the US GDP and by itself now exceeds the GDP of Germany. It has grown to the point where the uninterrupted functioning of healthcare payments is vital to national security. In recent months, the healthcare industry has faced severe data security challenges, leading to breaches, and compromising patient trust.",
    image: MediaCyberThreats,
    date: "June 30, 2024",
    category: "",
    link: "/resources/media/revenue-cycle-platform-overview",
  },
  // {
  //   id: "4",
  //   type: "media",
  //   title:
  //     "CognitiveHealth Technologies announces the appointment of Pavani Munjuluri as Chief Executive Officer.",
  //   description:
  //     "CognitiveHealth Technologies announces the appointment of Pavani Munjuluri as Chief Executive Officer. We are excited to announce Ms. Pavani Munjuluri as the Chief Executive Officer of CognitiveHealth Technologies. Pavani is the Co-founder and has been serving as COO for the last three years. She has been very successful in leading our product development and client",
  //   image: MediaCeoAppointment,
  //   date: "January 6, 2022",
  //   category: "",
  //   link: "/resources/media/ceo-appointment-pavani-munjuluri",
  // },
  // {
  //   id: "5",
  //   type: "media",
  //   title:
  //     "How Yale-New Haven Uses IPA in Revenue Cycle to Tackle Inefficiency",
  //   description:
  //     "As the pandemic heads toward a second year with no further financial stimulus guaranteed, hospitals and health systems are seeking ways to reduce costs and improve revenue cycle performance. Intelligent process automation (IPA) is an emerging solution designed to optimize operations and increase productivity through a combination of process modeling, process automation, and artificial intelligence.",
  //   image: MediaYaleIpa,
  //   date: "December 16, 2020",
  //   category: "",
  //   link: "/resources/media/yale-new-haven-uses-ipa",
  // },
  // {
  //   id: "6",
  //   type: "media",
  //   title:
  //     "Automating Revenue Cycle On The Back End Improves Patient Engagement On The Front",
  //   description:
  //     "For one health system, robotic process automation equates to about 27,000 hours in a month saved, which correlates to around $500,000. Revenue cycle directors are seeing a clear path for automation to increase revenue, decrease denials, speed up prior authorization and claims, and remove many of the repetitive clicks that hamper daily operations.",
  //   image: BlogCorrespondenceManagement,
  //   date: "December 15, 2020",
  //   category: "",
  //   link: "/resources/media/automating-revenue-cycle-back-end",
  // },
  // {
  //   id: "7",
  //   type: "media",
  //   title: "IPA in Healthcare: 2021 – The Year to Catch Up",
  //   description:
  //     "When it comes to intelligent process automation (IPA) in healthcare, multiple stakeholders drive technology adoption. Payers, providers and patients all bring their own unique interests and perspectives on how healthcare should operate and in what areas IPA should be used. 2021 is the right time to leverage and measure the benefits and successes of IPA",
  //   image: BlogDataCapture,
  //   date: "December 3, 2020",
  //   category: "",
  //   link: "/resources/media/ipa-healthcare-2021-year-to-catch-up",
  // },
  // {
  //   id: "8",
  //   type: "media",
  //   title:
  //     "The Need for Intelligent Process Automation in the Revenue Cycle (October 22, 2020)",
  //   description:
  //     "Topic:  The Need for Intelligent Process Automation in the Revenue Cycle",
  //   image: BlogRevenueCycle,
  //   date: "October 24, 2020",
  //   category: "",
  //   link: "/resources/media/need-for-ipa-revenue-cycle",
  // },
  // {
  //   id: "9",
  //   type: "media",
  //   title:
  //     "Intelligent Process Automation (IPA) – technology and opportunities",
  //   description:
  //     "Pavani Munjuluri , Co-Founder and COO for Cognitive Health IT talks to Jim Tate about the use of Intelligent Process Automation in the Healthcare Revenue Cycle. Listen to her talking about the technology and the opportunities IPA can provide here;",
  //   image: BlogIntelligenceAutomation,
  //   date: "October 20, 2020",
  //   category: "",
  //   link: "/resources/media/ipa-technology-and-opportunities",
  // },
  // {
  //   id: "10",
  //   type: "media",
  //   title:
  //     "CognitiveHealth Co-Founder Shares Intelligent Process Automation Best Practices",
  //   description:
  //     "In a recent article published by Healthcare IT Today,CognitiveHealth Technologies  co-founder Pavani Munjuluri  offers readers a glimpse into intelligent process automation (IPA) and how it’s benefiting providers in the wake of COVID-19.",
  //   image: BlogDenialManagement,
  //   date: "September 25, 2020",
  //   category: "",
  //   link: "/resources/media/co-founder-shares-ipa-best-practices",
  // },

  {
    id: "4",
    type: "media",
    title: "We are building the wrong Spock.",
    description:
      "Unpacks the foundational concepts, bias, hallucinations, data integrity in the current LLM models! Who can relate to Dr Spock and Mr Spock!",
    image: Media1,
    date: "February 2026",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "5",
    type: "media",
    title: "From Lockbox Chaos to Clarity: Seven Reasons Why Providers Need AI-Powered Correspondence Management",
    description:
      "Manual processing of denials and medical record requests is costing healthcare organizations valuable time and revenue. They are unable to file appeals on time and are experiencing almost 20-25% of denials due to a delay in correspondence.The problem is compounded due to staff turnover.\n\nYet, time and again, we see healthcare organizations often resort to hiring more staff when the volume and complexity of managing correspondence increases.\n\n Instead, healthcare organizations must embrace AI-powered correspondence management to deal with the bottleneck, all while keeping costs low.\n\nIn his latest blog ‘From Lockbox Chaos to Clarity: 7 Reasons Providers Need AI-Powered Correspondence Management’, Manjappa Belur Chittaranjan, President and co-Founder, CognitiveHealth Technologies, elaborates on hashtag#iCAN as a smart solution that offers several significant benefits from AI-powered hashtag#correspondencemanagement that enhances both operational efficiency and financial health.",
    image: Media2,
    date: "July 2025",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "6",
    type: "media",
    title: "What’s Broken in Today’s Approach to Correspondence Management in Healthcare RCM?",
    description:
      "When healthcare RCM faces staffing shortages, simply adding more people is a band-aid solution that fails to address the root problem, often leading to inefficiencies and errors instead of resolving the workload.",
    image: Media3,
    date: "July 2025",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "7",
    type: "media",
    title: "Revolutionizing Healthcare Revenue Cycle Management with Domain-Specific LLMs: A Deep Dive",
    description:
      "#HealthcareInnovation #AIinHealthcare #RevenueCycleManagement #HealthTech #ArtificialIntelligence #Cognitivehealth",
    image: Media4,
    date: "July 2024",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "8",
    type: "media",
    title: "Addressing the Critical Cyber Threats in US Healthcare",
    description:
      "",
    image: Media5,
    date: "July 2024",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "9",
    type: "media",
    title: "AI Agents your next co-worker",
    description:
      "",
    image: Media6,
    date: "July 2024",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "10",
    type: "media",
    title: "Technology initiatives and strategies that are shaping the landscape of Healthcare Revenue Cycle Management (RCM)",
    description:
      "",
    image: Media7,
    date: "July 2024",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  },
  {
    id: "11",
    type: "media",
    title: "Staffing Shortage and its Impact on Healthcare Revenue Cycle Management.",
    description:
      "When healthcare organizations face staffing shortages, they risk missing performance goals, which can lead to negative margins and inefficiencies in revenue cycle processes. Read how the staffing shortages are affecting the revenue cycle management in healthcare.",
    image: Media8,
    date: "July 2024",
    category: "",
    link: "https://www.linkedin.com/company/cognitivehealth-technologies-llc/posts/?feedView=articles",
  }
];
