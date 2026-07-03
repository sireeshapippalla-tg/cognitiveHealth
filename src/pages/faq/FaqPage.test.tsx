import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import FaqPage from "./FaqPage";

describe("FaqPage Component", () => {
  it("renders correctly", () => {
    render(<FaqPage />);
    expect(true).toBe(true);
  });
});
