import { render, screen } from "../../../utils/test-utils";
import PodcastHero from "./PodcastHero";
import { describe, it, expect } from "vitest";

describe("PodcastHero Component", () => {
  it("renders Title and Subtitle", () => {
    render(<PodcastHero />);
    expect(screen.getByText("CognitiveHealth Insights")).toBeInTheDocument();
    expect(screen.getByText(/Listen to our experts discuss the latest trends/i)).toBeInTheDocument();
  });
});
