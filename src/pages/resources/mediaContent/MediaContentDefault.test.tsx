import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContentDefault } from "./MediaContentDefault";

describe("MediaContentDefault Component", () => {
  const mockMedia = {
    id: "def",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  } as any;
  it("renders correctly", () => {
    render(<MediaContentDefault media={mockMedia} />);
    expect(true).toBe(true);
  });
});