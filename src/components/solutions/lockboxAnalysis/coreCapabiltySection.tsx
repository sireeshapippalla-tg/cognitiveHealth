import { Container, Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
import paymentImage5 from "../../../assets/solutions/paymentImage5.svg";
import paymentImage2 from "../../../assets/solutions/paymentImage2.svg";
import paymentImage6 from "../../../assets/solutions/paymentImage6.svg";
import paymentImage7 from "../../../assets/solutions/paymentImage7.svg";
import paymentImage8 from "../../../assets/solutions/paymentImage8.svg";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "AI-Powered Correspondence Management System",
    description: `This generative AI solution automatically processes incoming lockbox documents using large language models and machine learning algorithms. The system handles multiple document formats simultaneously—from handwritten checks to printed EOBs, denials, appeals, medical record requests, and other correspondence—extracting key information such as payment amounts, account numbers, and payer details.`,
    icon: (
      <img
        src={paymentImage5}
        alt="AI-Powered Correspondence Management System"
      />
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Multi-Batch Processing Console",
    description: `This centralized processing hub manages multiple lockbox batches from different banks and service providers in parallel workflows. It automatically splits large PDF files containing mixed document types into individual items, categorizes them by type and priority, and routes them to appropriate processing queues for efficient handling.`,
    icon: <img src={paymentImage2} alt="Multi-Batch Processing Console" />,
  },
  {
    id: 3,
    title: "Intelligent Document Classification Engine",
    description: `This advanced categorization system organizes lockbox documents into hierarchical categories with four or more levels of detail, such as Payer > Plan Type > Document Type > Processing Date. It continuously improves classification accuracy based on user corrections and feedback while maintaining detailed audit logs of all classification decisions.`,
    icon: (
      <img
        src={paymentImage6}
        alt="Intelligent Document Classification Engine"
      />
    ),
  },
  {
    id: 4,
    title: "Bank Integration and Download Automation",
    description: `This automated solution securely connects to multiple bank portals to download lockbox files at scheduled intervals without manual intervention. It uses secure authentication protocols and encrypted data transfer to maintain data security while ensuring timely access to new deposits.`,
    icon: (
      <img src={paymentImage7} alt="Bank Integration and Download Automation" />
    ),
  },
  {
    id: 5,
    title: "Continuous Quality Assurance Module",
    description: `This module randomly samples processed items for manual review, tracks error rates by document type and processing rule, and identifies patterns that indicate required algorithm adjustments. Feedback from quality reviews is automatically incorporated into AI training data, while detailed reporting helps managers monitor processing performance and identify staff training needs.`,
    icon: <img src={paymentImage8} alt="Continuous Quality Assurance Module" />,
  },
];

const CoreCapabilitiesSection = () => {
  return (
    <Container
      sx={{
        p: { xs: 0, sm: 0, md: "40px" },
      }}
    >
      <Wrapper>
        <SectionTitle
          title="Core Capabilities"
          subtitle="Powerful features designed to streamline every aspect of payment processing and reconciliation"
          marginBottom={30}
        />

        <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid size={{ xs: 12 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default CoreCapabilitiesSection;
