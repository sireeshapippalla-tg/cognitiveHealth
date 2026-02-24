import FeatureSection from "../ui/featureSection/FeatureSection";
import Healthcare from "../../assets/Platform/ProductIntellijence/Healthcare.svg";
import Architecture from "../../assets/Platform/ProductIntellijence/Architecture.svg";
import Enterprise from "../../assets/Platform/ProductIntellijence/Enterprise.svg";
import Compatibility from "../../assets/Platform/ProductIntellijence/Compatibility.svg";


const productIntelligenceItems = [
  {
    icon: <img src={Architecture} alt="Architecture" />,
    title: "Hybrid AI Models ",
    description:
      "Combines large language models with specialized healthcare domain models trained on claims, physician notes, payer policies and correspondence, and regulatory frameworks, delivering accuracy that generic AI cannot match.",
  },
  {
    icon: <img src={Healthcare} alt="Healthcare Expertise" />,
    title: "Deep Healthcare Domain Knowledge",
    description:
      "Purpose-built for healthcare complexity: 1,200+ payer rules, 20+ EMR integrations, specialty-specific workflows, and continuous regulatory updates, handling what makes healthcare unique.",
  },
  {
    icon: <img src={Compatibility} alt="Compatibility" />,
    title: "Comprehensive Interoperability",
    description:
      "Native support for HL7, FHIR, X12 EDI, and modern APIs. Seamlessly connects with Epic, Cerner, Meditech, athenahealth, NextGen, and 15+ other EMRs plus hundreds of peripheral systems.",
  },
  {
    icon: <img src={Enterprise} alt="Enterprise Scale" />,
    title: "Intelligent Process Orchestration ",
    description:
      "AI agents work together across your entire revenue cycle, sharing insights, coordinating handoffs, and optimizing workflows from patient registration through final payment reconciliation.",
  },
  
];

const ProductIntelligence = () => {
  return (
    <FeatureSection
      title="Enterprise AI Architecture Built for Healthcare"
      subtitle="Cutting-edge technology designed specifically for the complexity of healthcare operations"
    //   background="#f9fafb"
      items={productIntelligenceItems}
      // linkText="Learn More"
       cardVariant="pink"
    />
  );
};

export default ProductIntelligence;
