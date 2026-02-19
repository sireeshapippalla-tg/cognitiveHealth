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
    title: "Contract Intelligence Research Assistant",
    description: `This AI-powered analysis tool uses small language models to extract and organize key payment terms from complex insurance contracts. The assistant can quickly locate specific reimbursement rates, payment methodologies, covered services, and special provisions across hundreds of pages of contract language. Users can query the system with natural language questions like "What's the reimbursement rate for CPT 99213 under the Blue Cross contract?" and receive immediate, accurate responses with source references. `,
    icon: (
      <img src={Workbench} alt="Contract Intelligence Research Assistant" />
    ),
    
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Payment Variance Detection System ",
    description: `This analytical tool continuously compares actual payments received from insurance companies against contracted rates to identify underpayments and systematic discrepancies. The system analyzes payment patterns across different procedure codes, providers, and locations to detect both isolated incidents and recurring issues. When variances are identified, the system generates detailed reports with supporting documentation that can be used to request payment corrections from payers. `,
    icon: <img src={Zap} alt="Payment Variance Detection System" />,
    
  },
  {
    id: 3,
    title: "Contract Change Monitoring Service",
    description: `This automated tracking system monitors all payer contracts for amendments, rate updates, and policy changes that could impact reimbursement. The service maintains a comprehensive version history of contract modifications, tracking what changed, when it became effective, and how it impacts payment expectations. Automated alerts notify relevant staff when significant changes are detected, ensuring that billing systems and processes are updated to reflect new terms and requirements. `,
    icon: <img src={Info} alt="Contract Change Monitoring Service" />,
    
  },
  {
    id: 4,
    title: "Charge Master Synchronization Engine ",
    description: `This alignment tool ensures that the organization's charge master remains current with contracted rates across all payers and identifies opportunities for strategic pricing adjustments. The engine compares internal pricing against contracted allowables and market rates, flagging services that may be under-priced or over-priced relative to reimbursement levels. The system provides recommendations for charge master updates based on contract terms, cost analysis, and strategic pricing objectives.`,
    icon: (
      <img src={Barchart} alt="Charge Master Synchronization Engine" />
    ),
   
  },
  {
    id: 5,
    title: "Contract Performance Analytics Dashboard ",
    description: `This comprehensive reporting platform tracks financial performance metrics by payer contract, providing visibility into collection rates, payment timeliness, denial patterns, and overall contract profitability. The dashboard compares actual performance against contract expectations and historical trends, helping revenue cycle leaders identify underperforming contracts that may require operational improvements or renegotiation. Interactive reports allow users to drill down into specific performance issues and identify actionable improvement opportunities.`,
    icon: (
      <img src={Data} alt="Contract Performance Analytics Dashboard" />
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
