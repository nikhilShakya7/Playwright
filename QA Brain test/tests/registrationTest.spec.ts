import { expect, test } from "@playwright/test";
import { Registration } from "./pages/Registration";
import {
  validCredentials,
  emptyRegistrationMessage,
} from "./data/register.data";

test.describe("Registiration page test", () => {
  let registerationPage: Registration;
  test.beforeEach(async ({ page }) => {
    registerationPage = new Registration(page);
    await registerationPage.open();
  });

  test("Registration page has all fields", async ({ page }) => {
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(
      page.getByRole("combobox", { name: "Select Country" })
    ).toBeVisible();
    await expect(
      page.getByRole("combobox", { name: "Account Type" })
    ).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
  });

  test("Registration with valid data", async ({ page }) => {
    await registerationPage.register(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      validCredentials.confirmPassword
    );
    await expect(page).toHaveURL(/registered=true/);
  });

  test("Register with all empty fields", async ({ page }) => {
    await registerationPage.register("", "", "", "", "", "");

    for (const message of Object.values(emptyRegistrationMessage)) {
      await expect(page.getByText(message)).toBeVisible();
    }
  });

  test("Register with different password", async ({ page }) => {
    await registerationPage.register(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      "password"
    );
    await expect(page.getByText("Passwords must match")).toBeVisible();
  });
});
