import { render, screen } from "../../utils/test-utils";
import PlatFormPage from "./PlatFormPage";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../components/platform/Hero/Hero", () => ({ default: () => <div data-testid="mock-hero" /> }));
vi.mock("../../components/platform/SuperCharge/SuperCharge", () => ({ default: () => <div data-testid="mock-supercharge" /> }));
vi.mock("../../components/platform/ProductIntelligence/ProductIntelligence", () => ({ default: () => <div data-testid="mock-product-intelligence" /> }));
vi.mock("../../components/platform/EnterpriseReadinessSection/EnterpriseReadinessSection", () => ({ default: () => <div data-testid="mock-enterprise" /> }));
vi.mock("../../components/platform/trustDeploymentSection/TrustDeploymentSection", () => ({ default: () => <div data-testid="mock-trust" /> }));
vi.mock("../../components/home/CTA/CTASection", () => ({ default: () => <div data-testid="mock-cta" /> }));
vi.mock("../../components/SEO", () => ({ default: () => <div data-testid="mock-seo" /> }));

describe("PlatFormPage Component", () => {
  it("renders all platform page sections", () => {
    render(<PlatFormPage />);
    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-supercharge")).toBeInTheDocument();
    expect(screen.getByTestId("mock-product-intelligence")).toBeInTheDocument();
    expect(screen.getByTestId("mock-enterprise")).toBeInTheDocument();
    expect(screen.getByTestId("mock-trust")).toBeInTheDocument();
    expect(screen.getByTestId("mock-cta")).toBeInTheDocument();
  });
});
