import { useLocation } from "react-router-dom";
// import SolutionsHeroSection from "../../components/solutions/paymentPosting/solutionsHeroSection";
import ResultsSection from "../../components/solutions/resultsSection/ResultsSection";
import SolutionsTabs from "../../components/solutions/solutionsTab/SolutionsTabs";
import PaymentPostingHero from "../../components/solutions/paymentPosting/solutionsHeroSection";
import LockBoxAnalysisHero from "../../components/solutions/lockboxAnalysis/solutionsHeroSection";
import DenialsHero from "../../components/solutions/denialWorkFlow/solutionsHeroSection";
import EligibilityDiscoveryHero from "../../components/solutions/eligibilityDiscovery/solutionsHeroSection";
import ContractAnalysisHero from "../../components/solutions/contractAnalysis/solutionsHeroSection";
import PreBillServicesHero from "../../components/solutions/preBillServices/solutionsHeroSection";
import SEO from "../../components/SEO";

const SolutionsPage = () => {
  const location = useLocation();
   const activeTab = location.hash.replace("#", "") || "paymentPosting";

   const seoData: Record<string, { title: string; description: string; keywords: string; schema?: object }> = {
    paymentPosting: {
      title: "AI Payment Posting Solutions",
      description: "Automate your payment posting process with AI. Reduce manual entry and increase accuracy in your healthcare revenue cycle.",
      keywords: "Payment Posting AI, Automated Medical Billing, RCM Software",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Payment Posting",
        "provider": { "@type": "Organization", "name": "CognitiveHealth" },
        "description": "Healthcare RCM automation for payment posting using agentic AI.",
        "areaServed": "USA"
      }
    },
    lockboxManagement: {
      title: "AI Lockbox Analysis",
      description: "Optimize your lockbox management with AI-powered data extraction and reconciliation.",
      keywords: "Lockbox Analysis, Healthcare Lockbox, Automated Reconciliation",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Lockbox Analysis",
        "provider": { "@type": "Organization", "name": "CognitiveHealth" },
        "description": "AI-powered data extraction and reconciliation for healthcare lockbox management."
      }
    },
    denialWorkflow: {
      title: "AI Denial Management & Workflow",
      description: "Identify and prevent insurance denials with automated workflows and AI-driven insights.",
      keywords: "Denial Management, Insurance Denials AI, RCM Denial Prevention",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Denial Management",
        "provider": { "@type": "Organization", "name": "CognitiveHealth" },
        "description": "Automated workflows and AI-driven insights to prevent and manage insurance denials."
      }
    },
    eligibilityDiscovery: {
      title: "AI Eligibility Discovery",
      description: "Discover missing insurance coverage and improve reimbursement with AI eligibility checking.",
      keywords: "Eligibility Discovery, Insurance Verification AI, Patient Eligibility",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Eligibility Discovery",
        "provider": { "@type": "Organization", "name": "CognitiveHealth" }
      }
    },
    contractAnalysis: {
      title: "AI Contract Analysis",
      description: "Ensure accurate reimbursement by analyzing payer contracts with AI-powered insights.",
      keywords: "Contract Analysis, Payer Contracts, RCM Contract Audit",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Contract Analysis"
      }
    },
    preBillReview: {
      title: "AI Pre-Bill Review Services",
      description: "Catch errors before submission with AI-powered pre-bill review and audit tools.",
      keywords: "Pre-Bill Review, Medical Claim Audit, AI Claim Scrubbing",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Pre-Bill Review"
      }
    }
  };

  const currentSEO = seoData[activeTab] || seoData.paymentPosting;

  return (
    <>
      <SEO 
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        schema={currentSEO.schema}
      />
      {/* <SolutionsHeroSection /> */}

      {activeTab === "paymentPosting" && <PaymentPostingHero />}
      {activeTab === "lockboxManagement" && <LockBoxAnalysisHero />}
      {activeTab === "denialWorkflow" && <DenialsHero />}
      {activeTab === "eligibilityDiscovery" && <EligibilityDiscoveryHero />}
      {activeTab === "contractAnalysis" && <ContractAnalysisHero />}
      {activeTab === "preBillReview" && <PreBillServicesHero />}
      <SolutionsTabs />
      <ResultsSection/>
    </>
  );
};

export default SolutionsPage;
