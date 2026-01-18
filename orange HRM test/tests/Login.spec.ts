import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

test.describe("Login page test", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.open();
  });

  test("Login with valid credentials", async ({}) => {
    await loginPage.login("Admin", "admin123");
    await dashboardPage.gotoDashboard();
  });

  test("Login with invalid credentials", async ({ page }) => {
    await loginPage.login("wrongUser", "wrongPass");
    await loginPage.expError("Invalid credentials");
  });
});
