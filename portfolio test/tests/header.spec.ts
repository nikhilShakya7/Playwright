import { test, expect } from "@playwright/test";

test("Header is visible", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const header = page.locator("header");
  await header.isVisible();
});

test("Header has all contents and links", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const header = page.locator("header");
  await header.getByText("Nikhil Shakya").isVisible();
  await header.getByRole("link", { name: "Home" }).isVisible();
  await header.getByRole("link", { name: "About" }).isVisible();
  await header.getByRole("link", { name: "Contact" }).isVisible();
  await header.getByRole("link", { name: "Work" }).isVisible();
});

test("Links navigates to correct pages", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  const header = page.locator("header");
  await expect(header.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/"
  );
  await expect(header.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/about"
  );
  await expect(header.getByRole("link", { name: "Work" })).toHaveAttribute(
    "href",
    "/project"
  );
  await expect(header.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/contact"
  );
});
