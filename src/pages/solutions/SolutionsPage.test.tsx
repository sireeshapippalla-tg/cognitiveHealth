import { render, screen } from "../../utils/test-utils";
import SolutionsPage from "./SolutionsPage";
import { describe, it, expect, vi } from "vitest";

let mockPathname = "";
let mockHash = "";
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({
      pathname: mockPathname,
      hash: mockHash,
    }),
  };
});

vi.mock("../../components/solutions/paymentPosting/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-payment-hero" /> }));
vi.mock("../../components/solutions/lockboxAnalysis/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-lockbox-hero" /> }));
vi.mock("../../components/solutions/denialWorkFlow/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-denial-hero" /> }));
vi.mock("../../components/solutions/eligibilityDiscovery/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-eligibility-hero" /> }));
vi.mock("../../components/solutions/contractAnalysis/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-contract-hero" /> }));
vi.mock("../../components/solutions/preBillServices/solutionsHeroSection", () => ({ default: () => <div data-testid="mock-prebill-hero" /> }));

vi.mock("../../components/solutions/solutionsTab/SolutionsTabs", () => ({ default: () => <div data-testid="mock-tabs" /> }));
vi.mock("../../components/solutions/resultsSection/ResultsSection", () => ({ default: () => <div data-testid="mock-results" /> }));
vi.mock("../../components/SEO", () => ({ default: () => <div data-testid="mock-seo" /> }));

describe("SolutionsPage Component", () => {
  it("renders payment posting hero by default (no hash)", () => {
    mockPathname = "/solutions/payment-posting";
    mockHash = "";
    render(<SolutionsPage />);
    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-payment-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("mock-results")).toBeInTheDocument();
  });

  it("renders lockbox hero when path includes /lockbox", () => {
    mockPathname = "/solutions/lockbox";
    mockHash = "";
    render(<SolutionsPage />);
    expect(screen.getByTestId("mock-lockbox-hero")).toBeInTheDocument();
  });

  it("renders denial workflow hero when path includes /denials", () => {
    mockPathname = "/solutions/denials";
    mockHash = "";
    render(<SolutionsPage />);
    expect(screen.getByTestId("mock-denial-hero")).toBeInTheDocument();
  });
});
