import { expect, test } from "@playwright/test";

test("Page has all the contents", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");
  await expect(page.getByText("Hi, I am Nikhil")).toBeVisible;
  await page.getByRole("button", { name: "View my work" });
  await page.getByRole("button", { name: "Learn more about me" });
});
test("Button navigates to correct page", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/");

  await page.getByRole("button", { name: "View my work" }).click();
  await expect(page).toHaveURL(/project/);
  await page.getByRole("button", { name: "Learn more about me" }).click();
  await expect(page).toHaveURL(/about/);
});
