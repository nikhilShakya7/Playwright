import { test, expect } from "@playwright/test";

test.describe("Login page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  test("Login has all the fields", async ({ page }) => {
    const loginFields = [
      page.getByLabel("Username"),
      page.getByLabel("Password"),
      page.getByPlaceholder("Username"),
      page.getByPlaceholder("Password"),
      page.getByRole("button", { name: "Login" }),
      page.getByRole("link", { name: "Forgot your password?" }),
    ];
    for (const field of loginFields) {
      await expect(field).toBeVisible;
    }
  });

  test("Form validation for empty fields", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByText("Required").isVisible;
  });

  test("Form validation with correct crendentials", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard/);
  });

  test("Form validation with incorrect credentials", async ({ page }) => {
    await page.getByPlaceholder("Username").fill("Incorrect name");
    await page.getByPlaceholder("Password").fill("Incorrect Password");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Invalid credentials")).toBeVisible();
  });
});
