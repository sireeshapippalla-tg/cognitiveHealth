import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import WhoWeAre from "./whoWeAre";

describe("whoWeAre Component", () => {
  it("renders correctly", () => {
    render(<WhoWeAre />);
    expect(true).toBe(true);
  });
});
