import { expect, test } from "@playwright/test";

test.describe("Login page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );
  });

  test("Form has all fields", async ({ page }) => {
    await page.getByText("Reset Password").isVisible();
    await page.getByText(
      "Please enter your username to identify your account to reset your password"
    );
    await page.getByLabel("username").isVisible;
    await page.getByPlaceholder("username").isVisible;
    await page.getByRole("button", { name: "Cancel" }).isVisible;
    await page.getByRole("button", { name: "Reset Password" }).isVisible;
  });

  test("Form validation with empty fields", async ({ page }) => {
    await page.getByRole("button", { name: "Reset Password" });
    await expect(page.getByText("Required")).toBeVisible;
  });
});
