import test, { expect } from "@playwright/test";
import { EcommerceLogin } from "./pages/EcommerceLogin";
import { EMAIL, PASSWORD } from "../utils/env";

test.describe("Visibility test", () => {
  test("All fields are visible", async ({ page }) => {
    const ecommercePage = new EcommerceLogin(page);
    await ecommercePage.open();
    await expect(ecommercePage.loginButton).toBeVisible();
    await expect(ecommercePage.userEmail).toBeVisible();
    await expect(ecommercePage.userPassword).toBeVisible();
  });
});

test.describe("Ecommerce login test", () => {
  let ecommercePage: EcommerceLogin;
  test.beforeEach(async ({ page }) => {
    ecommercePage = new EcommerceLogin(page);
    await ecommercePage.open();
  });

  test("Login with invalid credentials", async ({ page }) => {
    await ecommercePage.login("wrong@gmial.com", "sldkvn");
    await expect(page.getByText("Username is incorrect.")).toBeVisible();
    await expect(page.getByText("Password is incorrect.")).toBeVisible();
  });

  test("Login with empty fields", async ({ page }) => {
    await ecommercePage.login("", "");
    await expect(page.getByText("Password is a required field")).toBeVisible();
    await expect(page.getByText("Email is a required field")).toBeVisible();
  });

  test("Login with valid credentials", async ({ page }) => {
    await ecommercePage.login(EMAIL, PASSWORD);
    await expect(page).toHaveURL(/ecommerce/);
  });
});
