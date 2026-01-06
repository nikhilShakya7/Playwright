import { test, expect } from "@playwright/test";
test("Footer is visile", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const footer = page.locator("footer");
  await footer.isVisible();
});

test("Footer has all the link texts", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(footer.getByRole("link", { name: "About" })).toBeVisible();
  await footer.getByRole("link", { name: "Projects" }).isVisible();
  await footer.getByRole("link", { name: "Contact" }).isVisible();
});

test("Footer navigates to correct links", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/contact"
  );
  await expect(footer.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/about"
  );
  await expect(footer.getByRole("link", { name: "Projects" })).toHaveAttribute(
    "href",
    "/project"
  );
  await expect(footer.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/"
  );
});
