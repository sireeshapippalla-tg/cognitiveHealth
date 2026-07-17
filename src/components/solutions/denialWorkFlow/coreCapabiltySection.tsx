import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
// import Workbench from "../../../assets/solutions/Core Capabilities/Workbench.webp";
// import Zap from "../../../assets/solutions/Core Capabilities/Zap.webp";
// import Info from "../../../assets/solutions/Core Capabilities/Info.webp";
// import Barchart from "../../../assets/solutions/Core Capabilities/BarChart.webp";
// import Data from "../../../assets/solutions/Core Capabilities/Data.webp";
import BulletList from "../../ui/BulletList";

import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import CoreCapabilitiesLayout from "../CoreCapabilitiesLayout";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Low Dollar Denial Prioritization Engine",
    description: (
      <BulletList
        items={[
          "Automatic filtering of denials by dollar threshold",
          "Cost-benefit analysis for appeal pursuit",
          "Bulk resolution strategies for recurring low-value denials",
          "Trend analysis to prevent future occurrences",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Workbench}
    //     alt="Low Dollar Denial Prioritization Engine"
    //   loading="lazy" />
    // ),
    icon: <PriceCheckOutlinedIcon />,
  },
  {
    id: 2,
    title: "Proactive Denial Trigger System",
    description: (
      <BulletList
        items={[
          "Real-time pre-submission claim scrubbing",
          "Predictive denial modeling based on historical data",
          "Automated correction suggestions before submission",
          "Payer-specific rule enforcement",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Zap} alt="Proactive Denial Trigger System" loading="lazy" />,
    icon: <ShieldOutlinedIcon />,
  },
  {
    id: 3,
    title: "Automated Appeals Letter Generator",
    description: (
      <BulletList
        items={[
          "Evidence-based appeal composition using clinical notes",
          "Payer policy and LCD/NCD citation integration",
          "Customizable templates by denial reason and payer",
          "Bulk appeal generation for systemic denials",
        ]}
      />
    ),
    // icon: <img width={48} height={48} src={Info} alt="Automated Appeals Letter Generator" loading="lazy" />,
    icon: <DescriptionOutlinedIcon />,
  },
  {
    id: 4,
    title: "Medical Records Request Orchestrator",
    description: (
      <BulletList
        items={[
          "Automated identification of required documentation",
          "EMR integration for record retrieval",
          "Intelligent redaction and HIPAA compliance",
          "Fax, portal, and mail submission automation",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Barchart}
    //     alt="Medical Records Request Orchestrator"
    //   loading="lazy" />
    // ),
    icon: <MedicalInformationOutlinedIcon />,
  },
  {
    id: 5,
    title: "AI-Powered Resolution Recommendation Assistant",
    description: (
      <BulletList
        items={[
          "Pattern recognition across historical denials",
          "Suggested resolution actions based on success rates",
          "Payer-specific strategy recommendations",
          "Escalation guidance for complex cases",
        ]}
      />
    ),
    // icon: (
    //   <img width={48} height={48}
    //     src={Data}
    //     alt="AI-Powered Resolution Recommendation Assistant"
    //   loading="lazy" />
    // ),
    icon: <PsychologyAltOutlinedIcon />,
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

        {/* <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid> */}
        <CoreCapabilitiesLayout items={capabilities} />
      </Wrapper>
    </div>
  );
};

export default CoreCapabilitiesSection;
