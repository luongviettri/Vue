import { render, screen } from "@testing-library/vue";
import MainNav from "../../../src/components/MainNav.vue";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("MainNav", () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };
  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Fukuda AI");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map((item) => {
      return item.textContent;
    });

    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Location",
      "Life at Fukuda AI",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("Khi user đăng nhập", () => {
    it("hiển thị avatar của user", async () => {
      renderMainNav();

      //! kiểm tra profile image chưa có
      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      //! click vào nút đăng nhập

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      await userEvent.click(loginButton);

      //! kiểm tra profile image đã có

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });

      expect(profileImage).toBeInTheDocument();
    });
  });
});
