import { test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { HomePage } from "./pages/homePage";
test.describe("Login page test", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.open();
  });

  test("Login with valid credentials", async ({}) => {
    await loginPage.login("student", "Password123");
    await homePage.gotoHome();
  });

  test("Login with invalid credentials", async ({}) => {
    await loginPage.login("wjefl", "Password123");
    await loginPage.expError("Your username is invalid!");
  });

  test("Login with invald password", async ({}) => {
    await loginPage.login("student", "asfj");
    await loginPage.expError("Your password is invalid!");
  });

  test.describe("Home page logout button test", () => {
    test("Logout button click", async ({}) => {
      await loginPage.login("student", "Password123");
      await homePage.gotoHome();
      await homePage.logout();
    });
  });
});
