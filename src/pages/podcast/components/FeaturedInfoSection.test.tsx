import { render, screen } from "../../../utils/test-utils";
import FeaturedInfoSection from "./FeaturedInfoSection";
import { describe, it, expect } from "vitest";

describe("FeaturedInfoSection Component", () => {
  const mockEpisode = {
    title: "Mock Episode Title",
    description: "Mock Episode Description",
    date: "July 2, 2026",
    readTime: "30 min",
    category: "AI Technology",
  };

  it("renders episode details correctly", () => {
    render(<FeaturedInfoSection latestEpisode={mockEpisode} episodeNumber={5} />);
    expect(screen.getByText("Mock Episode Title")).toBeInTheDocument();
    expect(screen.getByText("Mock Episode Description")).toBeInTheDocument();
    expect(screen.getByText("EPISODE 5")).toBeInTheDocument();
    expect(screen.getByText("Hosted By")).toBeInTheDocument();
  });
});
