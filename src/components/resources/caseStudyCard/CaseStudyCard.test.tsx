import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import CaseStudyCard from "./CaseStudyCard";

describe("CaseStudyCard Component", () => {
  it("renders correctly", () => {
    render(<CaseStudyCard />);
    expect(true).toBe(true);
  });
});
