import { render, screen } from "@testing-library/vue";
import TheSubnav from "../../../src/components/TheSubnav.vue";
import { describe, expect } from "vitest";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

describe("The Subnav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count ", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is NOT on jobs page", () => {
    it("does NOT display job count ", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
