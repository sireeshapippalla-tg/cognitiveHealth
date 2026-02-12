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
    title: "Pre-Submission Validation and Edit Engine ",
    description: `This comprehensive quality control system performs extensive claim validation before submission to identify and correct potential issues that could result in denials. The engine checks for common problems such as invalid code combinations, missing required information, services not covered by patient insurance, and charges exceeding contracted rates. Claims with identified issues are automatically held for correction, while clean claims proceed directly to submission, significantly reducing denial rates and rework.`,
    icon: (
      <img
        src={paymentImage5}
        alt="Pre-Submission Validation and Edit Engine"
      />
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    title: "AI-Powered Coding Support Assistant ",
    description: `This advanced coding tool analyzes clinical documentation and provides intelligent suggestions for diagnosis and procedure codes based on documented services and treatments. The assistant highlights areas where documentation may be insufficient to support specific codes and provides guidance on additional information needed for optimal coding. The system learns from coder feedback and stays current with coding guidelines and updates, continuously improving its accuracy and usefulness.`,
    icon: <img src={paymentImage2} alt="AI-Powered Coding Support Assistant" />,
  },
  {
    id: 3,
    title: "Intelligent Compliance Verification System ",
    description: `This regulatory compliance tool automatically reviews all charges against applicable healthcare regulations, payer policies, and medical necessity criteria. The system maintains current databases of Medicare coverage policies, commercial payer guidelines, and regulatory requirements, checking each claim for compliance before submission. Potential compliance risks are flagged with detailed explanations of specific requirements, helping organizations avoid costly audits and payment recoupments. `,
    icon: (
      <img
        src={paymentImage6}
        alt="Intelligent Compliance Verification System"
      />
    ),
  },
  {
    id: 4,
    title: "Streamlined Pre-Bill Review Workflow ",
    description: `This organized review system creates prioritized work queues for charges requiring human validation, organizing items by complexity, dollar value, and staff expertise requirements. The workflow presents reviewers with all relevant information including clinical documentation, coding suggestions, contract terms, and compliance alerts in a unified interface. Built-in productivity tracking and bottleneck identification help managers optimize staffing levels and improve turnaround times from service delivery to claim submission. `,
    icon: (
      <img src={paymentImage7} alt="Streamlined Pre-Bill Review Workflow" />
    ),
  },
  {
    id: 5,
    title: "Multi-Source Data Connector",
    description: `This integration platform establishes secure, automated connections to banks, clearing houses, payer portals, EMRs and internal systems to ensure seamless data flow.Built-in data validation ensures information integrity, while error handling procedures automatically retry failed connections and alert administrators to persistent issues.`,
    icon: <img src={paymentImage8} alt="Multi-Source Data Connector" />,
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
