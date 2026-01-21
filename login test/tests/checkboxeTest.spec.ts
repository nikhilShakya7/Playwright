import { expect, test } from "@playwright/test";
test.describe("Checkbox test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://qa-practice.netlify.app/checkboxes");
  });

  test("All checkbox are checkable and uncheckable", async ({ page }) => {
    const checkbox = page.getByTestId("checkbox1");

    await checkbox.check();
    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

    // await page.getByLabel("Check me out -2").check();
    // await expect(page.getByLabel("Check me out - 2")).toBeChecked();
    // await page.getByLabel("Check me out -2").uncheck();
    // await expect(page.getByLabel("Check me out - 2")).not.toBeChecked();

    // await page.getByLabel("Check me out -3").check();
    // await expect(page.getByLabel("Check me out - 3")).toBeChecked();
    // await page.getByLabel("Check me out -3").uncheck();
    // await expect(page.getByLabel("Check me out - 3")).not.toBeChecked();
  });
});
