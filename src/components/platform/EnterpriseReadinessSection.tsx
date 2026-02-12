import Integration from "../../assets/Platform/Enterprise/Integration.svg";
import Connectivity from "../../assets/Platform/Enterprise/Connectivity.svg";
import API from "../../assets/Platform/Enterprise/API.svg";
import Deployement from "../../assets/Platform/Enterprise/Deployement.svg";
import FeatureSection from "../ui/featureSection/FeatureSection";


const EnterpriseReadinessSection = () => {
  const enterpriseItems = [
    {
      icon: <img src={Integration} alt="Integration" />,
      title: "Multi-Source Integrations",
      description:
        "Seamlessly connect to banks, clearinghouses, payment processors, EHR systems, and practice management platforms.",
    },
    {
      icon: <img src={Connectivity} alt="Connectivity" />,
      title: "Standards-Based Connectivity",
      description:
        "Native support for HL7, FHIR, X12 835/837, and modern RESTful APIs ensures compatibility with your existing technology stack.",
    },
    {
      icon: <img src={API} alt="API" />,
      title: "UI-Based & API Integrations",
      description:
        "Flexible integration options including pre-built connectors, custom API integrations, and user-friendly interface-based data entry.",
    },
    {
      icon:  <img src={Deployement} alt="Deployment" />,
      title: "Enterprise-Scale Deployment",
      description:
        "Proven infrastructure supporting high-volume processing with 99.9% uptime, comprehensive security, and dedicated support for large organizations.",
    },
  ];

  return (
    <FeatureSection
      title="Enterprise Readiness"
      subtitle="Built for scale with enterprise-grade integrations and infrastructure"
      background="#f9fafb"
      items={enterpriseItems}
    />
  );
};

export default EnterpriseReadinessSection;
