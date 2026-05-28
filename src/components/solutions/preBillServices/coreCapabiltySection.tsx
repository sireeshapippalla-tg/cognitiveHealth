import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
// import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.webp";
// import Zap from "../../../assets/solutions/Core Capabilities/Zap.webp";
// import Info from "../../../assets/solutions/Core Capabilities/Info.webp";
// import BarChart from "../../../assets/solutions/Core Capabilities/BarChart.webp";
// import Data from "../../../assets/solutions/Core Capabilities/Data.webp";
import BulletList from "../../ui/BulletList";

import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Pre-Submission Validation and Edit Engine",
    description: (
      <BulletList
        items={[
          "10,000+ payer-specific edit rules",
          "NCCI edit checking and modifier logic",
          "DRG validation for inpatient claims",
          "Duplicate claim detection",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Workbench}
    //     alt="Pre-Submission Validation and Edit Engine"
    //   loading="lazy" />
    // ),
    icon: <FactCheckOutlinedIcon />,
    defaultOpen: true,
  },
  {
    id: 2,
    title: "AI-Powered Coding Support Assistant",
    description: (
      <BulletList
        items={[
          "Clinical documentation analysis",
          "Coding suggestion generation from provider notes",
          "HCC and risk adjustment optimization",
          "Modifier appropriateness validation",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Zap} alt="AI-Powered Coding Support Assistant" loading="lazy" />,
    icon: <BiotechOutlinedIcon />,
  },
  {
    id: 3,
    title: "Intelligent Compliance Verification System",
    description: (
      <BulletList
        items={[
          "LCD/NCD policy checking",
          "Medical necessity validation",
          "Timely filing verification",
          "Authorization requirement checking",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Info}
    //     alt="Intelligent Compliance Verification System"
    //   loading="lazy" />
    // ),
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    id: 4,
    title: "Streamlined Pre-Bill Review Workflow",
    description: (
      <BulletList
        items={[
          "Prioritized worklists by error type and dollar value",
          "One-click correction application",
          "Bulk resolution for systematic issues",
          "Coder productivity tracking",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={BarChart}
    //     alt="Streamlined Pre-Bill Review Workflow"
    //   loading="lazy" />
    // ),
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    id: 5,
    title: "Multi-Source Data Connector",
    description: (
      <BulletList
        items={[
          "EMR integration for clinical data",
          "Practice management system connectivity",
          "Claim scrubber engine integration",
          "Real-time payer policy updates",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Data} alt="Multi-Source Data Connector" loading="lazy" />,
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
