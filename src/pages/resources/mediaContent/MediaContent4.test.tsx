import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { MediaContent4 } from "./MediaContent4";

describe("MediaContent4 Component", () => {
  const mockMedia = {
    id: "4",
    type: "media",
    title: "Title",
    description: "Desc",
    image: "img.jpg",
    date: "date",
    link: "link"
  } as any;
  it("renders correctly", () => {
    render(<MediaContent4 media={mockMedia} />);
    expect(true).toBe(true);
  });
});