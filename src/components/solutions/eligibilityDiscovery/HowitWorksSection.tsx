import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  // HowItSectionContainer,
  HowItWrapper,
} from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
// import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
// import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
// import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
// import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
// import paymentImage13 from '.././../../assets/solutions/paymentImage13.svg';
// import paymentImage14 from '.././../../assets/solutions/paymentImage14.svg'
// import paymentImage15 from '.././../../assets/solutions/paymentImage15.svg'
import { ArrowBox, StepsCard, StepsRow } from "../../home/howItWorks/HowItWorksSection.style";


import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";


const steps = [
  {
    title: "Automated Eligibility Check",
    description:
      "Real-time verification at scheduling or registration. Multi-payer batch verification overnight. Integration with EMR/practice management systems",
    //  icon: <InboxOutlinedIcon />,
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    title: "Benefit Discovery & Analysis",
    description:
      "Extract detailed coverage information. Identify authorization requirements. Calculate patient responsibility estimates.",
    // icon: <SyncAltOutlinedIcon />,
    icon: <AnalyticsOutlinedIcon />,
  },
   {
    title: "Alert & Workflow Triggering",
    description:
      "Flag coverage issues for resolution. Trigger authorization workflows when needed. Notify financial counseling for high patient liability.",
    // icon: <FactCheckOutlinedIcon />,
    icon: <NotificationsActiveOutlinedIcon />,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Scheduled re-verification before appointments. Coverage change detection. Expired authorization alerts",
    // icon: <InsertChartOutlinedIcon />,
    icon: <AutorenewOutlinedIcon />,
  },
  {
    title: "Multiple Provider Settings",
    description:
      "Acute Care & Hospital Systems. Home Health & Hospice. Behavioral Health & Substance Use. Long-Term Care & Skilled Nursing Facilities. Specialty & Ambulatory Providers. Physician Practices & Medical Groups.",
    icon: <BusinessOutlinedIcon />,
  },
];

const HowItWorksSection = () => {
  return (
    // <HowItSectionContainer>
      <HowItWrapper>
        <SectionTitle
          title="How It Works"
          // subtitle="Streamlined workflow from payment intake to final reconciliation"
        />

    <StepsCard sx={{marginTop:4}}>
          <StepsRow>
            {steps.map((step, index) => (
              <>
                <ProcessStep
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />

                {index !== steps.length - 1 && (
                  <ArrowBox>
                    <ArrowForwardIcon />
                  </ArrowBox>
                )}
              </>
            ))}
          </StepsRow>
        </StepsCard>
      </HowItWrapper>
    // {/* </HowItSectionContainer> */}
  );
};

export default HowItWorksSection;
