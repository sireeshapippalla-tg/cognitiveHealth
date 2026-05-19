import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHubSpotTracking from "./hooks/useHubSpotTracking";

import { AuthGuard, PublicRoute } from "./routes";
import { ROUTES } from "./routes/RoutePaths";

import MainLayout from "./components/layout/MainLayout";

// Lazy load all pages
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const PlatFormPage = lazy(() => import("./pages/platform/PlatFormPage"));
const AboutUsPage = lazy(() => import("./pages/aboutUs/AboutUsPage"));
const ResourcesPage = lazy(() => import("./pages/resources/ResourcesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const PaymentPostingPage = lazy(() => import("./pages/solutions/PaymentPostingPage"));
const LockBoxAnalysisPage = lazy(() => import("./pages/solutions/LockBoxAnalysisPage"));
const ContractAnalysisPage = lazy(() => import("./pages/solutions/ContractAnalysisPage"));
const EligibilityDiscoveryPage = lazy(() => import("./pages/solutions/EligibilityDiscoveryPage"));
const DenialWorkFlowPage = lazy(() => import("./pages/solutions/DenialWorkFlowPage"));
const PreBillServicesPage = lazy(() => import("./pages/solutions/PreBillServicesPage"));
const ContactUsPage = lazy(() => import("./pages/contactUs/ContactUsPage"));
const RCMReadinessScreen = lazy(() => import("./pages/RcmreadinessScreen"));
const TermsPage = lazy(() => import("./pages/terms&Conditions/TermsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/privacyPolicy/PrivacyPolicyPage"));
const Faq = lazy(() => import("./pages/faq/FaqPage"));
const SolutionsPage = lazy(() => import("./pages/solutions/SolutionsPage"));
const RequestDemoPage = lazy(() => import("./pages/demo/RequestDemoPage"));
const BlogDetailPage = lazy(() => import("./pages/resources/BlogDetailPage"));
const MediaDetailPage = lazy(() => import("./pages/resources/MediaDetailPage"));
const EligibilityVerificationFaqPage = lazy(() => import("./pages/faqsPages/EligibilityVerificationFaqPage"));
const HealthcareDocumentManagementFaqPage = lazy(() => import("./pages/faqsPages/HealthcareDocumentManagementFaqPage"));
const BehavioralHealthRcmFaqPage = lazy(() => import("./pages/faqsPages/BehavioralHealthRcmFaqPage"));
const RevenueCycleManagementFaqPage = lazy(() => import("./pages/faqsPages/RevenueCycleManagementFaqPage"));
const CashPostingAutomationFaqPage = lazy(() => import("./pages/faqsPages/CashPostingAutomationFaqPage"));
const MedicalBillingServicesFaqPage = lazy(() => import("./pages/faqsPages/MedicalBillingServicesFaqPage"));
const HealthcareBackOfficeFaqPage = lazy(() => import("./pages/faqsPages/HealthcareBackOfficeFaqPage"));
const RcmAiBillingServicesFaqPage = lazy(() => import("./pages/faqsPages/RcmAiBillingServicesFaqPage"));
const HealthcareClaimsProcessingFaqPage = lazy(() => import("./pages/faqsPages/HealthcareClaimsProcessingFaqPage"));
const SpecialtyMedicalBillingFaqPage = lazy(() => import("./pages/faqsPages/SpecialtyMedicalBillingFaqPage"));

import ScrollToTop from "./components/common/ScrollToTop";
import DemoModal from "./components/common/DemoModal";

const App = () => {
  useHubSpotTracking();

  return (
    <>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback={<div style={{ height: '100vh', background: 'var(--color-bg-lite)' }} />}>
        <Routes>
          {/* ---------- PUBLIC ROUTES (NO HEADER / FOOTER) ---------- */}
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          {/* ---------- PROTECTED ROUTES WITH LAYOUT ---------- */}
          <Route
            element={
              <AuthGuard>
                <MainLayout />
              </AuthGuard>
            }
          >
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.PLATFORM} element={<PlatFormPage />} />
            <Route
              path={ROUTES.PAYMENTPOSTING}
              element={<PaymentPostingPage />}
            />
            <Route
              path={ROUTES.LOCKBOXANALYSIS}
              element={<LockBoxAnalysisPage />}
            />
            <Route
              path={ROUTES.CONTRACTANALYSIS}
              element={<ContractAnalysisPage />}
            />
            <Route
              path={ROUTES.ELIGIBILITYDISCOVERY}
              element={<EligibilityDiscoveryPage />}
            />
            <Route
              path={ROUTES.DENIALWORKFLOW}
              element={<DenialWorkFlowPage />}
            />
            <Route
              path={ROUTES.PREBILLSERVICES}
              element={<PreBillServicesPage />}
            />
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
            <Route path={ROUTES.RESOURCES} element={<ResourcesPage />} />
            <Route path={ROUTES.CONTACTUS} element={<ContactUsPage />} />
            <Route path={ROUTES.RCMREADINESS} element={<RCMReadinessScreen />} />
            <Route path={ROUTES.TERMSCONDITIONS} element={<TermsPage />} />
            <Route path={ROUTES.PRIVACYPOLICY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.FAQ} element={<Faq />} />
            <Route path={ROUTES.SOLUTIONS} element={<SolutionsPage />} />
            <Route path={ROUTES.REQUEST_DEMO} element={<RequestDemoPage />} />
            <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />
            <Route path={ROUTES.MEDIA_DETAIL} element={<MediaDetailPage />} />
            <Route path={ROUTES.ELIGIBILITY_VERIFICATION_FAQ} element={<EligibilityVerificationFaqPage />} />
            <Route path={ROUTES.HEALTHCARE_DOCUMENT_MANAGEMENT_FAQ} element={<HealthcareDocumentManagementFaqPage />} />
            <Route path={ROUTES.BEHAVIORAL_HEALTH_RCM_FAQ} element={<BehavioralHealthRcmFaqPage />} />
            <Route path={ROUTES.REVENUE_CYCLE_MANAGEMENT_FAQ} element={<RevenueCycleManagementFaqPage />} />
            <Route path={ROUTES.CASH_POSTING_AUTOMATION_FAQ} element={<CashPostingAutomationFaqPage />} />
            <Route path={ROUTES.MEDICAL_BILLING_SERVICES_FAQ} element={<MedicalBillingServicesFaqPage />} />
            <Route path={ROUTES.HEALTHCARE_BACK_OFFICE_FAQ} element={<HealthcareBackOfficeFaqPage />} />
            <Route path={ROUTES.RCM_AI_BILLING_SERVICES_FAQ} element={<RcmAiBillingServicesFaqPage />} />
            <Route path={ROUTES.HEALTHCARE_CLAIMS_PROCESSING_FAQ} element={<HealthcareClaimsProcessingFaqPage />} />
            <Route path={ROUTES.SPECIALTY_MEDICAL_BILLING_FAQ} element={<SpecialtyMedicalBillingFaqPage />} />
          </Route>

          {/* ---------- FALLBACK ---------- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <DemoModal />
    </>
  );
};

export default App;
