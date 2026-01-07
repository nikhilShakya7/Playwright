import { test, expect } from "@playwright/test";
import { LoginPage } from "./page/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage();

  await loginPage.goto();
  await loginPage.login("Admin", "admin123");
  await expect(page).toHaveURL(/dashboard/);
});
