import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/vue";
import { afterEach } from "vitest";

// import matchers from "@testing-library/jest-dom/types/matchers";

// expect.extend(matchers);

afterEach(() => {
  cleanup();
});
