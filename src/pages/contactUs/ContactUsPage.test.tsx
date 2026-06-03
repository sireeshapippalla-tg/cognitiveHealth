import { render, screen } from "../../utils/test-utils";
import ContactUsPage from "./ContactUsPage";
import { describe, it, expect, vi } from "vitest";

vi.mock("../demo/RequestDemoPage", () => ({ default: () => <div data-testid="mock-request-demo" /> }));
vi.mock("../../components/SEO", () => ({ default: () => <div data-testid="mock-seo" /> }));

describe("ContactUsPage Component", () => {
  it("renders SEO and RequestDemoPage", () => {
    render(<ContactUsPage />);
    
    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-request-demo")).toBeInTheDocument();
  });
});
