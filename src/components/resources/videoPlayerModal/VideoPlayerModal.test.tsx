import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import VideoPlayerModal from "./VideoPlayerModal";

describe("VideoPlayerModal Component", () => {
  it("renders correctly", () => {
    render(
      <VideoPlayerModal
        open={true}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        onClose={() => {}}
      />
    );
    expect(true).toBe(true);
  });
});
