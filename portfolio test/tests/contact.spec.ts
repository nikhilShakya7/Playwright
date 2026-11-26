import { test, expect } from "@playwright/test";

test.describe("Contact page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.shakyanikhil18.com.np/contact");
  });
  test("Contact has all required fields", async ({ page }) => {
    const contactFields = [
      page.getByPlaceholder("Name"),
      page.getByLabel("Your name"),
      page.getByPlaceholder("Email Address"),
      page.getByLabel("Email"),
      page.getByLabel("Your Message"),
      page.getByPlaceholder("Your message"),
      page.getByLabel("Subject"),
      page.getByPlaceholder("Subject"),
      page.getByRole("button", { name: "Send Message" }),
    ];
    for (const field of contactFields) {
      await expect(field).toBeVisible;
    }
  });

  test("Validation for empty fields", async ({ page }) => {
    await page.getByRole("button", { name: "Send Message" }).click();
    const errorMessage = [
      "Name is required",
      "Email is required",
      "Please enter a message",
      "Please enter a subject",
    ];
    for (const message of errorMessage) {
      await expect(page.getByText(message)).toBeVisible();
    }
  });

  test("Validation for incorect email format", async ({ page }) => {
    await page.getByLabel("Email Address").fill("Invalid Email"),
      await page.getByText("Invalid Email").isVisible();
  });
});
