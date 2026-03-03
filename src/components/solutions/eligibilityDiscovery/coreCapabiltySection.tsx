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
import BulletList from "../../ui/BulletList";


const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Real-Time Coverage Verification Portal",
    description: (
      <BulletList
        items={[
          "Sub-second eligibility checks via EDI 270/271 transactions",
          "Direct payer portal integration for real-time verification",
          "Multi-payer batch verification for scheduled appointments",
          "Mobile-friendly interface for registration staff",
        ]}
      />
    ),
    icon: (
      <img
        src={Workbench}
        alt="Real-Time Coverage Verification Portal"
      />
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Multi-Payer Coordination Manager",
    description: (
      <BulletList
        items={[
          "Automatic primary/secondary/tertiary payer identification",
          "Coordination of Benefits (COB) rule application",
          "Medicare Secondary Payer (MSP) compliance",
          "Crossover claim handling for dual-eligible patients",
        ]}
      />
    ),
    icon: <img src={Zap} alt="Multi-Payer Coordination Manager" />,
  },
  {
    id: 3,
    title: "Automated Patient Benefit Summaries",
    description: (
      <BulletList
        items={[
          "Structured benefit data extraction from 271 responses",
          "Patient-friendly benefit summaries for financial counseling",
          "Deductible tracking across calendar/plan years",
          "Out-of-pocket maximum monitoring",
        ]}
      />
    ),
    icon: <img src={Info} alt="Automated Patient Benefit Summaries" />,
  },
  {
    id: 4,
    title: "Authorization Tracking and Alert System",
    description: (
      <BulletList
        items={[
          "Service-specific authorization requirement identification",
          "Automated authorization workflow triggering",
          "Authorization expiration tracking and renewal alerts",
          "Payer-specific authorization rule engine",
        ]}
      />
    ),
    icon: (
      <img
        src={Barchart}   
        alt="Authorization Tracking and Alert System"
      />
    ),
  },
  {
    id: 5,
    title: "Scheduled Re-Verification Automation",
    description: (
      <BulletList
        items={[
          "Configurable re-verification schedules by service type",
          "Pre-appointment eligibility confirmation",
          "Recurring visit eligibility monitoring",
          "Coverage change detection and notification",
        ]}
      />
    ),
    icon: (
      <img
        src={Data}
        alt="Scheduled Re-Verification Automation"
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
          // subtitle="Powerful features designed to streamline every aspect of payment processing and reconciliation"
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
