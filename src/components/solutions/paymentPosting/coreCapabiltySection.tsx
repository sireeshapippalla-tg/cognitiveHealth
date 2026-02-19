import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.png";
import Zap from "../../../assets/solutions/Core Capabilities/Zap.png";
import Info from "../../../assets/solutions/Core Capabilities/Info.png";
import BarChart from "../../../assets/solutions/Core Capabilities/BarChart.png";
import Data from "../../../assets/solutions/Core Capabilities/Data.png";





const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Unified Payment Workbench",
    description: `This centralized interface consolidates all payment data from bank deposits, credit cards, checks, electronic funds transfers, and insurance remittances into a single dashboard.Real-time updates ensure that payment information is current, while customizable views allow different team members to focus on their specific responsibilities, whether that's patient payments, insurance reimbursements, or payment plan monitoring. `,
    icon: <img src={Workbench} alt="Unified Payment Workbench" />,
   
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Automated Payment Posting Engine",
    description: `This intelligent system automatically matches and posts payments to patient accounts using configurable business rules specific to your organization. The system is configured to connect seamlessly with multiple EMRs like EPIC, Cerner, eCW. Meditech, NextGen, Athena, AdvancedMD, InSync and many more.The engine processes ERA files, EFT notifications, and lockbox data to identify the correct patient accounts and apply payments accurately with full audit trails.  `,
    icon: <img src={Zap} alt="Automated Payment Posting Engine" />,
    
  },
  {
    id: 3,
    title: "Exception and Variance Manager",
    description: `This solution proactively identifies and categorizes payment discrepancies including underpayments, overpayments, duplicate payments, and timing differences. This takes into consideration of the 3-way reconciliation process – bank and all deposits, payor remittances and posting reports.Each exception is automatically routed to appropriate staff with built-in escalation procedures for high-value or time-sensitive items.`,
    icon: <img src={Info} alt="Exception and Variance Manager" />,
      
  },
  {
    id: 4,
    title: "Real-Time Cash Analytics Dashboard",
    description: `This comprehensive and interactive reporting hub provides instant visibility into cash flow patterns, payment trends, and reconciliation and opportunities for revenue cycle optimization.The dashboard displays key metrics such as daily cash receipts, outstanding balances by aging category, payer mix analysis, and collection performance indicators, extending into the requirements of finance teams reporting and analysis. `,
    icon: <img src={BarChart} alt="Real-Time Cash Analytics Dashboard" />,
        
  },
  {
    id: 5,
    title: "Multi-Source Data Connector",
    description: `This integration platform establishes secure, automated connections to banks, clearing houses, payer portals, EMRs and internal systems to ensure seamless data flow.Built-in data validation ensures information integrity, while error handling procedures automatically retry failed connections and alert administrators to persistent issues.`,
    icon: <img src={Data} alt="Multi-Source Data Connector" />,
    
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
