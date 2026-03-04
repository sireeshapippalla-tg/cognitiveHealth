import FeatureSection from "../../ui/featureSection/FeatureSection";
// import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.png';
// import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.png';
// import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.png';
// import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.png';

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const features = [
  {
    // icon: <img src={paymentImage1} alt="Centralized Payment" />,
    icon: <DescriptionOutlinedIcon />,
    title: "Intelligent Contract Modeling",
    description:
      "AI digitizes and models complex payer contract terms including tiered fee schedules, outlier payments, carve-outs, and incentive clauses—creating a single source of truth for expected reimbursement.",
  },
  {
    // icon: <img src={paymentImage2} alt="Automated Posting" />,
    icon: <AnalyticsOutlinedIcon />,
    title: "Automated Variance Detection",
    description:
      "Compare every payment against contract terms in real-time, flagging underpayments, incorrect contractual adjustments, and policy violations automatically—no manual calculation required.",
  },
  {
    // icon: <img src={paymentImage3} alt="Reduced Errors" />,
    icon: <CurrencyExchangeOutlinedIcon />,
    title: "Underpayment Recovery Engine",
    description:
      "Generate evidence-based underpayment appeals with contract citations, expected vs actual calculations, and supporting documentation—recovering 85%+ of identified variances.",
  },
  {
    // icon: <img src={paymentImage4} alt="Cash Visibility" />,
    icon: <InsightsOutlinedIcon />,
    title: "Contract Performance Analytics",
    description:
      "Track payer compliance across all contracts, identify systematic underpayment patterns, and quantify revenue leakage by payer, service line, and facility for strategic negotiations.",
  },
];

const TransformSection = () => {
  return (
    <FeatureSection
      title="Turn Payer Contracts into Revenue Assurance"
      subtitle="The iCAN™ Contract Analysis solution ensures you receive every dollar 
                you're entitled to under your payer contracts. Our AI agents model complex 
                contract terms, detect payment variances, and automatically generate 
                underpayment appeals—recovering millions in lost revenue."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
