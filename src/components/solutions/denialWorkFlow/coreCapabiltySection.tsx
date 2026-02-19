import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";

import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.png";
import Zap from "../../../assets/solutions/Core Capabilities/Zap.png";
import Info from "../../../assets/solutions/Core Capabilities/Info.png";
import Barchart from "../../../assets/solutions/Core Capabilities/BarChart.png";
import Data from "../../../assets/solutions/Core Capabilities/Data.png";



const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Low Dollar Denial Prioritization Engine",
    description: `This intelligent worklist system ranks denials based on claim value, appeal success probability, filing deadlines, and resolution effort. Historical data and machine learning predict which denials are most likely to result in successful appeals, ensuring focus on the highest-impact opportunities. Automated escalation ensures urgent or high-value denials receive immediate expert attention.`,
    icon: (
      <img src={Workbench} alt="Low Dollar Denial Prioritization Engine" />
    ),
    
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Proactive Denial Trigger System",
    description: `This real-time monitoring solution automatically creates denial tasks as ERA and remittance data are processed, eliminating delays in identification and response. The system extracts denial codes and explanations, then routes tasks to appropriate staff based on denial type and complexity. Automated notifications ensure immediate attention to new denials.`,
    icon: <img src={Zap} alt="Proactive Denial Trigger System" />,
    
  },
  {
    id: 3,
    title: "Automated Appeals Letter Generator",
    description: `This template-based system generates customized appeal letters using payer-specific formats and language. It pulls information from patient records, original claim data, and contract terms to create compelling appeals with correct attachments and submission methods, significantly reducing preparation time for professional appeal submissions.`,
    icon: <img src={Info} alt="Automated Appeals Letter Generator" />,
    
  },
  {
    id: 4,
    title: "Medical Records Request Orchestrator",
    description: `This automated workflow identifies when denied claims require medical record submission and manages the full lifecycle from retrieval through delivery. It integrates with EHR systems, compiles documentation per payer specifications, submits through secure channels, and tracks status with automated follow-ups for additional information.`,
    icon: (
      <img src={Barchart} alt="Medical Records Request Orchestrator" />
    ),
   
  },
  {
    id: 5,
    title: "AI-Powered Resolution Recommendation Assistant",
    description: `This intelligent advisory system analyzes complex denials and recommends the most effective resolution approach using historical outcomes, payer behavior, denial codes, and contract terms. It also flags cases needing expert consultation or legal review, helping teams allocate resources effectively and improve appeal success rates.`,
    icon: (
      <img
        src={Data}
        alt="AI-Powered Resolution Recommendation Assistant"
      />
    ),
   
  },
];

const CoreCapabilitiesSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default CoreCapabilitiesSection;
