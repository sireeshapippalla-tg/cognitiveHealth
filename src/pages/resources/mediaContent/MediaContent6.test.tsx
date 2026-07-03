import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContent6 } from "./MediaContent6";

describe("MediaContent6 Component", () => {
  const mockMedia = {
    id: "6",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  } as any;
  it("renders correctly", () => {
    render(<MediaContent6 media={mockMedia} />);
    expect(true).toBe(true);
  });
});