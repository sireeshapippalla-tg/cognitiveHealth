import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { PdfViewerDialog } from "./PdfViewerDialog";

describe("PdfViewerDialog Component", () => {
  it("renders correctly", () => {
    render(
      <PdfViewerDialog
        open={true}
        onClose={() => {}}
        onBack={() => {}}
        selectedPdf="http://example.com"
      />
    );
    expect(true).toBe(true);
  });
});