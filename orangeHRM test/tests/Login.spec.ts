import test from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";

test.describe("Login page test", () => {
  test.beforeEach(async ({ page }) => {
    let loginPage: LoginPage;
    let dashboardPage = new Dashboard(page);
    loginPage = new LoginPage(page);
    await loginPage.open();

    test("login with valid credentials", async ({}) => {
      await loginPage.login("Admin", "admin123");
      await dashboardPage.openDashboard();
    });

    test("login with invalid credentials", async ({}) => {
      await loginPage.login("dsvs", "sdf");
      await loginPage.expError("Invalid credentials");
    });
  });
});
