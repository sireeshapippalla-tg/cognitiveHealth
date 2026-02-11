import { Container, Grid } from "@mui/material";

import {
  Dashboard,
  Bolt,
  ErrorOutline,
  Insights,
  Storage,
} from "@mui/icons-material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";

const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Unified Payment Workbench",
    description:
      "A centralized command center that brings together all payment activities across multiple sources...",
    icon: <Dashboard />,
    defaultOpen: true,
  },
  { id: 2, title: "Automated Payment Posting Engine", icon: <Bolt /> },
  { id: 3, title: "Exception and Variance Manager", icon: <ErrorOutline /> },
  { id: 4, title: "Real-Time Cash Analytics Dashboard", icon: <Insights /> },
  { id: 5, title: "Multi-Source Data Connector", icon: <Storage /> },
];

const CoreCapabilitiesSection = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle
          title="Core Capabilities"
          subtitle="Powerful features designed to streamline every aspect of payment processing and reconciliation"
        />

        <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid size={{ xs: 12 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default CoreCapabilitiesSection;
