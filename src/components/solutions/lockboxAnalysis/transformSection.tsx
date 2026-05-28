import FeatureSection from "../../ui/featureSection/FeatureSection";
// import paymentImage1 from '../../../assets/solutions/Payment Operations/paymentImage1.webp';
// import paymentImage2 from '../../../assets/solutions/Payment Operations/paymentImage2.webp';
// import paymentImage3 from '../../../assets/solutions/Payment Operations/paymentImage3.webp';
// import paymentImage4 from '../../../assets/solutions/Payment Operations/paymentImage4.webp';

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const features = [
  {
    // icon: <img width={48} height={48} src={paymentImage1} alt="Centralized Payment" loading="lazy" />,
    icon: <AutoAwesomeIcon />,
    title: "Intelligent Document Processing ",
    description:
      "Extract payment and remittance data from paper EOBs, checks, and correspondence with 99%+ accuracy using advanced OCR and AI classification.",
  },
  {
    // icon: <img width={48} height={48} src={paymentImage2} alt="Automated Posting" loading="lazy" />,
    icon: <AltRouteIcon />,
    title: "Automated Correspondence Routing ",
    description:
      "Classify incoming mail by document type (EOB, patient payment, correspondence) and route to appropriate work queues automatically, eliminating manual sorting.",
  },
  {
    // icon: <img width={48} height={48} src={paymentImage3} alt="Reduced Errors" loading="lazy" />,
    icon: <PaymentsIcon />,
    title: "Accelerated Payment Recognition ",
    description:
      "Convert paper payments into digital posting data within hours of receipt, dramatically reducing mail-to-posting cycle time and improving cash flow visibility.",
  },
  {
    // icon: <img width={48} height={48} src={paymentImage4} alt="Cash Visibility" loading="lazy" />,
    icon: <ReportProblemIcon />,
    title: "Exception Management ",
    description:
      "AI flags low-confidence extractions for human review, ensuring accuracy while automating 85%+ of lockbox volume straight-through.",
  },
];

const TransformSection = () => {
  return (
    <FeatureSection
      title="Automate Your Lockbox Processing"
      subtitle="The iCAN™ Lockbox Management solution combines intelligent document classification with automated data extraction converting paper EOBs,  patient payments and payor correspondence like denials and approvals into structured data ready for posting in minutes, not days."
      background="#F9FAFB"
      items={features}
      columns={4}
    />
  );
};

export default TransformSection;
