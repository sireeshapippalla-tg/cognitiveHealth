import { render, screen } from "../../utils/test-utils";
import CognitiveHealthAboutPage from "./AboutUsPage";
import { describe, it, expect, vi } from "vitest";

// Mock the components since they are just UI sections that we assume are tested independently
vi.mock("../../components/aboutus/whoWeAre", () => ({ default: () => <div data-testid="mock-who-we-are" /> }));
vi.mock("../../components/aboutus/teamSecion", () => ({ default: () => <div data-testid="mock-team-section" /> }));
vi.mock("../../components/aboutus/advisorySection", () => ({ default: () => <div data-testid="mock-advisory" /> }));
vi.mock("../../components/home/CTA/CTASection", () => ({ default: () => <div data-testid="mock-cta" /> }));
vi.mock("../../components/aboutus/whyExistSection", () => ({ default: () => <div data-testid="mock-why-exist" /> }));
vi.mock("../../components/aboutus/aboutusHeroSection", () => ({ default: () => <div data-testid="mock-hero" /> }));
vi.mock("../../components/SEO", () => ({ default: () => <div data-testid="mock-seo" /> }));

describe("AboutUsPage Component", () => {
  it("renders all sections of the about us page", () => {
    render(<CognitiveHealthAboutPage />);
    
    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-who-we-are")).toBeInTheDocument();
    expect(screen.getByTestId("mock-why-exist")).toBeInTheDocument();
    expect(screen.getByTestId("mock-team-section")).toBeInTheDocument();
    expect(screen.getByTestId("mock-advisory")).toBeInTheDocument();
    expect(screen.getByTestId("mock-cta")).toBeInTheDocument();
  });
});
