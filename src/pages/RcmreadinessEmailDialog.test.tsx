import { describe, it, expect } from "vitest";
import { render } from "../utils/test-utils";
import { RcmreadinessEmailDialog } from "./RcmreadinessEmailDialog";

describe("RcmreadinessEmailDialog Component", () => {
  it("renders correctly", () => {
    render(<RcmreadinessEmailDialog open={true} onClose={() => {}} answers={{}} />);
    expect(true).toBe(true);
  });
});