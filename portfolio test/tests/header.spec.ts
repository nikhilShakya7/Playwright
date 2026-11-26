import { test, expect } from "@playwright/test";
test.describe("Header Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.shakyanikhil18.com.np/");
    const header = page.locator("header");
    await header.isVisible();
  });

  test("Header has all text links", async ({ page }) => {
    const header = page.locator("header");
    const headerText = [
      "Nikhil Shakya",
      "Home",
      "About",
      "Projects",
      "Contact",
    ];
    for (const text of headerText) {
      await header.getByRole("link", { name: text }).isVisible();
    }
  });

  test("Header links navigates to correct pages", async ({ page }) => {
    const header = page.locator("header");
    const headerLinks = [
      // { name: "Nikhil Shakya", href: "/" },
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
      { name: "Work", href: "/project" },
      { name: "About", href: "/about" },
    ];
    for (const links of headerLinks) {
      await expect(
        header.getByRole("link", { name: links.name })
      ).toHaveAttribute("href", links.href);
    }
  });
});
