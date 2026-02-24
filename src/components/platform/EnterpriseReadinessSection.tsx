import Integration from "../../assets/Platform/Enterprise/Integration.svg";
import Connectivity from "../../assets/Platform/Enterprise/Connectivity.svg";
import API from "../../assets/Platform/Enterprise/API.svg";
import Deployement from "../../assets/Platform/Enterprise/Deployement.svg";
import FeatureSection from "../ui/featureSection/FeatureSection";


const EnterpriseReadinessSection = () => {
  const enterpriseItems = [
    {
      icon: <img src={Integration} alt="Integration" />,
      title: "Proven at Enterprise Scale",
      description:
        "Deployed across health systems processing 10M+ transactions monthly. Handles multiple facilities, diverse payer portfolios, varied specialties, and constantly evolving regulations simultaneously.",
    },
    {
      icon:  <img src={Deployement} alt="Deployment" />,
      title: "Security & Compliance First",
      description:
        "HITRUST CSF, SOC 2 Type II, with 95% uptime. Enterprise-grade encryption, role-based access controls, and comprehensive audit logging ensure your data stays secure.",
    },
    {
      icon: <img src={Connectivity} alt="Connectivity" />,
      title: "Flexible Deployment Options",
      description:
        "Cloud-hosted (multi-tenant or single-tenant), private cloud deployment. Choose the option that fits your organization's security, compliance, and infrastructure requirements.",
    },
    {
      icon: <img src={API} alt="API" />,
      title: "White-Glove Enterprise Support ",
      description:
        "Dedicated Customer Success Manager, 24/7/365 technical support with <15min response times, quarterly business reviews, and on-site training for large deployments.",
    },
    
  ];

  return (
    <FeatureSection
      title="Built for Scale, Security, and Reliability"
      subtitle="Enterprise-grade infrastructure trusted by organizations processing billions in annual revenue"
      background="#f9fafb"
      items={enterpriseItems}
    />
  );
};

export default EnterpriseReadinessSection;
