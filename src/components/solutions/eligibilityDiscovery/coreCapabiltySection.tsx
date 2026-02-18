import { Grid } from "@mui/material";
import type { ExpandableItem } from "../../ui/teamCard/expandableCard";
import ExpandableCard from "../../ui/teamCard/expandableCard";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { Wrapper } from "./solutions.style";
// import paymentImage5 from "../../../assets/solutions/paymentImage5.svg";
// import paymentImage2 from "../../../assets/solutions/paymentImage2.svg";
// import paymentImage6 from "../../../assets/solutions/paymentImage6.svg";
// import paymentImage7 from "../../../assets/solutions/paymentImage7.svg";
// import paymentImage8 from "../../../assets/solutions/paymentImage8.svg";

import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";


const capabilities: ExpandableItem[] = [
  {
    id: 1,
    title: "Real-Time Coverage Verification Portal",
    description: `This instant verification system connects directly to insurance company databases and clearinghouses to provide immediate eligibility confirmation at the point of service. It retrieves benefit details such as active coverage dates, copayment amounts, deductible status, and coverage limitations within seconds. Results are displayed in an easy-to-read format so registration staff can collect correct payments and identify coverage issues before services are rendered.`,
    // icon: (
    //   <img src={paymentImage5} alt="Real-Time Coverage Verification Portal" />
    // ),
    icon:<ViewQuiltOutlinedIcon/>,
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Multi-Payer Coordination Manager",
    description: `This system automatically identifies coordination of benefits situations and determines the correct billing sequence when patients have multiple insurance coverages. It applies industry-standard rules to establish primary, secondary, and tertiary payers, sequences claims to maximize reimbursement, tracks payer responses, and adjusts subsequent claims accordingly. The system connects to most commercial payers, clearinghouses, Medicare, and most state Medicaid programs.`,
    // icon: <img src={paymentImage2} alt="Multi-Payer Coordination Manager" />,
     icon:<BoltOutlinedIcon/>,
  },
  {
    id: 3,
    title: "Automated Patient Benefit Summaries",
    description: `This communication tool generates clear, patient-friendly explanations of insurance benefits and estimated out-of-pocket costs for scheduled services. It translates complex insurance terminology into understandable language, including deductible status, coinsurance percentages, and coverage limitations—helping patients understand financial responsibility before care and improving point-of-service collections.`,
    // icon: <img src={paymentImage6} alt="Automated Patient Benefit Summaries" />,
     icon:<ErrorOutlineOutlinedIcon/>,
  },
  {
    id: 4,
    title: "Authorization Tracking and Alert System",
    description: `This proactive monitoring solution maintains a comprehensive database of prior authorization requirements by payer, service type, and procedure code. It flags services needing authorization during scheduling, tracks request status, and sends automated alerts when authorizations are nearing expiration—ensuring continuous coverage and preventing service disruptions.`,
    // icon: (
    //   <img src={paymentImage7} alt="Authorization Tracking and Alert System" />
    // ),
     icon:<FormatListBulletedOutlinedIcon/>,
  },
  {
    id: 5,
    title: "Scheduled Re-Verification Automation",
    description: `This automated system re-verifies patient eligibility at configurable intervals before scheduled appointments to detect coverage changes between scheduling and service delivery. It compares current eligibility with prior verification data and alerts staff to changes in coverage, benefits, or patient responsibility—preventing check-in delays and reducing denials caused by coverage termination or updates.`,
    // icon: (
    //   <img src={paymentImage8} alt="Scheduled Re-Verification Automation" />
    // ),
     icon:<StorageOutlinedIcon/>,
  },
];

const CoreCapabilitiesSection = () => {
  return (
    <div>
      <Wrapper>
        <SectionTitle
          title="Core Capabilities"
          subtitle="Powerful features designed to streamline every aspect of payment processing and reconciliation"
          marginBottom={30}
        />

        <Grid container spacing={2}>
          {capabilities.map((item) => (
            <Grid size={{ xs: 12 }} key={item.id}>
              <ExpandableCard item={item} variant="capability" />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default CoreCapabilitiesSection;
