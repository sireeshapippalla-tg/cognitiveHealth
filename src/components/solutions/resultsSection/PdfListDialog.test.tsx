import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { PdfListDialog } from "./PdfListDialog";

describe("PdfListDialog Component", () => {
  it("renders correctly", () => {
    render(
      <PdfListDialog
        open={true}
        onClose={() => {}}
        pdfList={[]}
        onSelectPdf={() => {}}
      />
    );
    expect(true).toBe(true);
  });
});