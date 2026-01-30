import test, { expect } from "@playwright/test";
import { EcommerceLogin } from "./pages/EcommerceLogin";
import { invalidData, validData } from "./data/ecommerce.data";

test.describe("Ecommerce login test", () => {
  let ecommerceLogin: EcommerceLogin;
  test.beforeEach(async ({ page }) => {
    ecommerceLogin = new EcommerceLogin(page);
    await ecommerceLogin.open();
  });

  test("All fields are visible", async ({ page }) => {
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  for (const users of validData) {
    test(`Login with: ${users.email}`, async ({ page }) => {
      await ecommerceLogin.login(users.email, users.password);
      await expect(page).toHaveURL(/ecommerce/);
    });
  }

  test("Login with invalid password", async ({ page }) => {
    await ecommerceLogin.login(invalidData.invalidEmail, invalidData.password);
    await expect(page.getByText("Username is incorrect.")).toBeVisible();
    await expect(page.getByText("Password is incorrect.")).toBeVisible();
  });

  test("Login with empty fields", async ({ page }) => {
    await ecommerceLogin.login("", "");
    await expect(page.getByText("Email is a required field")).toBeVisible();
    await expect(page.getByText("Password is a required field")).toBeVisible();
  });
});
