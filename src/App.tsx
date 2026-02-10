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

const App = () => {
  return (
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
        <Route path={ROUTES.PAYMENTPOSTING} element={<PaymentPostingPage />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
        <Route path={ROUTES.RESOURCES} element={<ResourcesPage />} />
      </Route>

      {/* ---------- FALLBACK ---------- */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
