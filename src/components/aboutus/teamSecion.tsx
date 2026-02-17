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
    defaultOpen: true,
    title: "Pavani Munjuluri",
    subtitle: "Chief Executive Officer",
    image: pavaniImg,
    description: `With more than 18 years in healthcare, Pavani brings significant experience and expertise working with both payers and providers to address the
      challenges of a changing healthcare landscape. Prior to founding CognitiveHealth, Pavani was responsible for managing P&L for large organizations focused on analytics, business process management, and IT
      consulting services with responsibility for managing up to $100M in business.
`,
  },
  {
    id: 2,
    title: "BM Chittaranjan",
    subtitle: "President",
    image: chittaranjanImg,
    description: `BM has more than two decades of experience managing start-ups and large
                enterprise organizations. He has worked in global organizations, managed
                core IT and BPO operations, and is well-versed in people and process
                management. As a healthcare thought leader with a deep understanding of
                changing technologies, he applies his knowledge with design thinking to help
                transform and grow businesses.`,
  },
  {
    id: 3,
    title: "John Torr",
    subtitle: "Chief Growth Officer",
    image: johnTorrImg,
    description: `John has three decades of sales and marketing leadership experience at a
              variety of software and financial services companies. He spent the last 15 years
              exclusively in the healthcare industry, with projects ranging from building a
              sales team for a start-up to managing an experienced team with $600M in
              revenue. John's vast operational and IT systems experience offers clients a
              unique, comprehensive, and visionary understanding of how the different
              players and stakeholders in the healthcare industry operate, collaborate and
              achieve success.`,
  },
  {
    id: 4,
    title: "Albert Porco",
    subtitle: "Chief Solutions Architect",
    image: albertImg,
    description: `Albert brings extensive experience to this role as one of the first CIOs to
                 successfully lead a transformation to a 100%, all-digital hospital. He has been a
                 CIO for hospitals and health systems, and CTO for the New York Department of
                 Health.`,
  },
  {
    id: 5,
    title: "NK Changalasetti",
    subtitle: "VP, Engineering & Delivery",
    image: nkImg,
    description: `NK has over 20 years of technology experience. He has a strong technical
                 background specializing in Product Research & Development, and Enterprise
                 Solutions & Architecture. He has worked in global organizations and has been
                 responsible for global delivery.`,
  },
  {
    id: 6,
    title: "Rambabu Gandla",
    subtitle: "Director, Product Technology",
    image: rambabuImg,
    description: `Ram has over 20 years of experience in Enterprise Solutions and Architecture.
                 His work experience includes organizations delivering advanced technology
                 systems, solutions, architecture and applications. He brings a comprehensive
                 mix of business management and technology, along with the ability to lead
                 multiple development teams through accelerated technology projects.`,
  },
  {
    id: 7,
    title: "Vispi Gowadia",
    subtitle: "VP, Infrastructure & Technology",
    image: vispiImg,
    description: `Vispi has over 28 years of Technical Operations and Security experience. He has
                 an innate ability to direct cross-functional teams of experts to analyze systems
                 processes and implement infrastructural and process improvements in a
                 global environment.
                \n\n
                 In addition, he brings a wealth of knowledge in Security, Telecom, Data Center,
                 Cloud Systems and Application Integration. His insight to future Hyper-
                 Convergent cloud technologies weaves together performance, risk,
                 compliance, business continuity, continuous integration, disaster recovery
                 planning and management for all client and corporate technology needs.`,
  },
  {
    id: 8,
    title: "Simeon Friedman",
    subtitle: "Chief Financial Advisor",
    image: simeonImg,
    description:`Simeon Friedman has more than 18 years of experience in accounting,
                 financial analysis, tax and business consulting across a wide spectrum of
                 industries. These include manufacturing, real estate, wholesale distribution,
                 retail, information technology and healthcare.
                 \n\n
                 For the past 10 years he has been a partner at Saul N. Friedman & Company, a
                 prestigious accounting firm established in 1973. In this position he had firm-
                 wide management responsibilities of a large team of accountants and other
                 financial professionals, delivering services to hundreds of clients. He has
                 extensive expertise in financial consulting, mergers and acquisitions, forensics
                 and due diligence.`
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
