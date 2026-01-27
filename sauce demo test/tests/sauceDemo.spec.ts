import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { invalidCredentials, validCredentials } from "./Data/credentials";

test.describe("Login page test", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  for (const user of validCredentials) {
    test(`Login with valid credentials name:${user.name}`, async ({ page }) => {
      await loginPage.login(user.name, user.password);
      await expect(page).toHaveURL(/inventory/);
    });
  }

  for (const invaliduser of invalidCredentials) {
    test(`Login fails for invalid user: ${invaliduser.name}`, async ({
      page,
    }) => {
      await loginPage.login(invaliduser.name, invaliduser.password);
      await expect(
        page.getByText(
          "Epic sadface: Username and password do not match any user in this service"
        )
      ).toBeVisible();
    });
  }

  test("Login with empty credentials", async ({ page }) => {
    await loginPage.login("", "");
    await expect(
      page.getByText("Epic sadface: Username is required")
    ).toBeVisible();
  });
});
