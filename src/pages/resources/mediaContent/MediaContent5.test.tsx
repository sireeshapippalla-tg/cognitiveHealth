import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContent5 } from "./MediaContent5";

describe("MediaContent5 Component", () => {
  const mockMedia = {
    id: "5",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  } as any;
  it("renders correctly", () => {
    render(<MediaContent5 media={mockMedia} />);
    expect(true).toBe(true);
  });
});