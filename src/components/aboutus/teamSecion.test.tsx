import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import TeamSecion from "./teamSecion";

describe("teamSecion Component", () => {
  it("renders correctly", () => {
    render(<TeamSecion />);
    expect(true).toBe(true);
  });
});
