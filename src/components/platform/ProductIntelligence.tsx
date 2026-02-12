import FeatureSection from "../ui/featureSection/FeatureSection";
import Healthcare from "../../assets/Platform/ProductIntellijence/Healthcare.svg";
import Architecture from "../../assets/Platform/ProductIntellijence/Architecture.svg";
import Enterprise from "../../assets/Platform/ProductIntellijence/Enterprise.svg";
import Compatibility from "../../assets/Platform/ProductIntellijence/Compatibility.svg";


const productIntelligenceItems = [
  {
    icon: <img src={Healthcare} alt="Healthcare Expertise" />,
    title: "Healthcare Expertise Meets AI Innovation",
    description:
      "Built by RCM veterans and technologists. Decades of healthcare operations and IT experience.",
  },
  {
    icon: <img src={Architecture} alt="Architecture" />,
    title: "Advanced AI Architecture",
    description:
      "Generative AI combined with deep domain knowledge. Continuous learning from healthcare workflows.",
  },
  {
    icon: <img src={Enterprise} alt="Enterprise Scale" />,
    title: "Proven at Enterprise Scale",
    description:
      "Deployed across health systems and professional provider setups. Handles millions of transactions.",
  },
  {
    icon: <img src={Compatibility} alt="Compatibility" />,
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
      linkText="Learn More"
       cardVariant="pink"
    />
  );
};

export default ProductIntelligence;
