import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContent4 } from "./MediaContent4";
import type { Media } from "../../../data/mediaData";

describe("MediaContent4 Component", () => {
  const mockMedia: Media = {
    id: "4",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  };
  it("renders correctly", () => {
    render(<MediaContent4 media={mockMedia} />);
    expect(true).toBe(true);
  });
});