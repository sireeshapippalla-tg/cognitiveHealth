import FeatureSection from "../ui/featureSection/FeatureSection";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const productIntelligenceItems = [
  {
    icon: <PsychologyOutlinedIcon />,
    title: "Healthcare Expertise Meets AI Innovation",
    description:
      "Built by RCM veterans and technologists. Decades of healthcare operations and IT experience.",
  },
  {
    icon: <HubOutlinedIcon />,
    title: "Advanced AI Architecture",
    description:
      "Generative AI combined with deep domain knowledge. Continuous learning from healthcare workflows.",
  },
  {
    icon: <BusinessOutlinedIcon />,
    title: "Proven at Enterprise Scale",
    description:
      "Deployed across health systems and professional provider setups. Handles millions of transactions.",
  },
  {
    icon: <PublicOutlinedIcon />,
    title: "Comprehensive Compatibility",
    description:
      "Supports multiple EMRs, payer requirements, and regulations. Built for healthcare complexity.",
  },
];

const ProductIntelligence = () => {
  return (
    <FeatureSection
      title="Product Intelligence & Enterprise Scale"
      subtitle="Bulit for scale with enterprise-grade integrations and infrastructure."
    //   background="#f9fafb"
      items={productIntelligenceItems}
      linkText="Lear More"
       cardVariant="pink"
    />
  );
};

export default ProductIntelligence;
