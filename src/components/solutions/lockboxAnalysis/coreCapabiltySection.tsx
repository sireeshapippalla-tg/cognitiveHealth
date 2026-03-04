import { Grid} from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";

// import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.png";
// import Zap from "../../../assets/solutions/Core Capabilities/Zap.png";
// import Info from "../../../assets/solutions/Core Capabilities/Info.png";
// import Barchart from "../../../assets/solutions/Core Capabilities/BarChart.png";
// import Data from "../../../assets/solutions/Core Capabilities/Data.png";
import BulletList from "../../ui/BulletList";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BoltIcon from "@mui/icons-material/Bolt";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedIcon from "@mui/icons-material/Verified";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "AI-Powered Correspondence Management System",
    description: (
      <BulletList
        items={[
          "Intelligent classification of mail types (EOBs, checks, letters, notices)",
          "Multi-page document handling and splitting",
          "Automated routing based on document type and content",
          "Integration with physical lockbox services and scanning vendors",
        ]}
      />
    ),
    icon: <AutoAwesomeIcon sx={{ fontSize: 30 }} />,
    // icon: (
    //   <img
    //     src={Workbench}
    //     alt="AI-Powered Correspondence Management System"
    //   />
    // ),
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Multi-Batch Processing Console",
    description: (
      <BulletList
        items={[
          "Process thousands of pages per hour",
          "Batch-level quality control and validation",
          "Real-time processing status tracking",
          "Workload balancing across team members",
        ]}
      />
    ),
    // icon: <img src={Zap} alt="Multi-Batch Processing Console" />,
    icon: <BoltIcon sx={{ fontSize: 30}} />,
  },
  {
    id: 3,
    title: "Intelligent Document Classification Engine",
    description: (
      <BulletList
        items={[
          "Automatic payer identification from EOB formats",
          "Patient vs insurance payment detection",
          "Correspondence vs remittance separation",
          "Check image capture and validation",
        ]}
      />
    ),
    // icon: (
    //   <img
    //     src={Info}
    //     alt="Intelligent Document Classification Engine"
    //   />
    // ),
    icon: <DescriptionIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    title: "Bank Integration and Download Automation",
    description: (
      <BulletList
        items={[
          "Direct bank file downloads (BAI, BAI2, MT940 formats)",
          "Automatic check clearing reconciliation",
          "Deposit slip matching and verification",
          "Missing payment detection and alerts",
        ]}
      />
    ),
    // icon: (
    //   <img
    //     src={Barchart}   
    //     alt="Bank Integration and Download Automation"
    //   />
    // ),
    icon: <AccountBalanceIcon sx={{ fontSize: 30 }} />
  },
  {
    id: 5,
    title: "Continuous Quality Assurance Module",
    description: (
      <BulletList
        items={[
          "Real-time accuracy monitoring",
          "Confidence scoring for each extraction",
          "Automated validation against business rules",
          "Audit trail for compliance and quality review",
        ]}
      />
    ),
    // icon: <img src={Data} alt="Continuous Quality Assurance Module" />,
    icon: <VerifiedIcon sx={{ fontSize: 30}} />
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
