import { describe, it } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceHero from "./ResourceHero";

describe("ResourceHero Component", () => {
  it("renders correctly", () => {
    render(<ResourceHero />);
  });
});
