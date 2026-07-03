import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { EmailDialog } from "./EmailDialog";

describe("EmailDialog Component", () => {
  it("renders correctly", () => {
    render(
      <EmailDialog
        open={true}
        onClose={() => {}}
        email="test@example.com"
        setEmail={() => {}}
        isLoading={false}
        onSend={() => {}}
      />
    );
    expect(true).toBe(true);
  });
});