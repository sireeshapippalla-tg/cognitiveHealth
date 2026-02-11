import { Grid } from "@mui/material";

import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { FeatureCard } from "../../ui/featureCard/FeatureCard";
import { SectionContainer, Wrapper } from "./ourOfferingSection.styles";
import Vector from "../../../assets/Vector.svg"; 
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";
import Analysis from "../../../assets/Analysis.svg";
import PreBill from "../../../assets/PreBill.svg";



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
    icon: (
  <img    src={Analysis}
    alt="Analysis Icon"
    style={{ width: 24, height: 24 }}
  />
),
    link: "#",
  },
  {
    title: "Enhanced Pre-bill services",
    icon: (
  <img    src={PreBill}
    alt="PreBill Icon"
    style={{ width: 24, height: 24 }}
  />
),
    link: "#",
  },
];

const OurOfferingSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle title="Our Offering" align="center" maxWidth={700} textColor="var(--color-primary)"/>

        <Grid container spacing={4}>
          {offerings.map((offering, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <FeatureCard
                title={offering.title}
                icon={offering.icon}
                onClick={() => console.log(`Clicked ${offering.title}`)}
                linkText="Learn More"
                variant="pink"
                headerDirection="row"
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </SectionContainer>
  );
};

export default OurOfferingSection;
