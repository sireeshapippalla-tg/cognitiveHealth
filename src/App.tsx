import { Routes, Route } from "react-router-dom";
import { AuthGuard, PublicRoute } from "./routes";
import { ROUTES } from "./routes/RoutePaths";

import MainLayout from "./components/layout/MainLayout";

import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import PlatFormPage from "./pages/platform/PlatFormPage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import ResourcesPage from "./pages/resources/ResourcesPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PaymentPostingPage from "./pages/solutions/PaymentPostingPage";
import LockBoxAnalysisPage from "./pages/solutions/LockBoxAnalysisPage";
import ContractAnalysisPage from "./pages/solutions/ContractAnalysisPage";
import EligibilityDiscoveryPage from "./pages/solutions/EligibilityDiscoveryPage";
import DenialWorkFlowPage from "./pages/solutions/DenialWorkFlowPage";
import PreBillServicesPage from "./pages/solutions/PreBillServicesPage";
import ContactUsPage from "./pages/contactUs/ContactUsPage";
import RCMReadinessScreen from "./pages/RcmreadinessScreen";
import TermsPage from "./pages/terms&Conditions/TermsPage";
import PrivacyPolicyPage from "./pages/privacyPolicy/PrivacyPolicyPage";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
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
        </Route>

        {/* ---------- FALLBACK ---------- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
