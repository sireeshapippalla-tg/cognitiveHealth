
import FeatureSection from "../../ui/featureSection/FeatureSection";
import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.png';
import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.png';
import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.png';
import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.png';



const features = [
  {
    icon: <img src={paymentImage1} alt="Centralized Payment" />,
   
    title: "Real-Time Coverage Verification",
    description:
      "Verify active coverage across all major payers in seconds using automated 270/271 transactions and payer portal connectivity—eliminating coverage-related denials before they happen.",
  },
  {
    icon: <img src={paymentImage2} alt="Automated Posting" />,
    
    title: "Automated Re-Verification",
    description:
      "Continuous monitoring of patient eligibility with scheduled re-checks before appointments, ensuring coverage changes are caught proactively rather than after service delivery.",
  },
  {
    icon: <img src={paymentImage3} alt="Reduced Errors" />,
    
    title: "Comprehensive Benefit Discovery",
    description:
      "Extract detailed benefit information including deductibles, co-pays, out-of-pocket maximums, and service-specific coverage—enabling accurate patient estimates and financial counseling.",
  },
  {
    icon: <img src={paymentImage4} alt="Cash Visibility" />,
    
    title: "Proactive Authorization Alerts",
    description:
      "Automatically identify services requiring prior authorization based on payer rules and patient benefits, triggering authorization workflows before denials occur.",
  },
];


const TransformSection = () => {
  return (
    <FeatureSection
      title="Stop Eligibility Issues Before They Become Denials"
      subtitle="The iCAN™ Eligibility Discovery solution provides real-time insurance 
                verification across 1,200+ payers, automated benefit discovery, and 
                intelligent coordination of benefits—ensuring you know exactly what's 
                covered before rendering services."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
