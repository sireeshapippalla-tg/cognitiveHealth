import { render, screen } from "../../utils/test-utils";
import PodcastPage from "./PodcastPage";
import { describe, it, expect } from "vitest";

describe("PodcastPage Component", () => {
  it("renders SEO titles and component structure", () => {
    render(<PodcastPage />);
    expect(screen.getByText("CognitiveHealth Insights")).toBeInTheDocument();
    expect(screen.getByText("Latest Episodes")).toBeInTheDocument();
  });
});
