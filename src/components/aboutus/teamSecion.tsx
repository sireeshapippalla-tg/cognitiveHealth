import { Grid } from "@mui/material";
import ExpandableCard, { type ExpandableItem } from "../ui/teamCard/expandableCard";
import {
  SectionContainer,
  HeaderTitle,
  HeaderSubtitle,
  GridWrapper,
} from "./aboutus.style";

const teamData: ExpandableItem[] = [
  {
    id: 1,
    title: "Pavani Munjuluri",
    subtitle: "Chief Executive Officer",
    image: "/team/pavani.jpg",
    description:
      "With more than 15 years in healthcare, Pavani brings deep experience across healthcare revenue cycle management and operational leadership.",
  },
  {
    id: 2,
    title: "BM Chittaranjan",
    subtitle: "President",
    image: "/team/chittaranjan.jpg",
  },
  {
    id: 3,
    title: "John Torr",
    subtitle: "Chief Growth Officer",
    image: "/team/john.jpg",
  },
  {
    id: 4,
    title: "Albert Porco",
    subtitle: "Chief Solutions Architect",
    image: "/team/albert.jpg",
  },
];

const TeamSection = () => {
  return (
    <SectionContainer>
      <HeaderTitle variant="h4">Our Team</HeaderTitle>

      <HeaderSubtitle>
        Our experienced team of professionals from the healthcare industry is
        committed to delivering results for our customers.
      </HeaderSubtitle>

      <GridWrapper>
        <Grid container spacing={3}>
          {teamData.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={member.id}>
              <ExpandableCard item={member} variant="team" />
            </Grid>
          ))}
        </Grid>
      </GridWrapper>
    </SectionContainer>
  );
};

export default TeamSection;
