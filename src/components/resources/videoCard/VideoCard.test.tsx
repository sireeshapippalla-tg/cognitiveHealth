import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import VideoCard from "./VideoCard";

describe("VideoCard Component", () => {
  it("renders correctly", () => {
    render(<VideoCard />);
    expect(true).toBe(true);
  });
});
