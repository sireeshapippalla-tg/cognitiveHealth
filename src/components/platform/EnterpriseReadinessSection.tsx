import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FeatureSection from "../ui/featureSection/FeatureSection";

const EnterpriseReadinessSection = () => {
  const enterpriseItems = [
    {
      icon: <LinkOutlinedIcon />,
      title: "Multi-Source Integrations",
      description:
        "Seamlessly connect to banks, clearinghouses, payment processors, EHR systems, and practice management platforms.",
    },
    {
      icon: <HubOutlinedIcon />,
      title: "Standards-Based Connectivity",
      description:
        "Native support for HL7, FHIR, X12 835/837, and modern RESTful APIs ensures compatibility with your existing technology stack.",
    },
    {
      icon: <ApiOutlinedIcon />,
      title: "UI-Based & API Integrations",
      description:
        "Flexible integration options including pre-built connectors, custom API integrations, and user-friendly interface-based data entry.",
    },
    {
      icon: <BusinessOutlinedIcon />,
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
