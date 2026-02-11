import { Grid } from "@mui/material";
// import DescriptionIcon from "@mui/icons-material/Description"; // Placeholder icons
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SecurityIcon from "@mui/icons-material/Security";

import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { FeatureCard } from "../../ui/featureCard/FeatureCard";
import { SectionContainer, Wrapper } from "./ourOfferingSection.styles";
import Vector from "../../../assets/Vector.svg"; 
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";





const offerings = [
  {
    title: "Cash Posting and Advanced Recon",
    icon: (
  <img
    src={Vector}
    alt="Vector Icon"
    style={{ width: 24, height: 24 }}
  />
),

    link: "#",
  },
  {
    title: "Lockbox Automation",
   icon: (
  <img
    src={Frame}
    alt="Frame Icon"
    style={{ width: 24, height: 24 }}
  />
),
    link: "#",
  },
  {
    title: "Eligibility Discovery ",
   icon: (
  <img
    src={Eligibility}
    alt="Eligibility Icon"
    style={{ width: 24, height: 24 }}
  />
),
    link: "#",
  },
  {
    title: "Denials Workflow ",
   icon: (
  <img
    src={Workflow}
    alt="Workflow Icon"
    style={{ width: 24, height: 24 }}
  />
),
    link: "#",
  },
  {
    title: "Contract Analytics",
    icon: <BarChartIcon />,
    link: "#",
  },
  {
    title: "Enhanced Pre-bill services",
    icon: <SecurityIcon />,
    link: "#",
  },
];

const OurOfferingSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle title="Our Offering" align="center" maxWidth={700}  />

        <Grid container spacing={4}>
          {offerings.map((offering, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <FeatureCard
                title={offering.title}
                icon={offering.icon}
                onClick={() => console.log(`Clicked ${offering.title}`)}
                linkText="Learn More"
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </SectionContainer>
  );
};

export default OurOfferingSection;
