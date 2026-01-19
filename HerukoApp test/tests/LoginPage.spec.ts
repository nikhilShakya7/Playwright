import { test, expect } from "@playwright/test";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

test.describe("Login page test", () => {
  let login: Login;
  let home: Home;
  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    home = new Home(page);
    await login.open();
  });

  test("Login with valid credentials", async ({ page }) => {
    await login.login("tomsmith", "SuperSecretPassword!");
    await expect(page).toHaveURL(/secure/);
    //await home.gotoHome();
  });

  test("Login with invalid username", async ({}) => {
    await login.login("wrongname", "SuperSecretPassword!");
    await login.expError(" Your username is invalid!");
  });

  test("Login with invalid password", async ({}) => {
    await login.login("tomsmith", "wrong password");
    await login.expError("Your password is invalid!");
  });
});

test.describe("Logout test", () => {
  let login: Login;
  let home: Home;
  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    home = new Home(page);
    await login.open();
    await login.login("tomsmith", "SuperSecretPassword!");
  });
  test("logout sucessfull", async ({ page }) => {
    await home.logout();
    await expect(page).toHaveURL(/login/);
  });
});
