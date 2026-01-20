import { test, expect } from "@playwright/test";
import { Registration } from "./pages/Registration";

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
      "Jon Doe",
      "Aland",
      "Student",
      "admin1@gmail.com",
      "123456",
      "123456"
    );
    await expect(page).toHaveURL(/registered=true/);
  });

  test("Register with unmatching passwords", async ({ page }) => {
    await registration.signup(
      "Jon Doe",
      "Aland",
      "Student",
      "admin1@gmail.com",
      "123456",
      "1234456"
    );
    await expect(page.getByText("Passwords must match")).toBeVisible();
  });

  test("Register with password less then 6 characters", async ({ page }) => {
    await registration.signup(
      "Jon Doe",
      "Aland",
      "Student",
      "admin1@gmail.com",
      "123",
      "123"
    );
    await expect(
      page.getByText("Password must be at least 6 characters")
    ).toBeVisible();
  });
});
