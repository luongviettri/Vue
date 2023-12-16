import { describe, it, expect } from "vitest";

import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("add 2 numbers", () => {
    expect(1 + 1).toBe(2);
  });
  describe("evenOrOdd", () => {
    describe("When number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("When number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("multiplies 2 nums together ", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
