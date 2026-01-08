import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/ProductPage";

test.describe("Sauce Demo Login Tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.expectProductsPage();
  });

  test("Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("wrong_user", "wrong_password");
    await loginPage.expectError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Login error when username empty", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login("", "secret_sauce");
    await loginPage.expectError("Epic sadface: Username is required");
  });

  test("Login error when password empty", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "");
    await loginPage.expectError("Epic sadface: Password is required");
  });
});
