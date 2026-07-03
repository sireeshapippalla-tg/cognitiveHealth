import { render, screen } from "../../../utils/test-utils";
import PreviousEpisodes from "./PreviousEpisodes";
import { describe, it, expect } from "vitest";

describe("PreviousEpisodes Component", () => {
  it("renders latest episodes header and grid", () => {
    render(<PreviousEpisodes />);
    expect(screen.getByText("Latest Episodes")).toBeInTheDocument();
  });
});
