import { render, screen } from "../../utils/test-utils";
import BulletList from "./BulletList";
import { describe, it, expect } from "vitest";

describe("BulletList Component", () => {
  it("renders a list of items", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(<BulletList items={items} />);
    
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent("Item 1");
    expect(listItems[2]).toHaveTextContent("Item 3");
  });

  it("renders empty list when no items provided", () => {
    render(<BulletList items={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
