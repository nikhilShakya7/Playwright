import test, { expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { invalidCredentials, validCredentials } from "./data/login.data";
import { LogoutPage } from "./pages/LogoutPage";

test.describe("Login page test", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });
  test("Login with valid credentials", async ({ page }) => {
    await loginPage.login(validCredentials.email, validCredentials.password);
    await expect(page).toHaveURL("https://practice.qabrains.com/?logged=true");
  });

  test("Login with invalid credentials", async ({ page }) => {
    await loginPage.login(
      invalidCredentials.invalidEmail,
      invalidCredentials.invalidEmail
    );
    await expect(
      page.getByText("Your email and password both are invalid!")
    ).toBeVisible();
  });

  test("Login with empty fields", async ({ page }) => {
    await loginPage.login("", "");
    await expect(page.getByText("Email is a required field")).toBeVisible();
    await expect(page.getByText("Password is a required field")).toBeVisible();
  });
});

test("Logout test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);
  await loginPage.open();
  await loginPage.login(validCredentials.email, validCredentials.password);
  await logoutPage.logout();
  await expect(page).toHaveURL("https://practice.qabrains.com/");
});
