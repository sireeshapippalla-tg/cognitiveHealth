import { Container, Grid, Typography } from "@mui/material";
import type { TeamMember } from "../ui/teamCard/TeamCard";
import TeamCard from "../ui/teamCard/TeamCard";


const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Pavani Munjuluri",
    role: "Chief Executive Officer",
    image: "/team/pavani.jpg",
    description:
      "With more than 15 years in healthcare, Pavani brings deep experience across healthcare revenue cycle management and operational leadership.",
  },
  {
    id: 2,
    name: "BM Chittaranjan",
    role: "President",
    image: "/team/chittaranjan.jpg",
  },
  {
    id: 3,
    name: "John Torr",
    role: "Chief Growth Officer",
    image: "/team/john.jpg",
  },
  {
    id: 4,
    name: "Albert Porco",
    role: "Chief Solutions Architect",
    image: "/team/albert.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      {/* Section Header */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        mb={2}
        fontSize={{ xs: 26, md: 32 }}
      >
        Our Team
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        maxWidth={600}
        mx="auto"
        mb={6}
        fontSize={{ xs: 14, md: 16 }}
      >
        Our experienced team of professionals from the healthcare industry is
        committed to delivering results for our customers.
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={3}>
        {teamData.map((member) => (
          <Grid  size={{xs:12,sm:6,md:6}} key={member.id}>
            <TeamCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;
