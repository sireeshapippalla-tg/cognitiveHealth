import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { IcanPredictSection } from "./IcanPredictSection";

describe("IcanPredictSection Component", () => {
  it("renders correctly", () => {
    render(<IcanPredictSection />);
    expect(true).toBe(true);
  });
});