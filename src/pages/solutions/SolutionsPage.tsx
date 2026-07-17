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
  
  const getActiveTab = (pathname: string) => {
    if (pathname.includes("/lockbox")) return "lockboxManagement";
    if (pathname.includes("/denials")) return "denialWorkflow";
    if (pathname.includes("/eligibility")) return "eligibilityDiscovery";
    if (pathname.includes("/contract-analysis")) return "contractAnalysis";
    if (pathname.includes("/pre-bill")) return "preBillReview";
    return "paymentPosting";
  };

  const activeTab = getActiveTab(location.pathname);

  const seoData: Record<
    string,
    { title: string; description: string; keywords: string; schema?: object }
  > = {
    paymentPosting: {
      title: "AI Payment Posting Solutions",
      description:
        "Discover how to automate healthcare payment posting with CognitiveHealth's AI agents. Reduce manual entry errors and speed up your revenue cycle.",
      keywords:
        "Automatic payment posting medical billing, best AI for payment posting, automated RCM reconciliation, healthcare fintech tools",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Payment Posting",
        provider: { "@type": "Organization", name: "CognitiveHealth" },
        description:
          "Healthcare RCM automation for payment posting using agentic AI.",
        areaServed: "USA",
      },
    },
    lockboxManagement: {
      title: "AI Lockbox Analysis",
      description:
        "Optimize lockbox management using AI-powered data extraction. Automate the reconciliation of complex paper and digital deposits.",
      keywords:
        "Healthcare lockbox automation, AI for lockbox analysis, best medical lockbox software, automated banking reconciliation",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Lockbox Analysis",
        provider: { "@type": "Organization", name: "CognitiveHealth" },
        description:
          "AI-powered data extraction and reconciliation for healthcare lockbox management.",
      },
    },
    denialWorkflow: {
      title: "AI Denial Management & Workflow",
      description:
        "Stop insurance denials with AI-driven insights and automated workflows. The best solution for preventing RCM denials in healthcare.",
      keywords:
        "Best denial management software, prevent insurance denials AI, healthcare RCM automated workflows, medical billing denial prevention",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Denial Management",
        provider: { "@type": "Organization", name: "CognitiveHealth" },
        description:
          "Automated workflows and AI-driven insights to prevent and manage insurance denials.",
      },
    },
    eligibilityDiscovery: {
      title: "AI Eligibility Discovery",
      description:
        "Automatically find missing insurance coverage and improve reimbursement with AI-powered eligibility verification.",
      keywords:
        "Best insurance discovery tools RCM, AI eligibility checking healthcare, automated patient insurance verification",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Eligibility Discovery",
        provider: { "@type": "Organization", name: "CognitiveHealth" },
      },
    },
    contractAnalysis: {
      title: "AI Contract Analysis",
      description:
        "Monitor payer compliance and analyze healthcare contracts with AI. Ensure you are getting paid every dollar according to your contract.",
      keywords:
        "AI healthcare contract audit, analyze payer contracts RCM, best healthcare contract analysis software",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Contract Analysis",
      },
    },
    preBillReview: {
      title: "AI Pre-Bill Services",
      description:
        "Prevent claim rejections before they happen with AI claim scrubbing and pre-bill audits for healthcare providers.",
      keywords:
        "Best pre-bill review software, automated medical claim scrubbing, AI audit healthcare billing, prevent rejected claims",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Pre-Bill Services",
      },
    },
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
      <ResultsSection />
    </>
  );
};

export default SolutionsPage;
