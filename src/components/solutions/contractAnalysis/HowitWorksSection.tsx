import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HowItSectionContainer, HowItWrapper } from "./solutions.style";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import paymentImage13 from ".././../../assets/solutions/paymentImage13.svg";
import paymentImage14 from ".././../../assets/solutions/paymentImage14.svg";
import paymentImage15 from ".././../../assets/solutions/paymentImage15.svg";
import {
  ArrowBox,
  StepsCard,
  StepsRow,
} from "../../home/howItWorks/HowItWorksSection.style";

const steps = [
  {
    title: "Payment Intake",
    description:
      "Automated ingestion from multiple sources including credit cards, paper checks, EFTs, and electronic remittances (835 files). All payment data flows into the unified workbench.",
    icon: <img src={paymentImage13} alt="Payment Intake" />,
  },
  {
    title: "Automated Matching & Handling",
    description:
      "AI-powered engine applies configurable business rules to automatically match payments with patient accounts, claims, and invoices. Unmatched payments and variances are intelligently identified and routed for resolution.",
    icon: <img src={paymentImage14} alt="Automated Matching & Handling" />,
  },
  {
    title: "Real-Time Reporting",
    description:
      "Comprehensive analytics dashboards provide instant visibility into cash positions, reconciliation status, team performance, and operational KPIs.",
    icon: <img src={paymentImage15} alt="Real-Time Reporting" />,
  },
];

const HowItWorksSection = () => {
  return (
    <HowItSectionContainer>
      <HowItWrapper>
        <SectionTitle
          title="How It Works"
          subtitle="Streamlined workflow from payment intake to final reconciliation"
        />

        <StepsCard sx={{ marginTop: 4 }}>
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
    </HowItSectionContainer>
  );
};

export default HowItWorksSection;
