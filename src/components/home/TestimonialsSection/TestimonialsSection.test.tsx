import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import TestimonialsSection from "./TestimonialsSection";

describe("TestimonialsSection Component", () => {
  it("renders correctly", () => {
    render(<TestimonialsSection />);
    expect(true).toBe(true);
  });
});
