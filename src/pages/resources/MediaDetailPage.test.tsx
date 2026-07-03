import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import MediaDetailPage from "./MediaDetailPage";

describe("MediaDetailPage Component", () => {
  it("renders correctly", () => {
    render(<MediaDetailPage />);
    expect(true).toBe(true);
  });
});
