import { expect, test } from "@playwright/test";
test.describe("Radio button test", () => {
  test("Radio buttons are visible", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.getByRole("radio", { name: "Radio1" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "Phone" })).toBeVisible();
  });
});
