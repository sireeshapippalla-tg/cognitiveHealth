import { render, screen } from "../../utils/test-utils";
import HomePage from "./HomePage";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../components/home/Hero/HeroSection", () => ({ default: () => <div data-testid="mock-hero" /> }));
vi.mock("../../components/home/platformInfo/PlatformIntroSection", () => ({ default: () => <div data-testid="mock-platform-intro" /> }));
vi.mock("../../components/home/ImpactSection/ImpactSection", () => ({ default: () => <div data-testid="mock-impact" /> }));
vi.mock("../../components/home/TestimonialsSection/TestimonialsSection", () => ({ default: () => <div data-testid="mock-testimonials" /> }));
vi.mock("../../components/home/howItWorks/HowItWorksSection", () => ({ default: () => <div data-testid="mock-how-it-works" /> }));
vi.mock("../../components/home/CTA/CTASection", () => ({ default: () => <div data-testid="mock-cta" /> }));
vi.mock("../../components/SEO", () => ({ default: () => <div data-testid="mock-seo" /> }));

describe("HomePage Component", () => {
  it("renders all home page sections", () => {
    render(<HomePage />);
    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-platform-intro")).toBeInTheDocument();
    expect(screen.getByTestId("mock-impact")).toBeInTheDocument();
    expect(screen.getByTestId("mock-testimonials")).toBeInTheDocument();
    expect(screen.getByTestId("mock-how-it-works")).toBeInTheDocument();
    expect(screen.getByTestId("mock-cta")).toBeInTheDocument();
  });
});
