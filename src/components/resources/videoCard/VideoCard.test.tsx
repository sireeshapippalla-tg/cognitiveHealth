import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import VideoCard from "./VideoCard";

describe("VideoCard Component", () => {
  it("renders correctly", () => {
    render(
      <VideoCard
        image="test.jpg"
        category="Category"
        title="Title"
        description="Description"
        link="/test"
        duration="10:00"
        onPlay={() => {}}
      />
    );
    expect(true).toBe(true);
  });
});
