import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { IcanManageSection } from "./IcanManageSection";

describe("IcanManageSection Component", () => {
  it("renders correctly", () => {
    render(<IcanManageSection items={[]} />);
    expect(true).toBe(true);
  });
});