import { render, screen } from "../../../utils/test-utils";
import StatCard from "./StatCard";
import { describe, it, expect } from "vitest";

describe("StatCard Component", () => {
  it("renders title and description", () => {
    render(
      <StatCard
        value="100"
        title="Total Users"
        description="Active users on the platform"
      />
    );
    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("Active users on the platform")).toBeInTheDocument();
  });

  it("renders pure text values", () => {
    render(
      <StatCard
        value="Unlimited"
        title="Plan"
        description="Bandwidth"
      />
    );
    expect(screen.getByText("Unlimited")).toBeInTheDocument();
  });

  it("renders range values properly", () => {
    render(
      <StatCard
        value="2-4%"
        title="Growth"
        description="Annual"
      />
    );
    expect(screen.getByText("2-4%")).toBeInTheDocument();
  });
});
