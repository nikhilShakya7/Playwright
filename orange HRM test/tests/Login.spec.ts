import test from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";

test.describe("Login page test", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginpage = new LoginPage(page);
    const dashboard = new Dashboard(page);
    await loginpage.open();
    await loginpage.login("Admin", "admin123");
    await dashboard.gotoDashboard();
  });

  test("login with invalid name", async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.open();
    await loginpage.login("invalid name", "invalid password");
    await loginpage.expError("Invalid credentials");
  });

  test("Login with empty credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("", "");
    await loginPage.emptyField();
  });
});
