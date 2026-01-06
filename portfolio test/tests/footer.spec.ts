import { test, expect } from "@playwright/test";

test.describe("Footer test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.shakyanikhil18.com.np/");
    const footer = page.locator("footer");
    await footer.isVisible();
  });

  test("Footer has all the required link texts", async ({ page }) => {
    const footer = page.locator("Footer");
    const footerLinkTexts = ["Home", "About", "Projects", "Contact"];
    for (const text of footerLinkTexts) {
      await expect(footer.getByRole("link", { name: text })).toBeVisible();
    }
  });

  test("Footer navigates to correct links", async ({ page }) => {
    const footer = page.locator("footer");
    const footerLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/project" },
      { name: "Contact", href: "/contact" },
    ];
    for (const link of footerLinks) {
      await expect(
        footer.getByRole("link", { name: link.name })
      ).toHaveAttribute("href", link.href);
    }
  });
});
