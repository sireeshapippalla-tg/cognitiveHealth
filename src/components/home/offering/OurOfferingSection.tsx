import { Grid } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description"; // Placeholder icons
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SecurityIcon from "@mui/icons-material/Security";

import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { FeatureCard } from "../../ui/featureCard/FeatureCard";
import { SectionContainer, Wrapper } from "./ourOfferingSection.styles";

const offerings = [
  {
    title: "Patient Access and Authorization",
    icon: <DescriptionIcon />,
    link: "#",
  },
  {
    title: "Claims Management",
    icon: <VerifiedUserIcon />,
    link: "#",
  },
  {
    title: "Denial Avoidance",
    icon: <AccountBalanceWalletIcon />,
    link: "#",
  },
  {
    title: "Eligibility Discovery",
    icon: <MonitorHeartIcon />,
    link: "#",
  },
  {
    title: "Clinical Lifecycle",
    icon: <BarChartIcon />,
    link: "#",
  },
  {
    title: "Universal Payer Discovery",
    icon: <SecurityIcon />,
    link: "#",
  },
];

const OurOfferingSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle title="Our Offering" align="center" maxWidth={700} />

        <Grid container spacing={4}>
          {offerings.map((offering, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <FeatureCard
                title={offering.title}
                icon={offering.icon}
                onClick={() => console.log(`Clicked ${offering.title}`)}
                linkText="Lear More"
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </SectionContainer>
  );
};

export default OurOfferingSection;
