import { render, screen } from "@testing-library/vue";
import { describe, expect } from "vitest";
import ActionButton from "../../../src/components/ActionButton.vue";

describe("Action Button", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("applies 1 of several styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });

    expect(button).toHaveClass("primary");
  });
});
