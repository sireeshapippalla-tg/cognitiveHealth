import FeatureSection from "../../ui/featureSection/FeatureSection";
import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.png';
import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.png';
import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.png';
import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.png';



const features = [
  {
    icon: <img src={paymentImage1} alt="Centralized Payment" />,
    title: "Centralized Payment Processing",
    description:
      "Consolidate all payment sources into a single, unified workbench for streamlined operations and enhanced visibility.",
  },
  {
    icon: <img src={paymentImage2} alt="Automated Posting" />,
    title: "Automated Posting and Reconciliation",
    description:
      "Leverage AI-powered automation to match, post, and reconcile payments with unprecedented speed and accuracy.",
  },
  {
    icon: <img src={paymentImage3} alt="Reduced Errors" />,
    title: "Reduced Errors and Faster Turnaround",
    description:
      "Eliminate manual data entry errors and accelerate payment processing with intelligent automation and exception handling.",
  },
  {
    icon: <img src={paymentImage4} alt="Cash Visibility" />,
    title: "Real-Time Cash Visibility",
    description:
      "Gain instant insights into your cash position with live dashboards and analytics that drive informed decision-making.",
  },
];

const TransformSection = () => {
  return (
    <FeatureSection
      title="Transform Your Payment Operations"
      subtitle="The iCAN™ Payment Posting & Advanced Reconciliation solution delivers end-to-end automation for healthcare payment processing, combining AI-driven intelligence with enterprise-grade reliability to optimize your revenue cycle performance."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
