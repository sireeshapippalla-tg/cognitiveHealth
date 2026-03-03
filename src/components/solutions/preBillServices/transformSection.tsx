
import FeatureSection from "../../ui/featureSection/FeatureSection";
import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.png';
import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.png';
import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.png';
import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.png';



const features = [
  {
    icon: <img src={paymentImage1} alt="Centralized Payment" />,
    
    title: "Comprehensive Claim Scrubbing",
    description:
      "Validate every claim against 10,000+ payer-specific edits, NCCI edits, LCD/NCD policies, and state regulations—catching errors that would lead to denials or delays before submission.",
  },
  {
    icon: <img src={paymentImage2} alt="Automated Posting" />,
    
    title: "AI-Powered Coding Validation",
    description:
      "Intelligent review of CPT/ICD-10 coding against clinical documentation, identifying missing codes, incorrect modifiers, and upcoding/downcoding opportunities to optimize compliant reimbursement.",
  },
  {
    icon: <img src={paymentImage3} alt="Reduced Errors" />,
   
    title: "Proactive Compliance Verification",
    description:
      "Automated checking against CMS regulations, payer medical policies, and billing guidelines—preventing compliance issues, audits, and takebacks before they occur.",
  },
  {
    icon: <img src={paymentImage4} alt="Cash Visibility" />,
    
    title: "Pre-Submission Edit Review",
    description:
      "Streamlined worklists for coding staff to resolve flagged issues efficiently, with AI-suggested corrections and historical resolution patterns to accelerate review and reduce rework.",
  },
];


const TransformSection = () => {
  return (
    <FeatureSection
      title="Submit Clean Claims the First Time, Every Time"
      subtitle="The iCAN™ PreBill Services solution acts as your final quality gate 
                before claim submission—using AI to validate coding accuracy, ensure 
                compliance, detect potential denials, and optimize reimbursement. Stop 
                revenue leakage and rework before claims ever leave your organization."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
