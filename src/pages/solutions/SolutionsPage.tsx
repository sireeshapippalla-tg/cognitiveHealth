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
const SolutionsPage = () => {
  const location = useLocation();
   const activeTab = location.hash.replace("#", "") || "paymentPosting";
  return (
    <>
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
