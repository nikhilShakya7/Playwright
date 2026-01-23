import { test, expect } from "@playwright/test";
import { Registration } from "./pages/Registration";
import { validCredentials } from "./data/register.data";

test.describe("Visibility test", () => {
  test("all fields are visible", async ({ page }) => {
    const registrationPage = new Registration(page);
    await registrationPage.open();
    await expect(registrationPage.userName).toBeVisible();
    await expect(registrationPage.userAccount).toBeVisible();
    await expect(registrationPage.userCountry).toBeVisible();
    await expect(registrationPage.userEmail).toBeVisible();
    await expect(registrationPage.userPassword).toBeVisible();
    await expect(registrationPage.userConfirmPassword).toBeVisible();
    await expect(registrationPage.signupButton).toBeVisible();
  });
});

test.describe("Registration page test", () => {
  let registration: Registration;
  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);
    await registration.open();
  });

  test("Registration wit empty fields", async ({ page }) => {
    await registration.signup("", "", "", "", "", "");
    await expect(page.getByText("Name is a required field")).toBeVisible();
    await expect(page.getByText("Country is a required field")).toBeVisible();
    await expect(page.getByText("Account is a required field")).toBeVisible();
    await expect(page.getByText("Email is a required field")).toBeVisible();
    await expect(page.getByText("Password is a required field")).toBeVisible();
    await expect(page.getByText("Confirm Password is required")).toBeVisible();
  });

  test("Register with valid credentials", async ({ page }) => {
    await registration.signup(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      validCredentials.confirmPassword
    );
    await expect(page).toHaveURL(/registered=true/);
  });

  test("Register with unmatching passwords", async ({ page }) => {
    await registration.signup(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      "1234456"
    );
    await expect(page.getByText("Passwords must match")).toBeVisible();
  });

  test("Register with password less then 6 characters", async ({ page }) => {
    await registration.signup(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      "123",
      "123"
    );
    await expect(
      page.getByText("Password must be at least 6 characters")
    ).toBeVisible();
  });
});
