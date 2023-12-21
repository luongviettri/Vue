import { render, screen } from "@testing-library/vue";
import MainNav from "../../../src/components/MainNav.vue";
import { describe, expect } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    // screen.debug();
    const companyName = screen.getByText("Fukuda AI");
    expect(companyName).toBeInTheDocument();
  });
});
