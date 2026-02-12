import { Grid } from "@mui/material";
import ExpandableCard, {
  type ExpandableItem,
} from "../ui/teamCard/expandableCard";
import {
  SectionContainer,
  HeaderTitle,
  HeaderSubtitle,
  GridWrapper,
} from "./aboutus.style";

import pavaniImg from "../../assets/aboutUs/pavaniImg.svg";
import chittaranjanImg from "../../assets/aboutUs/chittaranjan.svg";
import johnTorrImg from "../../assets/aboutUs/johnTorr.svg";
import albertImg from "../../assets/aboutUs/albert.svg";
import nkImg from "../../assets/aboutUs/nk.svg";
import rambabuImg from "../../assets/aboutUs/rambabu.svg";
import vispiImg from "../../assets/aboutUs/vispi.svg";
import simeonImg from "../../assets/aboutUs/simeon.svg";

const teamData: ExpandableItem[] = [
  {
    id: 1,
    defaultOpen:true,
    title: "Pavani Munjuluri",
    subtitle: "Chief Executive Officer",
    image: pavaniImg,
    description:
      "With more than 15 years in healthcare, Pavani brings deep experience and expertise across healthcare revenue cycle management, process optimization, and operational leadership. She has successfully led teams in delivering complex healthcare technology and services solutions, driving measurable outcomes for customers.",
  },
  {
    id: 2,
    title: "BM Chittaranjan",
    subtitle: "President",
    image: chittaranjanImg,
  },
  {
    id: 3,
    title: "John Torr",
    subtitle: "Chief Growth Officer",
    image: johnTorrImg,
  },
  {
    id: 4,
    title: "Albert Porco",
    subtitle: "Chief Solutions Architect",
    image: albertImg,
  },
  {
    id: 5,
    title: "NK Changalasetti",
    subtitle: "VP, Engineering & Delivery",
    image: nkImg,
  },
  {
    id: 6,
    title: "Rambabu Gandla",
    subtitle: "Director, Product Technology",
    image: rambabuImg,
  },
  {
    id: 7,
    title: "Vispi Gowadia",
    subtitle: "VP, Infrastructure & Technology",
    image: vispiImg,
  },
  {
    id: 8,
    title: "Simeon Friedman",
    subtitle: "Chief Financial Advisor",
    image:simeonImg,
  },
];

const TeamSection = () => {
  return (
    <SectionContainer id="team" maxWidth={false}>
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
