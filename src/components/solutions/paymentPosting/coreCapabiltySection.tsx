import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
// import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.png";
// import Zap from "../../../assets/solutions/Core Capabilities/Zap.png";
// import Info from "../../../assets/solutions/Core Capabilities/Info.png";
// import BarChart from "../../../assets/solutions/Core Capabilities/BarChart.png";
// import Data from "../../../assets/solutions/Core Capabilities/Data.png";
import BulletList from "../../ui/BulletList";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Unified Payment Workbench",
    description: (
      <BulletList
        items={[
          "Consolidates all payment sources (ERA, EOB, patient payments, lockbox) into a single interface",
          "Intelligent routing of payments to appropriate posting queues",
          "Real-time visibility across all payment channels",
          "Automated variance detection and flagging",
        ]}
      />
    ),
    // icon: <img src={Workbench} alt="Unified Payment Workbench" />,
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: 2,
    title: "Automated Payment Posting Engine",
    description: (
      <BulletList
        items={[
          "AI-powered matching of payments to patient accounts and claims",
          "Automatic contractual adjustment calculations",
          "Smart handling of partial payments and patient responsibility",
          "Bulk posting with exception-only human review",
        ]}
      />
    ),
    // icon: <img src={Zap} alt="Automated Payment Posting Engine" />,
    icon: <AutoModeOutlinedIcon />,
  },
  {
    id: 3,
    title: "Exception and Variance Manager",
    description: (
      <BulletList
        items={[
          "Intelligent identification of posting anomalies",
          "Automated resolution suggestions based on historical patterns",
          "Escalation workflows for complex variances",
          "Root cause analysis and trending reports",
        ]}
      />
    ),
    // icon: <img src={Info} alt="Exception and Variance Manager" />,
    icon: <ReportProblemOutlinedIcon />,
  },
  {
    id: 4,
    title: "Real-Time Cash Analytics Dashboard",
    description: (
      <BulletList
        items={[
          "Live cash position visibility",
          "Payment velocity tracking by payer, facility, and service line",
          "Aging analysis with predictive insights",
          "Executive-ready financial reporting",
        ]}
      />
    ),
    // icon: <img src={BarChart} alt="Real-Time Cash Analytics Dashboard" />,
    icon: <InsightsOutlinedIcon />,
  },
  {
    id: 5,
    title: "Multi-Source Data Connector",
    description: (
      <BulletList
        items={[
          "Pre-built integrations with major clearinghouses and payers",
          "Bank reconciliation automation",
          "Lockbox file processing",
          "Manual payment capture via mobile or web interface",
        ]}
      />
    ),
    // icon: <img src={Data} alt="Multi-Source Data Connector" />,
    icon: <HubOutlinedIcon />,
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
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default CoreCapabilitiesSection;
