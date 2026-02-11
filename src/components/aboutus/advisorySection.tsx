import {  Grid } from "@mui/material";


import { SectionTitle } from "../ui/sectionTitle/SectionTitle";
import type { Advisor } from "../ui/advisoryCard/advisoryCard";
import AdvisorCard from "../ui/advisoryCard/advisoryCard";
import { GridWrapperAdvisory, SectionContainerAdvisoy } from "./aboutus.style";

const advisoryData: Advisor[] = [
  {
    id: 1,
    name: "David Wurcel",
    role: "Executive Advisor – Provider Market",
    description:
      "David has over 30 years of experience in healthcare leadership and advisory roles. He brings deep expertise in provider operations, strategic growth, and healthcare transformation initiatives.",
  },
  {
    id: 2,
    name: "Michael M Dudley",
    role: "Executive Advisor – Payer Industry",
    description:
      "Michael has extensive experience in the payer and healthcare insurance industry. He has held senior leadership roles and provides strategic guidance on payer operations and healthcare policy environments.",
  },
  {
    id: 3,
    name: "Ali Pabrai",
    role: "Executive Advisor – Compliance and Security",
    description:
      "Ali is a recognized expert in cybersecurity, compliance, and risk management. He advises CognitiveHealth on healthcare security standards, regulatory compliance, and enterprise risk mitigation.",
  },
];

const AdvisorySection: React.FC = () => {
  return (
   <SectionContainerAdvisoy>
      <SectionTitle
        title="Advisory Team"
        subtitle="Our advisors are well-known thought leaders drawn from the healthcare industry."
        maxWidth={620}
      />
      <GridWrapperAdvisory>

      <Grid container spacing={3} mt={2}>
        {advisoryData.map((advisor) => (
          <Grid  size={{xs:12,sm:6,md:4}} key={advisor.id}>
            <AdvisorCard advisor={advisor} />
          </Grid>
        ))}
      </Grid>
      </GridWrapperAdvisory>
    </SectionContainerAdvisoy>
  );
};

export default AdvisorySection;
