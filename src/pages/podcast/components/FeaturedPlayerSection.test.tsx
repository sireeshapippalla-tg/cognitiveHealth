import { render, screen } from "../../../utils/test-utils";
import FeaturedPlayerSection from "./FeaturedPlayerSection";
import { describe, it, expect } from "vitest";

describe("FeaturedPlayerSection Component", () => {
  const mockEpisode = {
    title: "Mock Episode Title",
    image: "mock-image.jpg",
  };

  it("renders player controls correctly", () => {
    render(<FeaturedPlayerSection latestEpisode={mockEpisode} />);
    expect(screen.getByAltText("Mock Episode Title")).toBeInTheDocument();
    expect(screen.getByText("Prefer to watch?")).toBeInTheDocument();
  });
});
