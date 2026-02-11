import { Container, Grid } from "@mui/material";

import {
  Dashboard,
  Bolt,
  ErrorOutline,
  Insights,
  Storage,
} from "@mui/icons-material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "AI-Powered Correspondence Management System",
    description:
      "This generative AI solution automatically processes incoming lockbox documents using large language models and machine learning algorithms. The system can handle multiple document formats simultaneously, from handwritten checks to printed EOBs, denials, appeals, medical record requests and other correspondence, extracting key information such as payment amounts, account numbers, and payer details.",
    icon: <Dashboard />,
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Multi-Batch Processing Console",
    description:
      "This centralized processing hub manages multiple lockbox batches from different banks and service providers in parallel workflows. The console automatically splits large PDF files containing mixed document types into individual items, categorizes them by type and priority, and routes them to appropriate processing queues.",
    icon: <Bolt />,
  },
  {
    id: 3,
    title: "Intelligent Document Classification Engine",
    description:
      "This sophisticated categorization system organizes lockbox documents into hierarchical categories with four or more levels of detail, such as Payer > Plan Type > Document Type > Processing Date. Continuously improve classification accuracy based on user corrections and feedback, while maintaining detailed audit logs of all classification decisions.",
    icon: <ErrorOutline />,
  },
  {
    id: 4,
    title: "Bank Integration and Download Automation",
    description:
      "This automated system securely connects to multiple bank portals to download lockbox files at scheduled intervals without manual intervention. The integration uses secure authentication protocols and encrypted data transfer to maintain security while ensuring timely access to new deposits",
    icon: <Insights />,
  },
  {
    id: 5,
    title: "Continuous Quality Assurance Module",
    description:
      "The module randomly samples processed items for manual review, tracks error rates by document type and processing rule, and identifies patterns indicating needed algorithm adjustments. Feedback from quality reviews is automatically incorporated into the AI training data, while detailed reporting helps managers monitor processing performance and identify training needs for staff.",
    icon: <Storage />,
  },
];

const CoreCapabilitiesSection = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle
          title="Core Capabilities"
          subtitle="Powerful features designed to streamline every aspect of payment processing and reconciliation"
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
