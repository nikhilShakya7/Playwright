import { expect, test } from "@playwright/test";

import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/ProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
test.describe("Login page test", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.expectProductsPage();
  });

  test("Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("sldkfj", "shdfe");
    await loginPage.expectError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Login with empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("", "secret_sauce");
    await loginPage.expectError("Epic sadface: Username is required");
  });

  test("Login with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("standard_user", "");
    await loginPage.expectError("Epic sadface: Password is required");
  });
});

test.describe("Checkout page test", () => {
  test("Checkout with user data", async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await checkoutPage.open();
    await checkoutPage.checkout("ahkfjad", "sdhs", "uhsd");
  });
  test("checkout with empty form", async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await checkoutPage.open();
    await checkoutPage.checkout("", "", "");
    await expect(checkoutPage.expectError("Error: First Name is required"));
  });
});
