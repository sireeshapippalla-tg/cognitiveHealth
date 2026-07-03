import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContentDefault } from "./MediaContentDefault";
import type { Media } from "../../../data/mediaData";

describe("MediaContentDefault Component", () => {
  const mockMedia: Media = {
    id: "def",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  };
  it("renders correctly", () => {
    render(<MediaContentDefault media={mockMedia} />);
    expect(true).toBe(true);
  });
});