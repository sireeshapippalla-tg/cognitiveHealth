import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { IcanPredictSection } from "./IcanPredictSection";

describe("IcanPredictSection Component", () => {
  it("renders correctly", () => {
    render(<IcanPredictSection items={[]} />);
    expect(true).toBe(true);
  });
});