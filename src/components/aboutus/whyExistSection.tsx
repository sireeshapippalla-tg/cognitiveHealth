import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Compatibility from "../../assets/Platform/ProductIntellijence/Compatibility.svg";


import FeatureSection from "../ui/featureSection/FeatureSection";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
const HowItWrapper = styled(Box)(({ theme }) => ({
  // maxWidth: 1200,
  margin: "0 auto",
  padding: "16px 80px",
  textAlign: "center",
  marginTop: "30px",
  marginBottom: "30px",
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
    marginBottom: "0px",
    padding: 0,
  },
}));
const features = [
  {
    icon: <ErrorOutlineIcon />,
    title: "Operational Complexity",
    description:
      "Healthcare revenue cycle operations involve countless manual tasks, exceptions, and edge cases that slow down teams and increase costs.",
  },
  {
    icon:<img src={Compatibility} alt="Compatibility" />,

    title: "Fragmented Systems and Data",
    description:
      "Disconnected systems, inconsistent data formats, and lack of integration create inefficiencies and limit visibility across the revenue cycle.",
  },
  {
    icon:<PeopleOutlineIcon />,

    title: "Staffing Shortages",
    description:
      "Healthcare organizations face persistent challenges recruiting and retaining skilled revenue cycle staff, making automation critical.",
  },
  {
    icon: <TrendingDownIcon />,

    title: "Rising Costs and Slower Cash Flow",
    description:
      "Manual processes, errors, and delays lead to higher operating costs, extended AR days, and reduced cash flow performance.",
  },
];

const WhyWeExistSection = () => {
  return (
    // <Box
    //   sx={{
    //     px: { xs: 2, sm: 4, md: 6, lg: 8 },
    //     py: { xs: 4, sm: 6, md: 8 },
    //   }}
    // >
    <HowItWrapper>
      <FeatureSection
        title="Why We Exist"
        subtitle="Healthcare organizations face unprecedented operational challenges that traditional approaches cannot solve. CognitiveHealth exists to address these critical pain points:"
        background="#F9FAFB"
        items={features}
        borderRadius="18px"
      />
    </HowItWrapper>
  );
};

export default WhyWeExistSection;
