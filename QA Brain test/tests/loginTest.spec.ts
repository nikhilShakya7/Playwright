import test from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { Homepage } from "./pages/Homepage";

test.describe("Login page test", () => {
  let loginPage: LoginPage;
  let homePage: Homepage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new Homepage(page);
    await loginPage.open();
  });

  test("Login with valid credentials", async ({ page }) => {
    await loginPage.login("qa_testers@qabrains.com", "Password123");
    await homePage.gotoHome();
  });

  test("Login with empty email", async ({ page }) => {
    await loginPage.login("", "");
    await loginPage.expError("Email is a required field");
  });

  //   test("Email validation test", async ({}) => {
  //     await loginPage.login("wrong email", "Pas");
  //     await loginPage.isValidEmail("Your email and password both are invalid!");
  //   });
});

test("Logout test", async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homePage = new Homepage(page);
  await loginpage.open();
  await loginpage.login("qa_testers@qabrains.com", "Password123");
  await homePage.gotoHome();
  await homePage.logout();
});
