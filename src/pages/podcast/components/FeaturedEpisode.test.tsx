import { render, screen } from "../../../utils/test-utils";
import FeaturedEpisode from "./FeaturedEpisode";
import { describe, it, expect } from "vitest";

describe("FeaturedEpisode Component", () => {
  it("renders layout sections and content", () => {
    render(<FeaturedEpisode />);
    expect(screen.getByText("LATEST")).toBeInTheDocument();
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByText("Notes & Key Takeaways")).toBeInTheDocument();
  });
});
