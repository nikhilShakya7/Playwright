import { expect, test } from "@playwright/test";
test.describe("Radio button test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://qa-practice.netlify.app/radiobuttons");
  });

  test("Buttons are able to be clicked", async ({ page }) => {
    await page.getByLabel("Radio button 1").check();
    await expect(page.getByLabel("Radio Button 1")).toBeChecked();

    await page.getByLabel("Radio button 2").check();
    await expect(page.getByLabel("Radio Button 2")).toBeChecked();

    await page.getByLabel("Radio button 3").check();
    await expect(page.getByLabel("Radio Button 3")).toBeChecked();

    await expect(page.getByLabel("Radio Button 4")).toBeDisabled();
  });
});
