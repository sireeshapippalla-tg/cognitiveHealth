import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";

// import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.webp";
// import Zap from "../../../assets/solutions/Core Capabilities/Zap.webp";
// import Info from "../../../assets/solutions/Core Capabilities/Info.webp";
// import Barchart from "../../../assets/solutions/Core Capabilities/BarChart.webp";
// import Data from "../../../assets/solutions/Core Capabilities/Data.webp";
import BulletList from "../../ui/BulletList";

import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Contract Intelligence Research Assistant",
    description: (
      <BulletList
        items={[
          "Digitization of paper and PDF contracts",
          "AI extraction of fee schedules, terms, and conditions",
          "Contract clause interpretation and modeling",
          "Version control and amendment tracking",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Workbench}
    //     alt="Contract Intelligence Research Assistant"
    //   loading="lazy" />
    // ),
    icon: <ManageSearchOutlinedIcon sx={{ fontSize: 30 }} />,
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Payment Variance Detection System",
    description: (
      <BulletList
        items={[
          "Real-time comparison of payments vs contract terms",
          "Automated calculation of expected reimbursement",
          "Variance flagging and prioritization by dollar amount",
          "Trend analysis for systematic underpayments",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Zap} alt="Payment Variance Detection System" loading="lazy" />,
    icon: <BoltOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 3,
    title: "Contract Change Monitoring Service",
    description: (
      <BulletList
        items={[
          "Automated alerts for contract amendments and updates",
          "Payer portal monitoring for policy changes",
          "Federal register tracking for Medicare updates",
          "Impact analysis of contract changes on revenue",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Info} alt="Contract Change Monitoring Service" loading="lazy" />,
    icon: <NotificationsActiveOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    title: "Charge Master Synchronization Engine",
    description: (
      <BulletList
        items={[
          "Alignment of charge master with contract fee schedules",
          "Automated pricing updates when contracts change",
          "Multi-payer charge master optimization",
          "Compliance validation against CMS and state regulations",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Barchart} // ⚠ ensure correct import name
    //     alt="Charge Master Synchronization Engine"
    //   loading="lazy" />
    // ),
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 5,
    title: "Contract Performance Analytics Dashboard",
    description: (
      <BulletList
        items={[
          "Payer compliance scorecards",
          "Revenue leakage quantification",
          "Contract vs actual reimbursement trending",
          "Negotiation leverage insights and recommendations",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Data} alt="Contract Performance Analytics Dashboard" loading="lazy" />,
    icon: <BarChartOutlinedIcon sx={{ fontSize: 30 }} />,
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
