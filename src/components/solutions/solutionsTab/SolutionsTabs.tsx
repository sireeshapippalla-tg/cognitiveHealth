import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BlogContainer,
  StickyTabsWrapper,
  TabsContainer,
  TabButton,
  ActiveBackground,
  TabText,
  TabButtonInner,
} from "./SolutionsTabs.style";

import PaymentPostingPage from "../../../pages/solutions/PaymentPostingPage";
import LockBoxAnalysisPage from "../../../pages/solutions/LockBoxAnalysisPage";
import DenialWorkFlowPage from "../../../pages/solutions/DenialWorkFlowPage";
import EligibilityDiscoveryPage from "../../../pages/solutions/EligibilityDiscoveryPage";
import ContractAnalysisPage from "../../../pages/solutions/ContractAnalysisPage";
import PreBillServicesPage from "../../../pages/solutions/PreBillServicesPage";

import Vector from "../../../assets/Vector.svg";
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";
import Analysis from "../../../assets/Analysis.svg";
import PreBill from "../../../assets/Prebill.svg";

const SolutionsTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTabClickRef = React.useRef(false);
  const tabs = [
    {
      value: "paymentPosting",
      label: "Payment Posting",
      icon: (
        <img
          width={28}
          height={28}
          src={Vector}
          alt="Vector Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
    {
      value: "lockboxManagement",
      label: "Lockbox Management",
      icon: (
        <img
          width={28}
          height={28}
          src={Frame}
          alt="Frame Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
    {
      value: "denialWorkflow",
      label: "Denials Workflow",
      icon: (
        <img
          width={28}
          height={28}
          src={Workflow}
          alt="Workflow Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
    {
      value: "eligibilityDiscovery",
      label: "Eligibility Discovery",
      icon: (
        <img
          width={28}
          height={28}
          src={Eligibility}
          alt="Eligibility Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
    {
      value: "contractAnalysis",
      label: "Contract Analysis",
      icon: (
        <img
          width={28}
          height={28}
          src={Analysis}
          alt="Analysis Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
    {
      value: "preBillReview",
      label: "Pre-Bill Services",
      icon: (
        <img
          width={28}
          height={28}
          src={PreBill}
          alt="Pre-Bill Icon"
          style={{ width: 28, height: 28 }}
          loading="lazy"
        />
      ),
    },
  ];

  const getActiveTab = (pathname: string) => {
    if (pathname.includes("/lockbox")) return 1;
    if (pathname.includes("/denials")) return 2;
    if (pathname.includes("/eligibility")) return 3;
    if (pathname.includes("/contract-analysis")) return 4;
    if (pathname.includes("/pre-bill")) return 5;
    return 0; // paymentPosting
  };

  const activeTab = getActiveTab(location.pathname);

  const tabPaths = [
    "/solutions/payment-posting",
    "/solutions/lockbox",
    "/solutions/denials",
    "/solutions/eligibility",
    "/solutions/contract-analysis",
    "/solutions/pre-bill",
  ];

  useEffect(() => {
    // If there is NO hash/path match, user came from another page
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!isTabClickRef.current) {
      // Came from another page → start at top
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Internal tab click → scroll to content
    const element = document.getElementById("solutions-content");
    if (!element) return;

    requestAnimationFrame(() => {
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });

    isTabClickRef.current = false;
  }, [location.pathname]);

  const handleTabChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    newValue: number
  ) => {
    isTabClickRef.current = true;

    navigate(tabPaths[newValue], {
      replace: true,
    });
  };
  return (
    <BlogContainer>
      <StickyTabsWrapper>
        <TabsContainer>
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.value}
              onClick={(e) => handleTabChange(e, index)}
              $active={activeTab === index}
            >
              {activeTab === index && (
                <ActiveBackground
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                />
              )}

              <TabButtonInner $active={activeTab === index}>
                {/* {tab.icon} */}
                <TabText $active={activeTab === index}>{tab.label}</TabText>
              </TabButtonInner>
            </TabButton>
          ))}
        </TabsContainer>
      </StickyTabsWrapper>

      <motion.div
        id="solutions-content"
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 0 && <PaymentPostingPage />}
        {activeTab === 1 && <LockBoxAnalysisPage />}
        {activeTab === 2 && <DenialWorkFlowPage />}
        {activeTab === 3 && <EligibilityDiscoveryPage />}
        {activeTab === 4 && <ContractAnalysisPage />}
        {activeTab === 5 && <PreBillServicesPage />}
      </motion.div>
    </BlogContainer>
  );
};

export default SolutionsTabs;

